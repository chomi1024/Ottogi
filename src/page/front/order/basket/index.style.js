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
  width: 960px;
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
    margin-right: -1px;
  }

  &:last-of-type {
    border-radius: 0 6px 6px 0;
    margin-left: -1px;
  }
`;

export const BoxWrapper = styled.div`
  padding: 40px 0 0;
  margin-bottom: 20px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    input {
      display: none;
    }

    strong {
      margin-left: 10px;
    }
  }

  ul {
    li {
      font-size: 15px;
      color: #888;
      display: inline-block;

      &:first-of-type {
        padding-right: 10px;
      }

      &:nth-of-type(2)::before {
        content: "";
        border-left: 1px solid #ccc;
        height: 12px;
        padding-left: 10px;
      }
    }
  }
`;

export const CheckBox = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  background-color: ${(props) => props.checked && "#d3233a"};
  border: ${(props) => props.checked || "1px solid #ddd"};
  width: 24px;
  height: 24px;
  transition: 0.3s;
  border-radius: 4px;

  &::after {
    content: "";
    background: ${(props) =>
      props.checked
        ? "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_check_w.svg?alt=media&token=c65c7f90-5d2f-4ef0-9da3-48a836f6d4fe)no-repeat center center"
        : "url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_check_gray.svg?alt=media&token=ddf72103-13e5-483c-b606-5ee98868449b)no-repeat center center"};
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const rightWrapper = styled.div`
  width: 390px;
  margin-left: 60px;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
  overflow: hidden;
`;

export const TopWrapper = styled.div`
  padding: 30px 30px 0 30px;
  h3 {
    font-size: 28px;
    font-weight: 700;
  }

  > ul {
    padding: 30px 0 25px;
    border-bottom: 1px solid #e4e4e4;

    li {
      display: flex;
      justify-content: space-between;
    }

    li:nth-of-type(2) {
      padding: 15px 0;
    }
  }

  > div {
    margin: 25px 0 32px;
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    ul {
      padding: 40px 0 0;
      color: #aaa;
      font-size: 14px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 24px 40px;
  border-radius: 0 0 6px 0px;
  background-color: ${(props) => (props.cart ? "#d3233a" : "#ccc")};
  color: #fff;
  font-weight: 700;
  font-size: 18px;
`;

export const CartListWrapper = styled.div`
  width: 100%;
  height: 300px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
