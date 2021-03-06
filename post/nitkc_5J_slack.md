---
title: 木更津高専 情報工学科 5年を支える技術
date: 2020-12-10 19:00:00 +0900
---

木更津高専 情報工学科 5年を支える技術
===

この投稿は [木更津高専アドベントカレンダー 2020](https://qiita.com/advent-calendar/2020/nit_kisarazu) 9日目です。

## 情報工学科 5年について

情報工学科 5年(以下、弊学級)では、連絡ツールとしてSlackのワークスペースを使用しています。業務連絡が主ですが、円滑な情報共有が可能になるように、様々なツールと連携をしています。

## カレンダー

弊学級では学校行事の管理を目的として共有カレンダーをGoogle Calendarで作成しています。
例えば11月だと以下のような内容です。

![](https://i.imgur.com/DZshdFS.png)

これをSlackのGoogle Calendar連携で#generalに毎週・毎日流しています。

![](https://i.imgur.com/Rwhrsns.png)

学校行事だけではなく、課題も追加しているため、個人的には見落としが減りました。

同じ要領で、時間割チャンネルには時間割カレンダーを流しています。

![](https://i.imgur.com/WECGmht.png)


## 学内ページ

木更津高専には、学生と保護者のみが見れる内部ページがあります。お知らせや各種資料が配布されるのがここです。

以前まではページが更新されても気づけないことがあり、定期的に見に行く必要がありました。不便だったのでどうにか更新情報をSlackに流したいと考えたところ、RSSが提供されていたのでSlackと連携してフィードを流しています。

![](https://i.imgur.com/HSX0Zph.png)

一つ問題があり、RSS内に余計な空白と改行などが入るため、整形する必要がありました。
そこで、Zaiperでフィードを監視させ、更新があれば内容を組み立ててSlackへ投稿するルールを書きました。

![](https://i.imgur.com/A5bG5RC.png)


## 学生用メール

学校からの連絡はメーリングリスト経由で学生に届きます。ただメールを頻繁に使用していない学生もおり、またメーリングリストへの参加も紙での申請が必要で手間がかかります。
そのため、メーリングリストへ送られてきたメールをSlackへ流しています。

![](https://i.imgur.com/siiZS4w.png)


このアーキテクチャは少し複雑です。まず、Zaiperにてメールアドレスを生成し、そこへ来たメール尾Slackへ投稿するルールを作成します。

![](https://i.imgur.com/7CEYWiI.png)

その後、メーリングリストに自分の持っているgmailアドレスを登録し、それをzaiperのメールアドレスにSMTP転送するようgmailに設定を入れます。
(一部文字を?で伏せています)

![](https://i.imgur.com/RjMetxY.png)

## まとめ

以上が弊学級を支える技術でした。便利だなと思ったら真似してみてください。
