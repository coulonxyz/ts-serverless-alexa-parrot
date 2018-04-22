"use strict";
exports.__esModule = true;
var alexa_simple_response_1 = require("./src/helpers/alexa-simple-response");
exports.alexa = function (event, context, cb) {
    console.log("IN ALEXA HANDLER");
    var data = JSON.parse(event.body);
    console.log("DATA: " + JSON.stringify(data));
    var response;
    // message: data.request.intent.slots.any.value,
    try {
        var body = void 0;
        switch (data.request.type) {
            case "LaunchRequest":
                body = JSON.stringify(alexa_simple_response_1.dumpSingleReponse("Hello There"));
                break;
            case "IntentRequest":
                body = JSON.stringify(alexa_simple_response_1.dumpSingleReponse("you said: " + data.request.intent.slots.any.value));
                break;
            default:
                body = JSON.stringify(alexa_simple_response_1.dumpSingleReponse("Something went wrong"));
        }
        response = {
            statusCode: 200,
            headers: {},
            body: body,
            isBase64Encoded: false
        };
    }
    catch (error) {
        console.log("ERROR: " + error.message);
        response = {
            statusCode: 200,
            body: error.message
        };
    }
    console.log("POTENTIAL RESPONSE FROM ALEXA HANDLER:");
    console.log(response);
    cb(null, response);
};
//# sourceMappingURL=handler.js.map