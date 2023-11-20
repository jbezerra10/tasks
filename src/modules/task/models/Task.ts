import {v4 as uuidV4} from "uuid";

export class Task {
    id?: string;
    title: string;
    description: string;
    completed_at: Date;
    created_at: Date;
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4();
        }
    }
}