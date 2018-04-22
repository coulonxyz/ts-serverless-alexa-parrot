import {APIGatewayEvent, Callback, Context, Handler} from 'aws-lambda';
import {dumpSingleReponse} from "./src/helpers/alexa-simple-response";


export const alexa: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {

    console.log("IN ALEXA HANDLER");

    const data = JSON.parse(event.body);
    console.log("DATA: " + JSON.stringify(data));

    let response;

    // message: data.request.intent.slots.any.value,

    try {

        let body;
        switch (data.request.type) {
            case "LaunchRequest":
                body = JSON.stringify(dumpSingleReponse("Hello There"));
                break;
            case "IntentRequest":
                body = JSON.stringify(dumpSingleReponse("you said: " + data.request.intent.slots.any.value));
                break;
            default:
                body = JSON.stringify(dumpSingleReponse("Something went wrong"));

        }

        response = {
            statusCode: 200,
            headers: {
            },
            body,
            isBase64Encoded: false
        };

    } catch (error) {
        console.log("ERROR: " + error.message);
        response = {
            statusCode: 200,
            body: error.message
        }
    }
    console.log("POTENTIAL RESPONSE FROM ALEXA HANDLER:");
    console.log(response);


    cb(null, response);
};

