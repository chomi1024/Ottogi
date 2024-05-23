import styled from "@emotion/styled";

export const Top = styled.header`
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 40px 0 8px;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
`;

export const Inner = styled.div`
  width: 1410px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: ${(props) => props.top && "space-between"};
  align-items: center;
  font-size: 18px;

  h1 {
    width: 171px;
    height: 32px;

    a {
      width: inherit;
      height: inherit;
      display: block;

      span {
        display: block;
        width: inherit;
        height: inherit;
        background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Logo.svg?alt=media&token=a9fa2351-6496-4cfd-a1f7-68fb5754f317")
          no-repeat center center;
        background-size: contain;
      }
    }
  }

  > div:last-of-type {
    display: flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      margin-left: 100px;
      font-weight: 500;

      li {
        transition-duration: 0.1s;
        a {
          line-height: 21px;
        }
      }
      li:hover {
        color: #d3233a;
      }
    }
  }
`;

export const Bottom = styled.nav`
  background-color: white;
  position: sticky !important;
  z-index: 999;
  width: 100%;
  height: auto;
  top: 0px;
  left: 0;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.05);
`;

export const Image = styled.img``;

export const Search = styled.div`
  position: relative;
  width: 470px;
  height: 45px;

  input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 60px 0 20px;
    border-radius: 100px;
    border: 1px solid #ddd;
    transition-duration: 0.3s;
  }
  input:hover {
    border: 1px solid #1d1d1b;
  }
  input:focus {
    outline: 0px solid #1d1d1b;
  }
`;

export const Icon = styled.div`
  display: flex;
  font-size: 14px;
`;

export const Icon_login = styled.div`
  a {
    position: relative;
    display: block;
    text-align: center;

    span {
      display: inline-block;
      text-align: center;
      width: 30px;
      height: 30px;
      background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_login.svg?alt=media&token=11906fe3-e397-4d98-b8bd-d5636de35dcc")
        no-repeat center top;
      background-size: contain;
    }

    p {
      letter-spacing: -1px;
      margin-top: 6px;
    }
  }
`;

export const Icon_mypage = styled.div`
  margin: 0 20px;

  a {
    position: relative;
    display: block;
    text-align: center;

    span {
      display: inline-block;
      width: 30px;
      height: 30px;
      background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_my.svg?alt=media&token=43c2b447-db42-4ac6-aa61-20d020675434")
        no-repeat center top;
      background-size: contain;
    }

    p {
      letter-spacing: -1px;
      margin-top: 6px;
    }
  }
`;

export const Icon_cart = styled.div`
  a {
    position: relative;
    display: block;
    text-align: center;

    span {
      display: inline-block;
      width: 30px;
      height: 30px;
      background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/icon_bag.svg?alt=media&token=fccb3c5a-7b5f-4bb6-bf87-3933fc0ec692")
        no-repeat center top;
      background-size: contain;
    }
    p {
      letter-spacing: -1px;
      margin-top: 6px;
    }
  }
`;

export const Category_All = styled.button`
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  font-size: inherit;
  height: 100%;
  height: 75px;

  span {
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/menu_.svg?alt=media&token=a9e34bc1-8fb3-43db-b597-d6c7fa87fb69")
      no-repeat center top;
    background-size: contain;
    margin-right: 8px;
  }
`;
export const category_new = styled.li``;

export const category_only = styled.li`
  margin-left: 70px;
`;

export const category_event = styled.li`
  margin-left: 70px;
`;

export const category_gift = styled.li`
  margin-left: 70px;
  width: 75px;
  height: 21px;
  display: flex;
  align-items: center;
  position: relative;

  a {
    display: inline-block;
    z-index: 9;
    position: absolute;
    top: -7px;
    background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Header%2Fottogift.png?alt=media&token=bf325561-9510-427c-96ad-a924fc11b699)
      no-repeat center center;
    background-size: contain;
    width: 75px;
    height: 26px;
  }
`;

export const category_best = styled.li`
  margin-left: 70px;
`;
