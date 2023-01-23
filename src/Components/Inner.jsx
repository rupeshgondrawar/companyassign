import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material-next/Button";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const OuterBox = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #d9e1f969;
  box-shadow: 2px 5px 10px 0px #b19898ba;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
  flex-wrap:wrap;
`;

const InnerBox = styled.div`
  margin: 10px;
  text-align: start;
`;

const Inner = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <OuterBox key={item.id}>
        <Container>
          <InnerBox>
            <h5>USERNAME</h5>
            <span>{item.username}</span>
          </InnerBox>
          <InnerBox>
            <h5>NAME</h5>
            <span>{item.name}</span>
          </InnerBox>
          <InnerBox>
            <h5>CONTACT</h5>
            <span>{item.phone}</span>
          </InnerBox>
          <InnerBox>
            <h5>EMAIL</h5>
            <span>{item.email}</span>
          </InnerBox>
          <InnerBox onClick={() => setShowDetails(!showDetails)}>
            <Button variant="outlined" color="error" endIcon={showDetails?<ArrowDropUpIcon/>:<ArrowDropDownIcon/>}>
                {
                    showDetails ? <strong>Hide Details</strong> : <strong>Show Details</strong>
                }
            </Button>
          </InnerBox>
        </Container>
        {showDetails && (
          <div>
            <div>
              <h1>{item.name}</h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <InnerBox>
                <h3>ADDRESS</h3>
                <h5>{item.address.street + " " + item.address.suite}</h5>
                <h5>{item.address.city}</h5>
                <h5>{item.address.zipcode}</h5>
              </InnerBox>

              <InnerBox>
                <h3>COMPANY</h3>
                <h5>{item.company.name}</h5>
                <h5>{item.company.bs}</h5>
                <h5>{item.company.catchPhrase}</h5>
              </InnerBox>
            </div>
          </div>
        )}
      </OuterBox>
    </>
  );
};

export default Inner;
