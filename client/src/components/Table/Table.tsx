import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

interface IProps {}

const Table: React.FunctionComponent<IProps> = () => {
    const [data, setData] = useState({ csv: []});
    const url = 'http://localhost:4001/v1/api/pricing/csv'

    useEffect(() => {
      const fetchCsvData = async () => {
        axios.get(url).then(json => setData({csv:json.data}))
        console.log(data);
      };
      fetchCsvData();
    }, []);

  
    const headings = Object.keys(data.csv[0]);

    return (
      <div>
        <ReactBootStrap.Table striped bordered hover size="sm">
          <thead> 
          <tr>
            {headings.map((heading) => <th>{heading}</th>)}
          </tr>
          </thead>
          <tbody>
          {data.csv.map((row) => (
            <tr>
              {headings.map((heading) => <td>{row[heading]}</td>)}
            </tr>
          ))}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    );
  };

export default Table;
