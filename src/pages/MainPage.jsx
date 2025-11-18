import pfp from '../assets/CV_pfp.jpeg'
import '../styles/tokens.css'
import { useEffect, useRef, useState } from "react";
import { MdWork } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { IoRoseOutline } from "react-icons/io5";
import { IoMailOpenOutline, IoMailOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

import videosrc from '../assets/background_video.mp4'
import react from "../assets/React.png"
import vuejs from "../assets/VueJS.png"
import sap from "../assets/SAP.svg"
import python from "../assets/Python.png"
import procreate from "../assets/Procreate.png"
import prisma from "../assets/prisma.svg"
import postgresql from "../assets/Postgresql.svg"
import php from "../assets/php.png"
import office from "../assets/Office.png"
import google_analytics from "../assets/Google_Analytics.png"
import nestjs from "../assets/NestJS.svg"
import mysql from "../assets/mySQL.png"
import powerbi from "../assets/PowerBI.png"
import javascript from "../assets/JS.png"
import github from "../assets/GitHub.png"
import django from "../assets/django.png"
import debian from "../assets/Debian.png"
import c_sharp from "../assets/C#.png"
import canva from "../assets/canva.png"
import azure from "../assets/Azure.png"
import ASP_NET from "../assets/asp_net.png"
import adobe from "../assets/Adobe_PS.png"
import html from "../assets/HTML.png"

// eslint-disable-next-line



export default function MainPage() {
    const [isOpen, setIsOpen] = useState(false);
    const expRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const edRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                     entry.target.classList.remove("active");
                }
            });
        }, {
            root: null,
            threshold: 0,  
            rootMargin: "-40% 0px -40% 0px" 
        });
        const rows = document.querySelectorAll(".skills_row");

        rows.forEach(row => observer.observe(row));

        return () => observer.disconnect();
    }, []);

    const scrollTo = (ref) => {
        ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return(     
        <div>
                <video className='bg-video' src={videosrc} autoPlay loop muted playsInline></video>
                <div className='container'>
                    <div className='content'>
                        <div className='image_row'>
                            <img className='image' alt="Profile" src={pfp} style={{height: 200, width: 200, objectFit: 'cover', borderRadius: "50%"}} />
                            <div className='text_block' style={{alignItems: "flex-start"}}>
                                <h2 style={{fontSize: 40}}>Ana Vidova</h2>
                                <h1 style={{fontSize: 50}}>Data | Development | Security</h1>                           
                            </div>
                        </div>
                        <div className='body_row'>
                            <div className='sidebar_box'>
                                <nav className="sidebar">
                                    <button onClick={() => scrollTo(expRef)}><MdWork />&nbsp;Experience</button>
                                    <button onClick={() => scrollTo(skillsRef)}><FaTools />&nbsp;Skills</button>
                                    <button onClick={() => scrollTo(projectsRef)}><AiOutlineProject />&nbsp;Projects</button>
                                    <button onClick={() => scrollTo(edRef)}><IoRoseOutline />&nbsp;Education</button>
                                </nav> 
                                <div className="contact_sidebar">
                                    <a href="mailto:anavidova@gmail.com" target="_blank" rel="noreferrer"><FiMail /></a>
                                    <a href="https://www.linkedin.com/in/ana-vidova/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                </div> 
                            </div>
                            <div className="scroll_panel">
                                 <div className={`envelope_container  ${isOpen ? "open" : ""}`}>
                                            {!isOpen && (<p className='open-me'>Open me :D</p>)}
                                            <button className="envelope_btn" onClick={() => setIsOpen(!isOpen)}>
                                            {isOpen ? <IoMailOpenOutline size={60}/> : <IoMailOutline size={60}/>}
                                            </button>
                                            {isOpen && (
                                            <div className="introduction">
                                                <p>
                                                    Hello and thank you for reviewing my CV :D! I am a young developer looking to expand their circle of like-minded individuals.
                                                    I love art, calisthenics, gaming and hiking. If you want to chat about our professional interests, play a game together or just talk,
                                                    please feel welcomed to reach out! My dream is to work in Spain, preferably in the south, and be part of a good team 
                                                    where we can grow, inspire and motivate eachother.
                                                    What is yours?
                                                </p>
                                            </div>
                                            )}
                                        </div>
                                <section ref={expRef} className="page_section">
                                     <p>
                                        <TypeAnimation
                                        sequence={[
                                            "Experience",
                                        ]}
                                        speed={60}
                                        repeat={0}
                                        />
                                    </p>
                                </section>
                                    <div className='job_row'>
                                        <div className='job_left'>
                                            <p className='job_title'>Full-Stack Developer</p>
                                            <a href="https://ivuworks.com/" target="_blank" rel="noopener noreferrer">IvuWorks, Sofia</a>
                                            <p className='job_dates'>September 2025</p>
                                        </div>
                                        <div className='job_right'>
                                            <p className='description'>Developing software for clients. Currently building "Offer craft": Helping businesses focus on growth, not paperwork.</p>
                                            <p className='job_skills'>React | Django | Debian | PostgreSQL</p>
                                        </div>                  
                                    </div>
                                    <div className='job_row'>
                                        <div className='job_left'>
                                            <p className='job_title'>Full-Stack Intern</p>
                                            <a href="https://refracted.eu/" target="_blank" rel="noopener noreferrer">Refracted, Lier</a>
                                            <p className='job_dates'>Feb - June 2025</p>
                                        </div>
                                        <div className='job_right'>
                                            <p className='description'>Developed an administrative portal and content delivery system to manage vital application statistics and administrative tasks.</p>
                                            <p className='job_skills'>React | NestJS | PostgreSQL | Prisma | Azure</p>
                                        </div>                  
                                    </div>

                                    <div className='job_row'>
                                        <div className='job_left'>
                                            <p className='job_title'>Human Resources</p>
                                            <a href="https://www.instagram.com/esn_mechelen/" target='_blank' rel="noopener noreferrer">ESN Mechelen</a>
                                            <p className='job_dates'>Feb - June 2024</p>
                                        </div>
                                        <div className='job_right'>
                                            <p className='description'>Managing and taking care of 20+ volunteers by creating a healthy work environment, organising  team buildings and workshops for team balance, coordination and growth.</p>
                                            <p className='job_skills'>Leadership | Feedback | Event | Management | Collaborations</p>
                                        </div>                  
                                    </div>
                                    <div className='job_row'>
                                        <div className='job_left'>
                                            <p className='job_title'>Project Management</p>
                                            <a href="https://www.instagram.com/esn_mechelen/" target='_blank' rel="noopener noreferrer">ESN Mechelen</a>
                                            <p className='job_dates'>Sep 2024 - Jan 2025</p>
                                        </div>
                                        <div className='job_right'>
                                            <p className='description'>Organising large-scale events for 50+ international students.</p>
                                            <p className='job_skills'>Google Forms | MS Office | Miro board </p>
                                        </div>                  
                                    </div>
                                {/* SKILLS */}
                                <section ref={skillsRef} className="page_section">
                                    <p>
                                        <TypeAnimation
                                        sequence={[
                                            "Skills",
                                        ]}
                                        speed={60}
                                        repeat={0}
                                        />
                                    </p>
                                </section>
                                    <p className='skill_area'>Full-stack</p>
                                    <div className='skills_row'>
                                        <img src={react} alt="React" />
                                        <img src={vuejs} alt="VueJS" />
                                        <img src={html} alt="HTML" />
                                        <img src={javascript} alt="JavaScript" />
                                    </div>
                                    <div className='skills_row'>
                                        <img src={ASP_NET} alt="Asp_net" />
                                        <img src={nestjs} alt="NestJS" />
                                        <img src={django} alt="Django" />
                                        <img src={php} alt="PHP" />
                                    </div>
                                    <div className='skills_row'>
                                        <img src={postgresql} alt="PostgreSQL" />
                                        <img src={mysql} alt="mySQL" />
                                        <img src={prisma} alt="Prisma" />
                                    </div>
                                    <div className='skills_row'>
                                        <img src={azure} alt="Azure" />
                                        <img src={github} alt="GitHub" />
                                        <img src={debian} alt="Debian" />
                                    </div>
                                    <p className='skill_area'>Data science</p>
                                    <div className='skills_row'>
                                        <img src={python} alt="Python" />
                                        <img src={powerbi} alt="PowerBI" />
                                        <img src={google_analytics} alt="Google_Analytics" />
                                        <p className="skill_text">Machine Learning</p>
                                        <p className="skill_text">AI</p>
                                        <p className="skill_text">Business Intelligence</p>
                                    </div>
                                    <p className='skill_area'>Software proficiency</p>
                                    <div className='skills_row'>
                                        <img src={python} alt="Python" />
                                        <img src={c_sharp} alt="C_Sharp" />
                                        <img src={sap} alt="SAP" />
                                        <img src={office} alt="MS_Office" />
                                    </div>
                                    <p className='skill_area'>Business and Management</p>
                                    <div className='skills_row'>
                                        <p className='skill_text'>Leadership</p>
                                        <p className='skill_text'>Finances</p>
                                        <p className='skill_text'>Project Management</p>
                                        <p className='skill_text'>Human Resources</p>
                                        <p className='skill_text'>Slack</p>
                                        <p className='skill_text'>Google Forms</p>
                                    </div>
                                    <p className='skill_area'>Design</p>
                                    <div className='skills_row'>
                                        <img src={canva} alt="Canva" />
                                        <img src={adobe} alt="Adobe_PS" />
                                        <img src={procreate} alt="Procreate" />
                                    </div>
                                <section ref={projectsRef} className="page_section">
                                    <p>
                                        <TypeAnimation
                                        sequence={[
                                            "Projects",
                                        ]}
                                        speed={60}
                                        repeat={0}
                                        />
                                    </p>
                                </section>
                                    <p><b>Modeling Earthquake Damage, Recurring Thyroid Cancer Prediction Model</b> – Jupyter Notebook, Python</p>
                                    <p><b>All Better Cotton financial and business analysis, Pet supply store marketing analysis</b> - Power BI</p>
                                    <p><b>Enhancing train punctuality metrics for the official NMBS train company in Belgium</b> - Miro board, Jupyter notebook, Python, Word</p>
                                    <p><b>Bank application</b> - C#(.NET Core, MySQL)</p>
                                    <p><b>Dating app website</b> - HTML, CSS, JavaScript, PHP, MySQL</p>
                                    <p><b>Camping Airbnb website</b> - Vue.js, ASP.NET Core, MySQL</p>
                                <section ref={edRef} className="page_section">
                                    <p>
                                        <TypeAnimation
                                        sequence={[
                                            "Education",
                                        ]}
                                        speed={10}
                                        repeat={0}
                                        />
                                    </p>
                                </section>
                                    <div className='about'>
                                        <div className='education'>
                                            <p><b>Bachelors:</b> Thomas More University, Belgium</p>
                                            <p> Specialty: Data Science, Security & Protection</p>
                                            <p>Program specialising in both business and technical skills. Graduated magna cum laude.</p>
                                        </div>
                                        <div className='education'>
                                            <p><b>High School diploma:</b> 31 Ivan Vazov, Sofia, Bulgaria</p>
                                            <p> Specialisation in Spanish, English, Mathematics and Geography.</p>
                                        </div> 
                                    </div>    
                            </div>
                        </div>
                    </div>
                </div>
                

                
        </div> 
    )
}