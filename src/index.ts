import {eventRouter} from "./route/events";
import {logTime} from "./route/utils";

import * as express from "express";
import {Application, Router} from "express";

const app: Application = express();

export const mainRouter = Router();

app.use(logTime).use("/api", mainRouter);
mainRouter.use("/events", eventRouter);

app.listen(3000, () => {
    // tslint:disable:no-console
    console.log("FBS app listening on port 3000!");
    // tslint:enable:no-console
});
