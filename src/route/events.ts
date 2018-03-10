import {mockEvent} from "../mocks";

import {Router} from "express";

export const eventRouter = Router();

eventRouter.get("/", (req, res) => {
    res.send([mockEvent]);
});
