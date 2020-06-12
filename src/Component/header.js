import React from "react";
import styled from "@emotion/styled";

const Header = () => {
  const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 2rem;
    background: linear-gradient(120deg, #062b41, #052131);
  `;
  const Logo = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    color: white;
    transition: color 0.3s ease-in-out;
    cursor:pointer;
    &:hover {
      color: orange;
    }
  `;
  const NavBar = styled.nav`
    padding-right: 4rem;
  `;
  const Link = styled.a`
    text-decoration: none;
    padding-left: 10px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    &:hover {
      color: orange;
    }
  `;
  const Button = styled.a`
    text-decoration: none;
    padding: 5px;
    margin-left:10px;
    border: 1px solid orange;
    background-color:orange;
    cursor:pointer;
    color: white;
    font-size: 1rem;
  `;
  return (
    <HeaderStyle>
      <Logo>first react project</Logo>
      <NavBar>
        <Link>about me</Link>
        <Link>projects</Link>
        <Link>ads</Link>
        <Button>button</Button>
      </NavBar>
    </HeaderStyle>
  );
};

export default Header;
