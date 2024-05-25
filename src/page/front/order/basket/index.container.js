import { useState } from "react";
import BasketUI from "./index.presenter";

export default function Basket() {
  const [checked, setChecked] = useState(true);

  const onClickChecked = () => {
    setChecked(!checked);
  };

  return <BasketUI checked={checked} onClickChecked={onClickChecked} />;
}
