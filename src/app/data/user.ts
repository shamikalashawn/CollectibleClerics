export class User {
    _id: string;
    username: string;
    email: string;
    password: string;
    status: string;
    cardCollection: Array<string>;

    constructor() {
        this.username = "";
        this.email = "";
        this.password = "";
        this.status = "user";
        this.cardCollection = [];
    }
}