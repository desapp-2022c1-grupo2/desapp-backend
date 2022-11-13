export class Message {
    constructor(
        private to: string,
        private from: string,
        private subject: string,
        private text: string,
        private html: string) {
    }
}
