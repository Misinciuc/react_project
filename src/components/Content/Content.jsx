import React from "react";
import { Icon, Img, Info, Input } from "./Cont_Comp";
import style from "./Content.module.css";
const Content = () => {
  return (
    <div className={style.main_container}>
      <Img />
      <Input />
      <Icon />
      <Info />
    </div>
  );
};

export default Content;
