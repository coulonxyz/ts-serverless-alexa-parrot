import {APIGatewayEvent, Callback, Context, Handler} from 'aws-lambda';
import {getSlotAnyValueFromIntentRequest} from "./src/helper/data-request.helper";
import {AlexaResponse} from "./src/model/alexa-reponse.model";
import {normalizeAlexaReponse} from "./src/normalizer/alexa-reponse.normalizer";


export const alexa: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {

    const data = JSON.parse(event.body);

    console.log("DATA IN: " + JSON.stringify(data));

    let response;

    // message: data.request.intent.slots.any.value,

    try {

        let alexaResponse: AlexaResponse;
        switch (data.request.type) {
            case "LaunchRequest":
                alexaResponse = new AlexaResponse(false, "Hello There.");
                break;
            case "IntentRequest":
                alexaResponse = new AlexaResponse(
                    false,
                    "You said: " + getSlotAnyValueFromIntentRequest(data)
                );
                break;
            default:
                alexaResponse = new AlexaResponse(true, "Something went wrong.");
        }

        console.log(JSON.stringify(alexaResponse));

        response = {
            statusCode: 200,
            headers: {},
            body: normalizeAlexaReponse(alexaResponse),
            isBase64Encoded: false
        };

    } catch (error) {
        console.log("ERROR: " + error.message);
        response = {
            statusCode: 500,
            body: error.message
        }
    }

    console.log("DATA IN: " + response);

    cb(null, response);
};

