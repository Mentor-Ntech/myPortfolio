import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero__Text'>
            <h1>
                naheem &nbsp;
                <span>oloyede</span>
            </h1>

            <p>software developer</p>
            <p>A passionate and results-driven software developer with a keen eye for detail and a commitment to creating seamless digital experiences.</p>
        </div>

        <div className='hero__socials'>
            <a href='#' target='_blank' title='linkedin'><FaLinkedin /></a>
            <a href='https://twitter.com/oloyedenaheem' target='_blank' title='x-formerly twitter'><BsTwitter /></a>
            <a href='#' target='_blank' title='facebook'><FaFacebookF /></a>
            <a href='https://github.com/Mentor-Ntech' target='_blank' title='github'><FaGithub /></a>
        </div>
    </div>
  )
}

export default Hero