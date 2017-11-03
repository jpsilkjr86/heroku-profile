// imports react component classes
import React from 'react';

import LinkCard from './cards/LinkCard';

import resumeSquare from './img/resume-square.jpg';
import googledoc from './img/googledoc.png';
import linkedinScreenshot from './img/linkedin-screenshot.jpg';
import linkedinIcon from './img/linkedin_icon.png';
import githubScreenshot from './img/github-screenshot.jpg';
import githubIcon from './img/github_icon.png';

const Resume = () => (
  <LinkCard
    screenshot={resumeSquare}
    icon={googledoc}
    href={'https://docs.google.com/document/d/1bn5rhGN1l2Hli8Ix3WOvoFqV3xSklmLDtQoadtWE26g/edit?usp=sharing'}
    title={'Resume'}
  />
);

const LinkedIn = () => (
  <LinkCard
    screenshot={linkedinScreenshot}
    icon={linkedinIcon}
    href={'https://www.linkedin.com/in/john-silkey-jr'}
    title={'LinkedIn'}
  />
);

const GitHub = () => (
  <LinkCard
    screenshot={githubScreenshot}
    icon={githubIcon}
    href={'https://github.com/jpsilkjr86'}
    title={'GitHub'}
  />
);

const contactItems = { Resume, LinkedIn, GitHub };

module.exports = contactItems;