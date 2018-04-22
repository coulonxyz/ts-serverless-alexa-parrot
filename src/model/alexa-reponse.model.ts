export class AlexaResponse {
    public version: string = "1.0";
    public shouldEndSession: boolean;
    public outputSpeech: string;
    public repromptSpeech?: string;

    constructor(shouldEndSession: boolean,
                outputSpeech: string,
                repromptSpeech?: string) {

        this.shouldEndSession = shouldEndSession;
        this.outputSpeech = outputSpeech;
        if (repromptSpeech) {
            this.repromptSpeech = repromptSpeech;
        }
    }
}