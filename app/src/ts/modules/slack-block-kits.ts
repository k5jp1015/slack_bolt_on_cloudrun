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

export const sectionWithSelect:any = {
  blocks:[
    {
      "type": "section",
      "text": {
        "type": "mrkdwn",
        "text": "近場？ちょっと歩く？それとも遠くまで？"
      },
      "accessory": {
        "type": "static_select",
        "placeholder": {
          "type": "plain_text",
          "text": "Select an item",
          "emoji": true
        },
        "options": [
          {
            "text": {
              "type": "plain_text",
              "text": "近場",
              "emoji": true
            },
            "value": "100"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "ちょっと歩く",
              "emoji": true
            },
            "value": "300"
          },
          {
            "text": {
              "type": "plain_text",
              "text": "遠くまで行ってみる",
              "emoji": true
            },
            "value": "700"
          }
        ],
        "action_id": "button_click"
      }
    }
  ]
}
