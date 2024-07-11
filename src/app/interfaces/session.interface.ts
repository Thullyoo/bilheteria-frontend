import { Ticket } from "./ticket.interface"

export interface Session{
    id: Number,
    room: String,
    capacity: String,
    day: Date,
    time: Date
    tickets: Ticket[]
    movie_id: Number
}