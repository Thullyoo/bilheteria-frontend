import { MovieGetResponse } from "./moviegetresponse.interface";

export type MovieResponse = Omit<MovieGetResponse, 'sessions'>