import styled from "@emotion/styled";

export const Inner = styled.section`
  width: 1410px;
  margin: 0 auto;
`;

export const loginWrapper = styled.div`
  text-align: center;

  h2 {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;
    font-size: 32px;
    font-weight: 700;
    color: #d3233a;

    img {
      display: inline-block;
      width: 148px;
      object-fit: contain;
      margin-right: 3px;
    }
  }

  form {
    width: 450px;
    margin: 0 auto;
  }

  ul {
    display: flex;
    justify-content: end;
    margin-top: 15px;

    li {
      font-size: 15px;
      line-height: 18px;
      color: #888;
    }

    li:first-of-type::after {
      content: "";
      border-right: 1px solid #ccc;
      height: 12px;
      margin: 0 10px;
    }
  }
`;

export const buttonWrapper = styled.div`
  margin-top: 30px;
  font-weight: 700;

  a {
    display: inline-block;
    width: 100%;
    padding: 20px 40px 20px 40px;
    text-align: center;
    border-radius: 6px;
  }

  a:first-of-type {
    background: #d3233a;
    color: white;
    margin-bottom: 10px;
  }

  a:last-of-type {
    border: 1px solid #d3233a;
    color: #d3233a;
  }
`;

export const login_box = styled.div`
  font-size: 16px;

  div {
    width: 100%;
    height: 60px;
    display: block;
    font-size: 16px;
    line-height: 50px;
    color: #333;
    border: 1px solid #ddd;

    input {
      width: 100%;
      height: 100%;
      padding: 0 20px;
    }

    input:focus {
      outline: none;
    }
  }

  div:nth-of-type(1) {
    border-radius: 6px 6px 0 0;
    transition: 0.2s;

    input {
      border-radius: 6px 6px 0 0;
    }
  }

  div:nth-of-type(1):hover {
    border: 1px solid #333;
    transition: 0.2s;
  }

  div:nth-of-type(2) {
    margin-top: -1px;
    position: relative;
    transition: 0.2s;
    border-radius: 0 0 6px 6px;

    input {
      border-radius: 0 0 6px 6px;
    }
  }

  div:nth-of-type(2):hover {
    border: 1px solid #333;
    transition: 0.2s;
  }
`;

export const showButton = styled.button`
  position: absolute;
  cursor: pointer;
  background: ${(props) =>
    props.buttonState
      ? "url('https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_view.png?alt=media&token=4e74cb3a-8f06-4e3b-a750-0dd4b01d1afb') no-repeat center center"
      : "url('https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_view_off.png?alt=media&token=d2cad512-42f1-4e67-9b91-708dc82787f5') no-repeat center center"};
  width: 24px;
  height: 24px;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

export const snsWrapper = styled.div`
  margin-top: 80px;

  strong {
    padding: 0 15px;
  }

  div {
    margin-top: 25px;

    > a {
      display: inline-block;
      width: 60px;
      height: 60px;

      span {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
      }
    }

    > a:first-child {
      span {
        background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_sns_kakao.png?alt=media&token=648b93b7-0cda-4582-8df3-0ed25922f7e6)
          no-repeat center center;
        width: 100%;
        height: 100%;
      }
    }

    > a:nth-of-type(2) {
      margin-left: 40px;

      span {
        background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_sns_naver.png?alt=media&token=f6f9efff-2e8e-44fd-8dab-48d87cd22975)
          no-repeat center center;
        width: 100%;
        height: 100%;
      }
    }

    > a:nth-of-type(3) {
      margin-left: 40px;

      span {
        background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_sns_apple.png?alt=media&token=40986fff-2612-4779-a7bb-6c3da0098c05)
          no-repeat center center;
        width: 100%;
        height: 100%;
      }
    }
  }

  p {
    span {
      color: red;
      margin: 0 2px;
    }

    a {
      color: red;
      text-decoration: underline;
    }
  }
`;
