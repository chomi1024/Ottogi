import styled from "@emotion/styled";

export const slide = styled.div`
  width: 80%;
  padding: 25px 0;
  margin: 0 auto;

  h3 {
    font-size: 22px;
    padding-left: 54px;
    padding-bottom: 20px;
  }

  > div {
    background-color: red;
    padding: 20px 25px;

    div {
      background-color: blue;
      margin: 20px 0 25px;
      height: 353px;
    }
  }
`;
