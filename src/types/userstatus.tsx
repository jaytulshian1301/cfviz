interface problem{
    contestId: number;
    index: string;
    name: string;
    type:string;
    points: number;
    rating: number;
    tags: string[];
}
interface author{
    contestId:number;
    members: {handle: string}[];
    participantType: string;
    ghost: boolean;
    startTimeSeconds: number;
}
export interface result{
    id: number;
    contestId: number;
    creationTimeSeconds: number;
    relativeTimeSeconds: number;
    problem: problem;
    author: author;
    programmingLanguage: string;
    verdict: string;
    testset: string;
    passedTestCount: number;
    timeConsumedMillis:number;
    memoryConsumedBytes:number;
}




export interface userStatus{
    status: string;
    result: result[];
}

