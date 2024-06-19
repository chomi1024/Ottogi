import { useState } from "react";
import BasketUI from "./index.presenter";

export default function Basket() {
  const [active, setActive] = useState([true, false, false]);
  const [checked, setChecked] = useState(true);

  const onClickActive = (number) => {
    const newArray = active.map(() => false);
    newArray[number] = true;
    setActive(newArray);
  };

  const onClickChecked = () => {
    setChecked(!checked);
  };

  return (
    <BasketUI
      checked={checked}
      active={active}
      onClickActive={onClickActive}
      onClickChecked={onClickChecked}
    />
  );
}
