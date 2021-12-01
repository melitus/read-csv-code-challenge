/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import axios from "axios";

import './Table.css';

interface IProps {}


const CsvReaderTable: React.FunctionComponent<IProps> = () => {
    const [csvFile, setCsvFile] = useState<any>([]);
    
    
    useEffect(() => {
      console.log('useEffect called')
      fetchCsvData();
    }, []);

    const fetchCsvData = async () => {
      const url = 'http://localhost:5000/v1/api/pricing/csv'
      const response = await axios.get(url)
      console.log('response', response.data.data)
      setCsvFile(response.data.data)
  }

  const renderHeader = () => {
      let headerElement = ['tiers', 'starter', 'enterprise', 'advanced']

      return ( 
        headerElement.map((key, index) => {
          return <th key={index}>{key.toUpperCase()}</th>
      })
  )
    } 

  const renderBody = () => {
    return csvFile && csvFile.map((result: any, i: any) => {
      console.log('result', result)
        return (
            <tr key={i}>
                <td>{result.Tiers}</td>
                <td>{result.Starter}</td>
                <td>{result.Enterprise}</td>
                <td>{result.Advanced}</td>
            </tr>
        )
    })
}
 
    return (
       <>
            <h1 id='title'>CSV Reader Code Challenge</h1>
            <table id='csv'>
                <thead>
                   {renderHeader()}
                </thead>
                <tbody>
              {renderBody()}
                </tbody>
            </table>
        </>
    );
  };

export default CsvReaderTable;
