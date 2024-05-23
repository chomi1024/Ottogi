import styled from "@emotion/styled";

export const Inner = styled.div`
  width: ${(props) => props.width};
  margin: 0 auto;
  overflow: ${(props) => props.overflow};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
`;

export const Title = styled.h2`
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontsize || "40px"};
`;
