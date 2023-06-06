import React, { useContext } from 'react'
import '../styles/main.css'
import { UserContext } from '../UserContext'
import JsLogo from '../utils/JsLogo'
import HtmlLogo from '../utils/HtmlLogo'
import CssLogo from '../utils/CssLogo'
import ReactLogo from '../utils/ReactLogo'
import NodeLogo from '../utils/NodeLogo'
import ExpressLogo from '../utils/ExpressLogo'
import MongoLogo from '../utils/MongoLogo'

export default function Main() {

  // const context = useContext(UserContext)
  // console.log(context);
  const skillData = [
    {
      skill: "Javascript",
      percent: "90%",
      logo: <JsLogo />,
      class : "js",
      bar : ""
    },
    {
      skill: "HTML",
      percent: "85%",
      logo: <HtmlLogo />,
      class : "html",
      bar : ""
    },
    {
      skill: "CSS",
      percent: "85%",
      logo: <CssLogo />,
      class : "css",
      bar : ""
    },
    {
      skill: "React JS",
      percent: "80%",
      logo: <ReactLogo />,
      class : "react",
      bar : ""
    },
    {
      skill: "Node JS",
      percent: "85%",
      logo: <NodeLogo />,
      class : "node",
      bar : ""
    },
    {
      skill: "Express JS",
      percent: "85%",
      logo: <ExpressLogo />,
      class : "express",
      bar : ""
    },
    {
      skill: "Mongo DB",
      percent: "90%",
      logo: <MongoLogo />,
      class : "mongo",
      bar : ""
    },
  ]

  return (
    <section className='skills'>
      <h2>My Skills</h2>
      {
        skillData.map((item) => {
          return (
            <>
              <div className='logo'>
                {item.logo}
                <div className={`${item.class}  name-percent`}>
                  <span className="skill-name">{item.skill}</span>
                  <span >{item.percent}</span></div>
              </div>
              <div className='outer-progress-bar'>
                <div className={`inner-progres-bar ${item.class}-bar`}></div>
              </div>
            </>
          )
        })
      }
    </section>
  )
}
