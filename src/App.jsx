import { useLayoutEffect, useState } from 'react'

import './App.css'
import './Loading'
import Loading from './Loading'
import gsap from "gsap"
import {useGSAP} from "@gsap/react"


function App() {
  // useLayoutEffect(()=>{
  //   let ctx=gsap.context(()=>{

  //   })
  //   return ()=> ctx.revert() //reverting to pre animation state
  // })

  useGSAP(()=>{
    let tl=gsap.timeline();
    tl.to(".box",{
      scale:0,
      y:60,
      rotate:400,
      duration:1,
      repeat:1,
      yoyo:true,   // forward backward loop
      delay:0.5,
      stagger:{
        amount:1.5,
      },
      from:"end",
      // axis:"y",
      grid:[3,3],
    })

    tl.to(".container",{
      rotate:"-405deg",
      scale:0,
      duration:1,
    })

    tl.to(".wrapper", {
      opacity:0,
    })
  })
  return (
    <>
      <Loading/>
      <div className=' bg-black flex items-center justify-center'>
        <h1 className='text-white text-8xl font-bold'>Helloo</h1>
      </div>
    </>
  )
}

export default App
