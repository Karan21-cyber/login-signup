"use client"
import React from 'react'
import { RecoilRoot, atom } from 'recoil';

const textstate = atom({
  key: "textState",
  default: "",
});

function Provider({children}:{children:React.ReactNode}) {

  return <RecoilRoot>{children}</RecoilRoot>;
}

export default Provider