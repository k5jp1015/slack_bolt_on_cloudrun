 export const sampleBlock:any = {
  blocks: [
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        // "text": `Hey there <@${message.user}>!`
        "text": `Hey there hogehoge!`
      },
      "accessory": {
        "type": "button",
        "text": {
          "type": "plain_text",
          "text": "Click Me"
        },
        "action_id": "button_click"
      }
    }
  ]
}
