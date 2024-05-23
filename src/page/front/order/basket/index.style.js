import styled from "@emotion/styled";

export const BasketWrapper = styled.div``;

export const Title = styled.h2`
  font-size: 40px;
  padding: 40px 0;
`;

export const ContentsWrapper = styled.div`
  display: flex;
`;

export const leftWrapper = styled.div`
  width: calc(100% - 390px);
`;

export const rightWrapper = styled.div`
  width: 390px;
  height: 506px;
  margin-left: 60px;
`;

export const TapmenuWrapper = styled.ul`
  width: 100%;
  font-size: 18px;
  display: flex;
`;

export const tap = styled.li`
  cursor: pointer;
  width: calc(100% / 3);
  text-align: center;
  padding: 16px 0;
  font-weight: ${(props) => props.active && "700"};
  color: ${(props) => props.active && "#fff"};
  background-color: ${(props) => props.active && "#D3233A"};
  border: ${(props) =>
    props.active ? "1px solid #D3233A" : "1px solid #e4e4e4"};

  &:first-of-type {
    border-radius: 6px 0 0 6px;
  }

  &:last-of-type {
    border-radius: 0 6px 6px 0;
  }
`;
