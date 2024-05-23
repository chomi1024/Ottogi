import * as P from "./index.style";
import { product } from "../../../DB/index";
import ListTapmenu from "../list_menu_click";
import { useState } from "react";

export const tabs = [
  { index: 1, text: "인기순" },
  { index: 2, text: "신제품순" },
  { index: 3, text: "할인순" },
  { index: 4, text: "낮은가격순" },
  { index: 5, text: "높은가격순" },
];

export default function ProductMenu(props) {
  const [activeTab, setActiveTab] = useState(1);

  const onclickActive = (index) => {
    setActiveTab(index);
  };

  return (
    <P.Menu_wrapper>
      <p>
        전체 <strong>{product.length}</strong>개
      </p>
      <P.Menu_right>
        <ul>
          {tabs.map((tab) => (
            <ListTapmenu
              key={tab.index}
              index={tab.index}
              active={activeTab === tab.index}
              text={tab.text}
              onClick={() => onclickActive(tab.index)}
            />
          ))}
        </ul>

        <P.Select_Delivery>
          <select name="" id="">
            <option value="0">배송전체</option>
            <option value="1">실온</option>
            <option value="2">냉장&냉동</option>
          </select>
        </P.Select_Delivery>
        <P.Select_Count>
          <select name="" id="">
            <option value="0">40개</option>
            <option value="1">60개</option>
            <option value="2">80개</option>
            <option value="3">100개</option>
          </select>
        </P.Select_Count>

        <P.ChangeList />
      </P.Menu_right>
    </P.Menu_wrapper>
  );
}
