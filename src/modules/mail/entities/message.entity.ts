export class Message {
    constructor(
        public to: string,
        public from: string,
        public subject: string,
        public text: string,
        public html: string) {
    }
}
