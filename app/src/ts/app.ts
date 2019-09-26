require('dotenv').config();
import * as Bolt from '@slack/bolt';
import './modules/slack-block-kits';
import { sampleBlock, sectionWithSelect, sectionWithSelect2 } from './modules/slack-block-kits';

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
  // say(`Hey there <@${message.user}>!`);

  // 型エラーが出たのでanyで型指定した変数を設定することで対応した
  // let blocks:any = {
  //   blocks: [
  //   {
  //     "type": "section",
  //     "text": {
  //       "type": "mrkdwn",
  //       "text": `Hey there <@${message.user}>!`
  //     },
  //     "accessory": {
  //       "type": "button",
  //       "text": {
  //         "type": "plain_text",
  //         "text": "Click Me"
  //       },
  //       "action_id": "button_click"
  //     }
  //    }
  //   ]
  // };

  // interactive message
  say(sampleBlock);
});

app.action('button_click', ({ body, ack, say }) => {
  // Acknowledge the action
  ack();
  say(`<@${body.user.id}> clicked the button`);
});

app.action('click_body', ({ body, ack, say }) => {
  // Acknowledge the action
  ack();
  say(`<@${body}> clicked the button`);
});

// この echo コマンドは 単純にコマンドをエコー（こだま）
app.command('/echo', async ({ command, ack, say }) => {
  // コマンドリクエストを確認
  ack();

  say(`${command.text}`);
});

// 三茶ランチ WIP
app.command('/sancha_lunch', async ({ command, ack, say }) => {
  // コマンドリクエストを確認
  ack();

  say(sectionWithSelect2);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
