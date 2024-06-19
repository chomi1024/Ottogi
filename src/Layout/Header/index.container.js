import { useEffect, useRef, useState } from "react";
import LayoutHeaderUI from "./index.presenter";
import { categories } from "../../DB/index";

export default function LayoutHeader() {
  const [searchKeywords, setSearchKeywords] = useState([
    "햇반",
    "컵밥",
    "과자",
    "음료수",
  ]);

  const [recommendKeywords, setRecommendKeywords] = useState([
    "가뿐한끼 현미밥 150G",
    "맛있는 오뚜기밥 (210GX3) 3개 골라담기",
    "진라면 매운맛 (120GX5)",
    "컵밥 4개 골라담기",
    "참깨라면 용기 110G",
    "컵밥 톡톡김치알밥(증량) 222G",
    "컵밥 차돌강된장보리밥(증량) 310G",
    "컵밥 참치마요덮밥(증량) 247G",
    "컵밥 진한쇠고기미역국밥(증량) 314G",
    "컵밥 김치참치덮밥(증량) 310G",
  ]);

  const [PopularKeywords, setPopularKeywords] = useState([
    "라면",
    "오뚜기밥",
    "컵밥",
    "피자",
    "컵누들",
    "카레",
    "참치",
    "진라면",
    "밥",
    "만두",
  ]);

  // input 클릭시 창띄우는거
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const wrapperRef = useRef(null);

  const handleInputClick = () => {
    setDropdownVisible(true);
  };

  const handleOutsideClick = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  //input내부의 검색어 삭제버튼
  const Today = new Date();

  const onClickDelete = (index) => {
    const newArray = [...searchKeywords];
    const result = newArray.filter((_, el) => el !== index);
    setSearchKeywords(result);
  };

  const onClickAllDelete = () => {
    const newArray = [];
    setSearchKeywords(newArray);
  };

  // 아래는 1차-2차메뉴를
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(null);
  const [isSubcategoryVisible, setIsSubcategoryVisible] = useState(false);
  let timer = null;

  const handleMouseEnter = (index) => {
    clearTimeout(timer);
    setHoveredCategoryIndex(index);
    if (categories[index].subcategories) {
      setIsSubcategoryVisible(true);
    } else {
      setIsSubcategoryVisible(false);
    }
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsSubcategoryVisible(false);
    }, 50);
  };

  const handleSubcategoryEnter = () => {
    clearTimeout(timer);
  };

  return (
    <LayoutHeaderUI
      //각종 db
      categories={categories}
      searchKeywords={searchKeywords}
      recommendKeywords={recommendKeywords}
      PopularKeywords={PopularKeywords}
      Today={Today}
      // input 클릭시 나타나게
      handleInputClick={handleInputClick}
      handleOutsideClick={handleOutsideClick}
      isDropdownVisible={isDropdownVisible}
      wrapperRef={wrapperRef}
      // 검색어 삭제기능
      onClickDelete={onClickDelete}
      onClickAllDelete={onClickAllDelete}
      // 1차-2차메뉴
      hoveredCategoryIndex={hoveredCategoryIndex}
      setHoveredCategoryIndex={setHoveredCategoryIndex}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
      handleSubcategoryEnter={handleSubcategoryEnter}
      isSubcategoryVisible={isSubcategoryVisible}
    />
  );
}
