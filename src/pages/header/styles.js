import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Background = styled.section`
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 165 px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 267px;
  }
`;
export const ButtonLink = styled(RouterLink)`
  display: block;
  background-color: #4e3e33;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;
