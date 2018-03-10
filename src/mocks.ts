import {IEvent} from "./model/Event";

import {IOpponent} from "./model/Opponent";
import {IPath} from "./model/Path";

export let mockSport: IPath = {
    label: "Sport 1",
};
export let mockCategory: IPath = {
    label: "Category 1",
};
export let mockCompetition: IPath = {
    label: "Competition 1",
};
export let mockOpponent1: IOpponent = {
    name: "Opponent 1",
};
export let mockOpponent2: IOpponent = {
    name: "Opponent 2",
};

export let mockEvent: IEvent = {
    desc: "TestEvent",
    opponents: [mockOpponent1, mockOpponent2],
    path: {
        category: mockCategory,
        competition: mockCompetition,
        sport: mockSport,
    },
    start: "2018-12-31T23:59Z",
};
