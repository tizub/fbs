import {IOpponent} from "./Opponent";
import {IPath} from "./Path";

export interface IEvent {
    desc: string;
    opponents: IOpponent[];
    path: {
        category: IPath,
        competition: IPath,
        sport: IPath,
    };
    start: string;
}
