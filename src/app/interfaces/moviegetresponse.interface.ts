import { Session } from "./session.interface";

export interface MovieGetResponse{
    id: Number,
    name: String,
    image: String,
    description: String,
    actors: String[],
    genre: String,
    release_date: String,
    sessions: Session[]
}