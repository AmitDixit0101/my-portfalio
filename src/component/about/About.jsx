import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FaAccessibleIcon} from 'react-icons/fa'//
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
   <section id='about'>
    <h5>Get to know</h5>
    <h2>About me</h2>

 <div className='container about_container'>
  <div className='about_me'>
  <div className='about_me.image'>
    <img src={ME} alt='about image'/>
  </div>
  </div>
  <div className='about_content'>
<div className='about_cards'>
  <article className='about_card'>
    <FaAward className='about_icon'/>
    <h5>Experience</h5>
    <small>1+ Year working</small>
  </article>

  
   <article className='about_card'>
   <FaAccessibleIcon className='about_icon'/>
    <h5>Clients</h5>
    <small>100+ worldwide</small>
   </article>
  

  <article className='about_card'>
    <VscFolderLibrary className='about_icon'/>
    <h5>Projects</h5>
    <small>25+ Completed</small>
  </article>
  </div>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati fugiat dolorum repellat culpa, qui iste eum asperiores, veniam sint, porro quia fugit velit consectetur saepe commodi voluptates labore similique!</p>
  <a href='#contact' className='btn btn-primary'>Let's Talk</a>
  </div>   
  </div>

      </section>
  )
}

export default About