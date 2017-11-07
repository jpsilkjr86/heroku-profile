// imports react component classes
import React from 'react';

import LinkCard from './cards/LinkCard';

import resumeSquare from './img/resume-square.jpg';
import googledoc from './img/googledoc.png';
import linkedinScreenshot from './img/linkedin-screenshot.jpg';
import linkedinIcon from './img/linkedin_icon.png';
import githubScreenshot from './img/github-screenshot.jpg';
import githubIcon from './img/github_icon.png';

const resumeLink = 'https://docs.google.com/document/d/1bn5rhGN1l2Hli8Ix3WOvoFqV3xSklmLDtQoadtWE26g';
const linkedinLink= 'https://www.linkedin.com/in/john-silkey-jr';
const githubLink = 'https://github.com/jpsilkjr86';

const Resume = () => (
  <LinkCard
    screenshot={resumeSquare}
    icon={googledoc}
    href={resumeLink}
    title={'Resume'}
  />
);

const LinkedIn = () => (
  <LinkCard
    screenshot={linkedinScreenshot}
    icon={linkedinIcon}
    href={linkedinLink}
    title={'LinkedIn'}
  />
);

const GitHub = () => (
  <LinkCard
    screenshot={githubScreenshot}
    icon={githubIcon}
    href={githubLink}
    title={'GitHub'}
  />
);

const LinkIcon = ({href, imgSrc}) => (
  <a href={href} target="_blank">
    <img src={imgSrc}/>
  </a>
);

const ResumeIcon = () => <LinkIcon href={resumeLink} imgSrc={googledoc}/>;
const LinkedInIcon = () => <LinkIcon href={linkedinLink} imgSrc={linkedinIcon}/>;
const GitHubIcon = () => <LinkIcon href={githubLink} imgSrc={githubIcon}/>;

const contactItems = { Resume, LinkedIn, GitHub, ResumeIcon, LinkedInIcon, GitHubIcon };

module.exports = contactItems;