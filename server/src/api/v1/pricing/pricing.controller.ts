import { Request, Response } from 'express';
import { IPricing } from './pricing.interface';

import fs from 'fs';
import { parse } from 'csv-parse';

const csvFilePath = __dirname + '/pricing.model.csv';

export const readDataFromCvsFile = async (req: Request, res: Response) => {
  try {
    const csvParser = parse({columns: true}, function (err, records: IPricing) {
        res.status(200).json({message: "Fetch csv data successfully", data:records })
    });
    fs.createReadStream(csvFilePath).pipe(csvParser);
    } catch (error) {
        res.status(500).json({message: "Error occurred while fetching all csv file", error })
    }
};
