import React from 'react'
// @ts-ignore
import GitHubIcon from '../../images/githubIcon.jpg'
// @ts-ignore
import LinkedinIcon from '../../images/LinkedinIcon.jpg'
// @ts-ignore
import TwitterIcon from '../../images/twitterIcon.jpg'
// @ts-ignore
import ResumeIcon from '../../images/resumeIcon.jpg'

import './Footer.css'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerCont">
        <div className="socialLinks">
          <a href={'https://github.com/Gushihiro'} target='_blank'>
            <img className="footerImg" src={GitHubIcon} alt="GitHub" />
          </a>
          <a href={'https://www.linkedin.com/in/robinsonhiroto/'} target='_blank'>
            <img className="footerImg" src={LinkedinIcon} alt="linkedIn" />
          </a>
          <a href={'https://twitter.com/gushihiro'} target='_blank'>
            <img className="footerImg" src={TwitterIcon} alt="Twitter" />
          </a>
          <a href={'../../docs/Hiroto_Robinson_Resume.pdf'} target='_blank'>
            <img className="footerImg" src={ResumeIcon} alt="Resume" />
          </a>
        </div>
        <div className='copyright'>
          <p>© Copyright 2021 Gushihiro |</p>
        </div>
      </div>
    </div>
  )
}
