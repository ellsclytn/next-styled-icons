import React from "react";
import styled from "styled-components";
import { Search } from "styled-icons/material/Search";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default () => (
  <div>
    <Search />
    <Title>My page</Title>
  </div>
);
