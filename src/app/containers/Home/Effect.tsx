import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';

export default function Effect(props) {
  return (
    <OverPack
      playScale={props.location ? props.location : [0.2, 0.5]}
      replay={true}
    >
      <TweenOne
        key="0"
        animation={{ opacity: 1, scale: 1 }}
        style={{ opacity: 0, transform: 'scale(0.5,1)' }}
      >
        {props.children}
      </TweenOne>
    </OverPack>
  );
}
