import { Attempt } from "./attempt";

export interface User {
_id?:string,
username:string,
email:string,
totalScore: number,
avgScore: number,
totalAttempts: number,
attempts: Attempt[]
}

