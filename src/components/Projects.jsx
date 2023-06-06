import React from 'react'
import '../styles/project.css'
import JsLogo from '../utils/JsLogo'
import HtmlLogo from '../utils/HtmlLogo'
import ReactLogo from '../utils/ReactLogo';
import NodeLogo from '../utils/NodeLogo';
import ExpressLogo from '../utils/ExpressLogo';
import MongoLogo from '../utils/MongoLogo';
import CssLogo from '../utils/CssLogo';
// import '../assets/Screenshot 2023-06-05 200839'

export default function Projects() {
    const js = <JsLogo/>;
    const html = <HtmlLogo/>;
    const css = <CssLogo/>;
    const react = <ReactLogo/>;
    const node = <NodeLogo/>;
    const express = <ExpressLogo/>;
    const mongo = <MongoLogo/>

    const projectData = [
        {
            imgSrc: "/src/assets/project1.png",
            title: "Project 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore veritatis consectetur nobis excepturi, dignissimos hic sit eaque fugit ut officia!",
            techUsed: [js,html,css,node,mongo]
        },
        {
            imgSrc: "/src/assets/project2.png",
            title: "Project 2",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore veritatis consectetur nobis excepturi, dignissimos hic sit eaque fugit ut officia!",
            techUsed: [js,html,css,node,mongo,express]
        },
        {
            imgSrc: "/src/assets/project1.png",
            title: "Project 3",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore veritatis consectetur nobis excepturi, dignissimos hic sit eaque fugit ut officia!",
            techUsed: [js,html,css,node,mongo]
        },
        {
            imgSrc: "/src/assets/project2.png",
            title: "project 4",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore veritatis consectetur nobis excepturi, dignissimos hic sit eaque fugit ut officia!",
            techUsed: [js,html,css,node,mongo]
        },
    ]
    return (
        <section className='projects-container'>
            <h2>PROJECTS</h2>
            <section className='projects-list'>
                {
                    projectData.map((item) => {
                        return (
                            <div className="project">
                                <figure className='project-image'>
                                    <img src={item.imgSrc} alt={item.title} />
                                    <img src={item.imgSrc} alt={item.title} />
                                </figure>
                                <div className='project-text'>
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                    <div className='techUsed'>
                                    {
                                        item.techUsed.map((item) => {
                                            return item
                                        })
                                    }
                                </div>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </section>
        </section>
    )
}
