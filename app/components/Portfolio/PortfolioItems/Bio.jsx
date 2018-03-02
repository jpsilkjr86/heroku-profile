// imports react component classes
import React from 'react';

import InfoCard from './cards/InfoCard';

import { ResumeIcon, LinkedInIcon, GitHubIcon } from './contact-items';

const Bio = props => (
  <InfoCard header="John Silkey - Bio" linkIcons={[GitHubIcon, LinkedInIcon, ResumeIcon]}>
  	<h4>Before Web Development</h4>
    <p>
    	Before becoming a full-stack developer and teaching assistant for a coding bootcamp,
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
    	I now work full-time as a junior software developer for an e-commerce company, coding in Laravel's
        MVC framework (PHP) as well as some projects that use React/Redux for the front-end (ES6).
        It is invigorating for me to be in such an environment where I can not only apply the
        experience I gained from the bootcamp but also learn new technologies and design patterns as well,
        particularly in SOLID OOP. I built, tested and deployed my first full-stack project within the first three
        weeks of employment, which included building a MySQL database, coding routing and controller logic on the
        back-end, and designing Blade views with jQuery and Bootstrap for the front-end. The software
        component I developed enables our administrative staff to publish products on third-party marketplaces,
        automating what was once a tedious, repetitive process! I enjoyed every minute of it, and will continue
        to eagerly pursue challenges that help expand my mind and my skillset.
    </p>
    <p>
    	Thank you for visiting my portfolio, and please don't hesitate to reach out!
    </p>
  </InfoCard>
);

export default Bio;