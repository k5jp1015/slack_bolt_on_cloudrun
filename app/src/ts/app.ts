
require('dotenv').config();
import * as Bolt from '@slack/bolt';

const app = new Bolt.App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// appのhomeチャンネルを開いたときにhello
// app.event('app_home_opened', ({ event, say }) => {
//   say(`Hello world, <@${event.user}>!`);
// });

// Listens to incoming messages that contain "hello"
app.message('hello', ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  say(`Hey there <@${message.user}>!`);
});

// この echo コマンドは 単純にコマンドをエコー（こだま）
app.command('/echo', async ({ command, ack, say }) => {
  // コマンドリクエストを確認
  ack();

  say(`${command.text}`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
