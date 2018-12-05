import React from "react";
import styled from "styled-components";
import { Search } from "styled-icons/material";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const MyIcon = styled(Search)`
  color: red;
  height: 24px;
`;

export default () => (
  <div>
    <p>Toggle commenting this line to see the error</p>
    <MyIcon />
    <p>Hi there</p>
    <Title>My page</Title>
  </div>
);
