import { Inner } from "../../../../../styles/main";
import * as S from "./index.style";
import NoResult from "./noResult";

export default function SearchKeywordUI(props) {
  return (
    <Inner width={"1410px"}>
      {/* 검색결과 없을 시 */}
      {props.searchResult || <NoResult />}

      {/* 검색결과 */}
      {props.searchResult && <div>짠</div>}
    </Inner>
  );
}
