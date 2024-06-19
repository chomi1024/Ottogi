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

    &:hover {
      border: 1px solid #1d1d1b;
    }

    &:focus {
      outline: 0;
      border: 1px solid #1d1d1b;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  input {
    width: 100%;
    height: 100%;
  }

  button {
    background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_search_21.svg?alt=media&token=9d81e838-d259-400a-a56a-e1af6f79daec)
      no-repeat center center;
    width: 21px;
    height: 21px;
    position: absolute;
    top: 12px;
    right: 20px;
    cursor: pointer;
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

export const SearchWrapper = styled.div`
  display: ${(props) => (props.isDropdownVisible ? "flex" : "none")};
  border: 1px solid #eee;
  background: white;
  border-radius: 10px;
  position: absolute;
  z-index: 1000;
  left: 0;
  font-size: 16px;
  top: calc(100% + 10px);
`;

export const RecentWrapper = styled.div`
  border-right: 1px solid #eee;
  div {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin-bottom: 20px;

    button {
      font-size: 15px;
      color: #888;
      background-color: transparent;
      text-decoration: underline;
      cursor: pointer;
    }
  }

  ul {
    color: #333;
    li {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        position: relative;

        &::after {
          content: "";
          width: 0;
          height: 1px;
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: #333;
          transition: 0.3s;
        }

        &:hover {
          &::after {
            content: "";
            width: calc(100% + 10px);
            height: 1px;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: #333;
            transition: 0.3s;
          }
        }
      }

      button {
        cursor: pointer;
        background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_remove_16.png?alt=media&token=e7311ca7-8f04-42ed-af8b-e23228c8ae04)
          no-repeat center center;
        width: 16px;
        height: 16px;
      }
    }
  }

  padding: 29px 30px;
  width: 238px;
`;

export const RecommendedWrapper = styled.div`
  min-height: 457px;
  padding: 29px 30px;
  width: 238px;
  border-right: 1px solid #eee;

  ul {
    margin-top: 20px;

    li {
      color: #d3233a;
      font-size: 15px;
      margin-bottom: 40px;

      a {
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;

        &::after {
          display: inline-block;
          position: absolute;
          content: "";
          width: 0;
          height: 1px;
          left: 0;
          bottom: 0;
          background-color: #1d1d1b;
          transition: 0.3s;
        }

        &:hover::after {
          display: block;
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #1d1d1b;
          transition: 0.3s;
        }
      }
    }
  }
`;

export const PopularWrapper = styled.div`
  padding: 29px 30px;
  width: 238px;

  div {
    display: flex;
    align-items: end;
    justify-content: space-between;

    span {
      font-size: 14px;
      color: #aaa;
    }
  }

  ul {
    padding-top: 20px;

    li {
      margin-bottom: 20px;

      span {
        display: inline-block;
        width: 20px;
        font-weight: 700;
        margin-right: 7px;
        text-align: center;
      }

      a {
        position: relative;

        &::after {
          display: block;
          position: absolute;
          content: "";
          width: 0;
          height: 1px;
          bottom: 1px;
          left: 0;
          background-color: #1d1d1b;
          transition: 0.3s;
        }

        &:hover::after {
          display: block;
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;

          left: 0;
          background-color: #1d1d1b;
          transition: 0.3s;
        }
      }
    }
  }
`;

export const KeywordsTop3 = styled.span`
  font-size: 15px;
  color: #d3233a;
`;

export const KeywordsIndex = styled.span`
  font-size: 15px;
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

export const Category_All = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border: none;
  font-size: inherit;
  height: 75px;
  cursor: pointer;
  position: relative;
  z-index: 10000;

  &:hover > div ul:first-of-type {
    display: block;
  }

  span {
    &::before {
      content: "";
      display: inline-block;
      width: 22px;
      height: 22px;
      background: url("https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/menu_.svg?alt=media&token=a9e34bc1-8fb3-43db-b597-d6c7fa87fb69")
        no-repeat center top;
      background-size: contain;
      margin-right: 8px;
    }
  }
`;

export const CategoryWrapper = styled.ul`
  display: none;
  font-size: 16px;
  width: 240px;
  padding: 15px 0;
  border: 1px solid #e4e4e4;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  width: 240px;
  max-height: 780px;
  height: calc(100vh - 175px);
  top: 75px;
  left: 0;
  background-color: white;
`;

export const Category = styled.li`
  padding: 12px 20px;
  line-height: 1.55;
  width: 240px;
  background-color: white;
  cursor: pointer;
  margin-right: 30px;

  &:hover {
    color: #d3233a;
    font-weight: 700;
  }

  &:hover ul {
    display: block;
  }
`;

export const SubcategoryWrapper = styled.ul`
  position: absolute;
  top: 75px;
  left: 239px;
  width: 240px;
  height: 100%;
  max-height: 780px;
  height: calc(100vh - 175px);
  border: 1px solid #e4e4e4;
  padding: 15px 0;
  color: #d3233a;
  margin-right: 10px;
  background-color: white;
`;

export const Subcategory = styled.li`
  width: 240px;
  font-weight: normal;
  padding: 12px 20px;
  line-height: 1.55;
  word-break: keep-all;
  color: #1d1d1b;
  font-weight: normal;
  margin-right: 30px;
  font-size: 16px;

  &:hover {
    color: #d3233a;
    font-weight: 700;
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
