import React from 'react'
import { BallCanvas } from './canvas'

const Tech = () => {
const technologies = [
  {
    name : "Html",
    icon : "/html.png"
  },
  {
    name : "Css",
    icon : "/css.png"
  },
  {
    name : "Javascript",
    icon : "/javascript.png"
  },
  {
    name : "React",
    icon : "/reactjs.png"
  },
  {
    name : "Redux",
    icon : "/redux.png"
  },
  {
    name : "Typescript",
    icon : "/typescript.png"
  },
  {
    name : "Tailwind",
    icon : "/tailwind.png"
  },
  {
    name : "Next JS",
    icon : "/Next.js.png"
  },
]

  return (
    <div className='flex justify-center gap-10  flex-wrap'>
 {technologies.map((value)=>(
  <div key={value.name} className='w-24 h-24 '>
    <BallCanvas icon = {value.icon}/>
  </div>
 ))}
    </div>
  )
}

export default  Tech