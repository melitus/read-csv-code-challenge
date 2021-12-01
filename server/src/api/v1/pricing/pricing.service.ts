import Papa from 'papaparse';
import fs from 'fs';

import { IPricing } from './pricing.interface';


const csvFilePath = __dirname + '/pricing.model.csv';

export const readCSV = async ():Promise<IPricing> => {
    const csvFile = fs.readFileSync(csvFilePath)
    const csvData = csvFile.toString()  
    return new Promise(resolve => {
      Papa.parse(csvData, {
        header: true,
        transformHeader: header => header.trim(),
        complete: results => {
          console.log('Complete', results.data.length, 'records.'); 
          resolve(results.data);
        }
      });
    });
  };

