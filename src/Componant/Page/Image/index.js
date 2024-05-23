import styled from "@emotion/styled";
import Link from "next/link";

const ALink = styled.a`
  height: 100%;
  display: block;

  img {
    display: inline-block;
    object-fit: cover;
  }
`;

export default function ImageClick(props) {
  return (
    <Link href={props.linkAddress}>
      <ALink>
        <img src={props.imageAddress} alt={props.detail} />
      </ALink>
    </Link>
  );
}
