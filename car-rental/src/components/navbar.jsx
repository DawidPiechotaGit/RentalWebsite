import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../images/logo/logo.png";

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

const Logoimg = styled.img`
  width: 150px;
  height: 50px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export function Navbar() {
  return (
    <>
      <NavContainer className="nav-container">
        <Logoimg src={Logo} />
        <StyledList>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/models">Our Cars</NavLink>
          </li>
          <li>
            <NavLink to="/team">The Team</NavLink>
          </li>
        </StyledList>
        <BtnContainer className="btn-container">
          <button>Sign In</button>
          <button>Register</button>
        </BtnContainer>
      </NavContainer>
    </>
  );
}
