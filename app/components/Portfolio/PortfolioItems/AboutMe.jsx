// imports react component classes
import React from 'react';

import InfoCard from './cards/InfoCard';

import { ResumeIcon, LinkedInIcon, GitHubIcon } from './contact-items';

const AboutMe = props => (
  <InfoCard header="John Silkey - Bio" linkIcons={[GitHubIcon, LinkedInIcon, ResumeIcon]}>
  	<h4>Before Web Development</h4>
    <p>
    	Before becoming a full-stack web developer and teaching assistant for a coding bootcamp,
    	I spent most of my adult life overseas! After graduating from ASU in 2009 with Bachelor's
    	degrees in Chinese and Japanese, I moved to China and spent one year teaching English as
    	a second language while honing my language skills in Mandarin. Upon finishing my contract,
    	I decided to move to Taiwan to continue my career in education. After working for a school
    	there for six years, I worked my way up from teacher to lead instructor and, finally, to
    	curriculum manager.
    </p>
    <h4>The Transition</h4>
    <p>
    	While a career in foreign language education certainly had its appeal, it was simply not
    	enough. My constant drive to challenge myself and expand my mind led me to make the most
    	important and rewarding decision of my life: to transition to a career in web development.
    	I joined a coding bootcamp in April of 2017 and, by the time I graduated, found myself
    	with a job as a teaching assistant for the same program for the following semester. I
    	discovered the work ethic that had propelled me to fluency in Mandarin served me well in
    	my fledgling days as a novice programmer. Lessons hard learned over 10 years in learning
    	Mandarin -- to not be afraid of making mistakes, to persistently experiment and push the
    	bounds of my understanding, to never become arrogant and to always take a humble approach
    	to learning -- these turned out to be just as true when learning web development!
    </p>
    <h4>Life as a Developer</h4>
    <p>
    	Since beginning my career as a developer, hardly a day goes by when I am not either coding,
    	reading about new programming patterns and practices, or starting a new project -- a fact
    	which my <a href="https://github.com/jpsilkjr86">GitHub</a> profile's activity can corraborate.
    	I love programming in JavaScript and feel invigorated whenever I encounter a problem that needs
    	to be solved. Although I initially found myself more comfortable in a back-end development environment,
    	all that changed when I began building web applications using React. The architectural
    	patterns which combine the declarative nature of XML with the power of functional JavaScript
    	opened my eyes to the seemingly boundless possibilities of front-end development. I
    	have built several full-stack React applications (including this portfolio), and will
    	continue to build more in my free time and in my career.
    </p>
    <p>
    	It is my dream to become a full-stack web developer, but I also recognize that this may
    	take some time to realize. I believe I would thrive in either a back-end or front-end
    	development role, and am excited to work full-time for a company that is looking for diligent,
    	committed and friendly developers to join their team. I am an excellent communicator thanks
    	to many years working as an educator, and my passion for improving any environment I am in
    	as well as my professional organizational skills has made me into a competent, efficient
    	project manager as well.
    </p>
    <p>
    	Thank you for visiting my portfolio, and please don't hesitate to reach out to me any
    	time with questions or if you would like to schedule an interview. Have a fantastic
    	rest of your day!
    </p>
  </InfoCard>
);

export default AboutMe;