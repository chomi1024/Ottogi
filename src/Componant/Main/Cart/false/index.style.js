import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 110px 0;

  a {
    display: inline-block;
    margin: 0 auto;
    padding: 20px 40px;
    border: 1px solid #d3233a;
    border-radius: 6px;
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
  }
`;
