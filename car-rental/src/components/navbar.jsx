import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

export function Navbar() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}
