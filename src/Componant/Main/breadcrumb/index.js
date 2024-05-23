import styled from "@emotion/styled";
import Link from "next/link";

const Breadcrumb_Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #aaaaaa;

  a:nth-of-type(2) {
    color: #1d1d1b;
  }

  a:nth-of-type(3) {
    color: #1d1d1b;
  }
`;

const Arrow = styled.span`
  background: url(https://firebasestorage.googleapis.com/v0/b/project-90a5b.appspot.com/o/Main%2Ficon%2Ficon_arrow_right_12.png?alt=media&token=1aa1194b-a58d-4e6a-bcfa-be5eea3edd24)
    no-repeat center center;
  display: inline-block;
  width: 12px;
  height: 12px;
  margin: 0 10px;
`;

export default function Breadcrumb(props) {
  return (
    <>
      <Breadcrumb_Wrapper>
        <Link href="/main">
          <a>홈</a>
        </Link>

        <Arrow />

        <Link href={"/front/" + props.src1}>
          <a>{props.nav1}</a>
        </Link>

        {props.nav2 && (
          <>
            <Arrow />
            <Link href={"/front/product/category/" + props.src2}>
              <a>{props.nav2}</a>
            </Link>
          </>
        )}
      </Breadcrumb_Wrapper>
    </>
  );
}
