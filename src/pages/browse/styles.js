import styled from "styled-components";

export const Segment = styled.div`
  padding: 0;

  @media (max-width: 1100px) {
    padding: 0 45px;
    text-align: center;
  }
`;

export const Item = styled.div`
  border: 5px solid #222;
  margin: 3px;

  color: white;
  overflow: hidden;
  flex: 0 1 calc(25% - 1em);
`;

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 19px;
  border: 2px solid #222;
  background-color: #222;
  margin: 0;
  padding: 5px 8px;

  line-height: 1.1;
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

export const SubTitle = styled.h2``;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
