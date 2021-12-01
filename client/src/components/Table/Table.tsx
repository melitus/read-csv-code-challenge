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
      };
      fetchCsvData();
    }, []);
    console.log({data});

  
    // const headings = Object.keys(data.csv.data[0]);

    return (
      <div>
<ReactBootStrap.Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Tiers</th>
              <th>Starter</th>
              <th>Advanced</th>
              <th>Enterprise</th>
            </tr>
          </thead>
          <tbody>
            {data.csv &&
              data.csv.map((item) => (
                <tr key={item.Tiers}>
                  <td>{item.Tiers}</td>
                  <td>{item.Starter}</td>
                  <td>{item.Advanced}</td>
                  <td>{item.Enterprise}</td>
                </tr>
              ))}
          </tbody>
        </ReactBootStrap.Table>      </div>
    );
  };

export default Table;
