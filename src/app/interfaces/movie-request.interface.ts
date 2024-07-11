import { MovieGetResponse } from "./moviegetresponse.interface";

export type MovieRequest = Omit<MovieGetResponse, 'id' | 'sessions'>