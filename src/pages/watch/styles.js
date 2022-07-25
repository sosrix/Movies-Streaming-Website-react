import styled from "styled-components";

export const Container = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 100px 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  background-color: #222;
  color: #fff;
  text-align: center;
  margin: 0;
  padding: 10px 8px;

  line-height: 1.1;
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  line-height: normal;
  color: #fff;
  padding: 10px;
  background-color: #222;
  border: 2px solid #222;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
