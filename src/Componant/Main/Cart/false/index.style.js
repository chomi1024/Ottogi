import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 110px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;

  span {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    color: #d3233a;
    margin-top: 20px;
    font-weight: 700;
    a {
      display: inline-block;
      padding: 20px 40px;
      border: 1px solid #d3233a;
      border-radius: 6px;
      text-align: center;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
  color: #ccc;
  font-size: 18px;

  &::before {
    content: "";
    display: block;
    background: url(https://www.ottogimall.co.kr/static/imgs/front/cw/images/icon_mark02.png)
      no-repeat center;
    height: 50px;
    margin-bottom: 10px;
  }
`;
