## 参考サイト
https://qiita.com/girlie_mac/items/93538f9a69eb4015f951

### ローカル→外部IP連携で動かしましょう
#### まずはローカルDocker起動
プロジェクトのルートディレクトリでdocker起動

```
docker build -t slack-app:0.1 .
docker run --rm -p 3000:3000 --name slack-app  slack-app:0.1
```

#### ngrokコマンドで自分のlocalhostを外部公開する
[公式サイト](https://ngrok.com/)を参考にngrokをダウンロード

プロジェクトのルートディレクトリ上にてngrokコマンドを実行
`ngrok http 3000`

以下のように表示されるので、Forwardingのどちらかのurlに「/slack/events」をつけたものを「slack app設定画面」、Event SubscriptionsのRequest URLに設定する

```
Session Status                online
Session Expires               7 hours, 59 minutes
Version                       2.3.34
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://dfa24ea2.ngrok.io -> http://localhost:3000
Forwarding                    https://dfa24ea2.ngrok.io -> http://localhost:3000      
```

上記の場合だと、登録するURLは`http://dfa24ea2.ngrok.io/slack/events`

### これをcloud runで動かすためには
#### cloud build上でビルド　&　cloud run上にデプロイ
gcloud sdkの最新版が入っていることを前提に以下のコマンドを叩く。
`gcloud beta run deploy`におけるリージョンはasia-northeast1でよい

```
gcloud builds submit --tag gcr.io/devteam-1341/slack-app
gcloud beta run deploy --image gcr.io/devteam-1341/slack-app --platform managed
```

cloud run上でデプロイが成功すれば公開URLを取得できるので、それに「/slack/events」をつけたものを「slack app設定画面」、Event SubscriptionsのRequest URLに設定する

##　その他
アプリがチャンネルのイベントをリスニングするためには、Subscribe to Bot Eventsの設定が必須