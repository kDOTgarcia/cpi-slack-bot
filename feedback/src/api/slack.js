import { WebClient } from '@slack/web-api';

export async function sendFeedback (name, email, dsn, commercial, feedback) {
    const token = "put token here";
    const web = new WebClient(token);

    const channelId = "GBZ5N9UGK";

    var message = {
        "text": "Submitter: " + name + "\nEmail Address: " + email + "\nDSN: " + dsn + "\nCommercial: " + commercial + "\nComments: " + feedback
    }

    const res = await web.chat.postMessage({ channel: channelId, attachments: [message] });

    console.log(res)
}


