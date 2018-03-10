import {Request, Response} from "express";
import * as moment from "moment";
export const logTime = (req: Request, res: Response, next: () => void) => {
    // tslint:disable:no-console
    console.log("Time: ", moment().toISOString());
    // tslint:enable:no-console
    next();
};
