import styled from "styled-components";

export const Segment = styled.div`
  padding: 0;

  @media (max-width: 1100px) {
    padding: 0 45px;
    text-align: center;
  }
`;

export const Item = styled.div`
  border: 8px solid #222;

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
  font-size: 20px;
  line-height: 1.1;
  margin-bottom: 8px;
  @media (max-width: 600px) {
    font-size: 17px;
  }
`;

export const SubTitle = styled.h2``;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
