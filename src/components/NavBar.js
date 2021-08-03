import React from "react";
import Link from "next/link";
import styled from "styled-components";
const NavDiv = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top:50px;
`;
const NavBar = () => {
  return (
    <NavDiv>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blogs">
        <a>blogs</a>
      </Link>
      <Link href="/dashboard">
        <a>dashboard</a>
      </Link>
      <Link href="/protect">
        <a>Protect</a>
      </Link>
    </NavDiv>
  );
};

export default NavBar;
