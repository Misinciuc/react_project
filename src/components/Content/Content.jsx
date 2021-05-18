import React from 'react';
import { Icon, Img, Info, Input } from './Cont_Comp';
import s from './Content.module.css'
const Content = () => {
    return(
      <div className={s.main_container}>
        <Img/>
        <Input/>
        <Icon/>
        <Info/>
      </div>
    );
}

export default Content;


