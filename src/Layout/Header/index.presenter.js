import Link from "next/link";
import * as H from "./index.style";

export default function LayoutHeaderUI(props) {
  return (
    <>
      <H.Top>
        <H.Inner top={true}>
          <h1>
            <Link href="/main">
              <a>
                <span />
              </a>
            </Link>
          </h1>

          <H.Search ref={props.wrapperRef}>
            <H.InputWrapper>
              <form>
                <input
                  type="text"
                  placeholder="라면은 역시 오뚜기 라면~🍜"
                  onClick={props.handleInputClick}
                />
                <button />
              </form>
            </H.InputWrapper>

            <H.SearchWrapper isDropdownVisible={props.isDropdownVisible}>
              {props.searchKeywords.length == 0 || (
                <H.RecentWrapper>
                  <div>
                    <h4>최근 검색어</h4>
                    <button onClick={props.onClickAllDelete}>전체 삭제</button>
                  </div>
                  <ul>
                    {props.searchKeywords?.map((el, index) => (
                      <li key={index}>
                        <Link href="">
                          <a>{el}</a>
                        </Link>
                        <button onClick={() => props.onClickDelete(index)} />
                      </li>
                    ))}
                  </ul>
                </H.RecentWrapper>
              )}

              <H.RecommendedWrapper>
                <h4>추천 검색어</h4>
                <ul>
                  {props.recommendKeywords?.map((el, index) => (
                    <li key={index}>
                      <Link href="">
                        <a>{el.length > 17 ? el.substr(0, 16) + "..." : el}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </H.RecommendedWrapper>

              <H.PopularWrapper>
                <div>
                  <h4>인기 검색어</h4>
                  <span>{props.Today.toLocaleDateString()}기준</span>
                </div>
                <ul>
                  {props.PopularKeywords?.map((el, index) =>
                    index <= 2 ? (
                      <li key={index}>
                        <H.KeywordsTop3>{index + 1}</H.KeywordsTop3>
                        <Link href="">
                          <a>{el}</a>
                        </Link>
                      </li>
                    ) : (
                      <li key={index}>
                        <H.KeywordsIndex>{index + 1}</H.KeywordsIndex>
                        <Link href="">
                          <a>{el}</a>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </H.PopularWrapper>
            </H.SearchWrapper>
          </H.Search>

          <H.Icon>
            <H.Icon_login>
              <Link href="/front/auth/guest_login">
                <a>
                  <span />
                  <p>로그인</p>
                </a>
              </Link>
            </H.Icon_login>
            <H.Icon_mypage>
              <Link href="#">
                <a>
                  <span />
                  <p>마이페이지</p>
                </a>
              </Link>
            </H.Icon_mypage>
            <H.Icon_cart>
              <Link href="/front/order/basket">
                <a>
                  <span />
                  <p>장바구니</p>
                </a>
              </Link>
            </H.Icon_cart>
          </H.Icon>
        </H.Inner>
      </H.Top>

      <H.Bottom>
        <H.Inner>
          <H.Category_All>
            <span>전체 카테고리</span>

            <div>
              <H.CategoryWrapper>
                {props.categories.map((category, index) => (
                  <H.Category
                    key={index}
                    onMouseEnter={() => props.handleMouseEnter(index)}
                    onMouseLeave={props.handleMouseLeave}
                  >
                    {category.categoryName}
                  </H.Category>
                ))}
              </H.CategoryWrapper>

              {props.isSubcategoryVisible &&
                props.hoveredCategoryIndex !== null && (
                  <H.SubcategoryWrapper
                    onMouseEnter={props.handleSubcategoryEnter}
                    onMouseLeave={props.handleMouseLeave}
                  >
                    {props.categories[
                      props.hoveredCategoryIndex
                    ].subcategories?.map((subcategory) => (
                      <H.Subcategory key={subcategory.subcategoryId}>
                        {subcategory.subcategoryName}
                      </H.Subcategory>
                    ))}
                  </H.SubcategoryWrapper>
                )}
            </div>
          </H.Category_All>

          <div>
            <ul>
              <H.category_new>
                <Link href="/front/product/new">
                  <a>신제품</a>
                </Link>
              </H.category_new>
              <H.category_only>
                <Link href="/front/product/only">
                  <a>only</a>
                </Link>
              </H.category_only>
              <H.category_event>
                <Link href="/front/promo/event">
                  <a>이벤트</a>
                </Link>
              </H.category_event>
              <H.category_gift>
                <Link href="/front/product/gift">
                  <a />
                </Link>
              </H.category_gift>
              <H.category_best>
                <Link href="/front/product/best">
                  <a>베스트</a>
                </Link>
              </H.category_best>
            </ul>
          </div>
        </H.Inner>
      </H.Bottom>
    </>
  );
}
