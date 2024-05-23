import styled from "@emotion/styled";

export const Inner = styled.div`
  padding: ${(props) => props.padding};
  width: calc(100% - 1125px);
  h2 {
    font-size: 32px;
    margin-bottom: 28px;
  }

  ul {
    margin-bottom: 38px;

    li:not(:first-of-type) {
      margin-bottom: 10px;
    }

    li:first-of-type {
      color: #333;
      font-size: 18px;
      margin-bottom: 18px;
    }

    li {
      a {
        font-size: 15px;
        color: #555;
      }
    }
  }
`;
