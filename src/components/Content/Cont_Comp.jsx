import React from 'react';
import paris from './paris.jpeg';
import icon from './icon.png';
import style from './Content.module.css'

const Img = () => {
    return(
      <div className={style.img_wrap}>
          <img src={paris} className={style.img}></img>
      </div>
    );
}

const Icon = () => {
    return(
      <div className={style.icon_wrap}>
          <img src={icon} className={style.icon}></img>
      </div>
    );
}

const Info = () => {
    return(
      <div className={style.info}>
          <h3>Misinciuc Iurie</h3>
          <h6>Birthday: 30 july</h6>
          <h6>Education: MPN</h6>
          <h6>City: Paris</h6>
          <h6>Job: Web dev</h6>
      </div>
    );
}

const Input = () => {
  return(
    <div className={style.input}>
        <textarea placeholder="your post"> </textarea>
    </div>
  );
}

export {Img, Icon, Info, Input};