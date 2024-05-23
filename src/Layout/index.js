import styled from "@emotion/styled";
import LayoutFooter from "./Footer/index.container";
import LayoutHeader from "./Header/index.container";
import { useRouter } from "next/router";

const LayoutBody = styled.main`
  padding: ${(props) => props.route.route == "/main" || "25px 0 130px"};
`;

export default function Layout(props) {
  const route = useRouter();

  return (
    <>
      <LayoutHeader />
      <LayoutBody route={route}>{props.children}</LayoutBody>
      <LayoutFooter />
    </>
  );
}
