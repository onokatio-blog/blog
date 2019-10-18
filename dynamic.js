const fetch = require("node-fetch")
const fs = require('fs').promises

fs.readdir('./markdown')
	.then( (files) => {
		files = files.filter( (filename) => filename.endsWith('.md'))
			.filter( (filename) => filename !== ('index.md') )
			.filter( (filename) => filename !== ('404.md') )
		readPromises = files.map( (filename) => {
			return fs.readFile('./markdown/' + filename, "utf-8")
				.then( (content) => Promise.resolve([content, filename]) )
		})
		Promise.all(readPromises).then( (contents) => {
			const summaries = contents.map( ([content, filename]) => {
				let title
				if( ( result = content.match(/^.+\n=+/) ) !== null){
					title = result[0].split('\n')[0]
				}else if( ( result = content.match(/^# .+\n/,'')) !== null){
					title = result[0].split('\n')[0].replace(/^# +/,'')
				}else{
					title = 'Failed to get title'
				}
				content = content.replace(/^.+\n=+/,'') // remove (title \n ===)
					.replace(/^# .+\n/,'')          // remove (# title\n)
					.replace(/\n#+ /g,'\n')         // remove markdown sharp
					.replace(/`/g,'')               // remove markdown back quote
					.replace(/^ +- /g,'')           // remove markdown hyphen
					.replace(/\n/g,' ')             // replace newline to space

				return {  filename: filename, title: title, summary: content.slice(0,200)}
			})
			json = JSON.stringify(summaries)
			fs.writeFile('dynamic/markdownlist', json)
		})
	} )