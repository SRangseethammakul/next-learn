import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
const Div = styled.div`
  width: 60%;
  margin: 10;
  p {
    color: ${(props) => props.theme.colors.primary};
  }
`;
const LayoutPage = ({ children }) => {
  return (
    <Div>
      <NavBar />
      <>{children}</>
    </Div>
  );
};

export default LayoutPage;
