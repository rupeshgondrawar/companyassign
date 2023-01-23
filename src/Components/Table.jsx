import React from "react";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Inner from "./Inner";
import styled from "styled-components";

const api = `https://jsonplaceholder.typicode.com/users`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 25px;
  padding: 20px;
`;

const Table = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async () => {
    let res = await fetch(api);
    let result = await res.json();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      {data &&
        data
          .slice(page * 2 - 2, page * 2)
          .map((item) => <Inner item={item} key={item.id} />)}
      <Pagination
        count={5}
        showFirstButton
        showLastButton
        onChange={(e, p) => setPage(p)}
      />
    </Box>
  );
};

export default Table;
