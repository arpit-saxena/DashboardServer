import express, { NextFunction, Request, Response } from 'express';

import User from '../models/user';
import Event from '../models/project';
import Item from '../models/item';
import Project from '../models/project';
import Resource from '../models/resources';

const router = express.Router({mergeParams: true});

const allModels = [
    User,
    Event,
    Item,
    Project,
    Resource
];

const backup = (req: Request, res: Response, next: NextFunction) => {
    
}

export default router;