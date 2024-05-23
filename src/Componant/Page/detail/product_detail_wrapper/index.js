import { useState } from "react";
import * as P from "./index.style";
import Link from "next/link";
import ReivewWrapper from "./../review_box/index";
import InquiryWrapper from "../goods_inquiry/index.container";
import ToggleWrapper from "../toggle_wrapper/index.container";

export default function ProductDetailWrapper(props) {
  // 탭메뉴 스테이트,함수
  const [activeTab, setActiveTab] = useState(1);

  const onclickActive = (index) => () => {
    setActiveTab(index);
  };

  //점수만큼 별 생성
  const activeStars = Array.from({ length: props.grade_star }, (_, index) => (
    <P.activeStar key={index} />
  ));

  //빈별 생성
  const inactiveStars = Array.from(
    { length: 5 - props.grade_star },
    (_, index) => <P.inActiveStar key={index} />
  );

  const [toggle, setToggle] = useState([false, false, false]);

  const onclickToggle = (index) => {
    setToggle((prevToggle) => {
      const newToggle = [...prevToggle];
      newToggle[index] = !newToggle[index];
      return newToggle;
    });
    console.log(toggle);
  };

  return (
    <P.Section>
      {/* 탭메뉴 */}
      <P.goods_nav_wrapper>
        <P.tapMenu_Wrapper>
          <P.tapMenu>
            <P.tapMenu_list active={activeTab == 0} onClick={onclickActive(0)}>
              <Link href="#detail">
                <P.tapmenu_button active={activeTab == 0}>
                  상세정보
                </P.tapmenu_button>
              </Link>
            </P.tapMenu_list>

            <P.tapMenu_list active={activeTab == 1} onClick={onclickActive(1)}>
              <Link href="#">
                <P.tapmenu_button active={activeTab == 1}>
                  상품후기 <span>21</span>
                </P.tapmenu_button>
              </Link>
            </P.tapMenu_list>

            <P.tapMenu_list active={activeTab == 2} onClick={onclickActive(2)}>
              <Link href="#">
                <P.tapmenu_button active={activeTab == 2}>
                  구매정보
                </P.tapmenu_button>
              </Link>
            </P.tapMenu_list>

            <P.tapMenu_list active={activeTab == 3} onClick={onclickActive(3)}>
              <Link href="#">
                <P.tapmenu_button active={activeTab == 3}>
                  상품문의
                </P.tapmenu_button>
              </Link>
            </P.tapMenu_list>
          </P.tapMenu>
        </P.tapMenu_Wrapper>
      </P.goods_nav_wrapper>

      <P.goods_detail_wrapper id="detail">
        {/* 상품상세 이미지 컴포넌트 */}
        <P.Main_wrapper>
          <P.main_contents_Wrapper>
            <div>
              {props.result.imgsrc[1].detail.map((imgsrc) => (
                <img src={imgsrc} alt="" />
              ))}
            </div>
          </P.main_contents_Wrapper>

          {/* 리뷰 컴포넌트 */}
          <ReivewWrapper
            result={props.result}
            activeStars={activeStars}
            inactiveStars={inactiveStars}
            grade_star={props.grade_star}
          />

          {/* 상품정보 고시,배송정보, 반품 등 탭메뉴 */}
          <P.ToggleWrapper>
            <ToggleWrapper
              top={true}
              title={"상품 정보 고시"}
              toggle={toggle[0]}
              onclickToggle={() => {
                onclickToggle(0);
              }}
            />
            <ToggleWrapper
              title={"배송 정보"}
              toggle={toggle[1]}
              onclickToggle={() => {
                onclickToggle(1);
              }}
            />
            <ToggleWrapper
              title={"취소/교환/반품"}
              toggle={toggle[2]}
              onclickToggle={() => {
                onclickToggle(2);
              }}
            />
          </P.ToggleWrapper>

          {/* 상품문의 컴포넌트 */}
          <InquiryWrapper id="inquiry" />
        </P.Main_wrapper>

        {/* 우측 스티키로 고정되어서 따라올 컴포넌트 */}
        <P.sticky_wrapper>
          <div>
            <P.Top_wrapper>
              <p>{props.result?.name}</p>
              <div>
                <input
                  type="number"
                  onChange={props.onclickValue}
                  value={props.value}
                />
                <h3>{props.basePrice?.toLocaleString()}원</h3>
              </div>
            </P.Top_wrapper>

            <P.Bottom_wrapper>
              <P.Total_wrapper>
                <h3>총금액 </h3>
                <span>
                  <em>
                    {(
                      parseInt(props.basePrice) * props.value
                    )?.toLocaleString()}
                  </em>
                  원
                </span>
              </P.Total_wrapper>

              <P.Button_wrapper>
                <P.Button>선물함 담기</P.Button>
                <P.Button>장바구니</P.Button>
                <P.Button buy={true}>바로구매</P.Button>
              </P.Button_wrapper>
            </P.Bottom_wrapper>
          </div>
        </P.sticky_wrapper>
      </P.goods_detail_wrapper>
    </P.Section>
  );
}
