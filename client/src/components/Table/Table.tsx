import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";

interface IProps {}

const Table: React.FunctionComponent<IProps> = () => {
    const [data, setData] = useState();
    const url = 'http://localhost:4001/v1/api/pricing/csv'

    useEffect(() => {
      const fetchCsvData = async () => {
        axios.get(url).then(json => setData(json.data))
        console.log(data);
      };
      fetchCsvData();
    }, [setData]);

  
    // const headings = Object.keys(data.blogs[0]);
    // console.log({headings})

    return (
      <div>
        <h1>i am here</h1>
      </div>
    );
  };

export default Table;