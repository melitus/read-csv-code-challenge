import { Request, Response } from 'express';

import { IPricing } from './pricing.interface';
import { readCSV } from './pricing.service';

export const readDataFromCvsFile = async (req: Request, res: Response) => {
  try {
    let parsedData:IPricing = await readCSV(); 
    if (!parsedData) {
        res.status(404).json({message: "Csv does not have any data" })
      } else {
        res.status(200).json({message: "Fetch csv data successfully", data:parsedData })
    }
    } catch (error) {
        res.status(500).json({message: "Error occurred while fetching all csv file", error })
    }
};
