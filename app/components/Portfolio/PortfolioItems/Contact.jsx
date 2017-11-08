// imports react component classes
import React from 'react';

import InfoCard from './cards/InfoCard';

import { Row, Col } from 'react-bootstrap';

const resumeLink = 'https://docs.google.com/document/d/1bn5rhGN1l2Hli8Ix3WOvoFqV3xSklmLDtQoadtWE26g';
const linkedinLink = 'https://www.linkedin.com/in/john-silkey-jr';
const githubLink = 'https://github.com/jpsilkjr86';

import { ResumeIcon, LinkedInIcon, GitHubIcon } from './contact-items';

const ContactRow = ({contactType, contactValue}) => (
	<Row>
		<Col xs={3} sm={2}>{contactType}</Col>
		<Col xs={9} sm={10}>{contactValue}</Col>
	</Row>
);

const Contact = props => (
  <InfoCard header="Contact Me" linkIcons={[GitHubIcon, LinkedInIcon, ResumeIcon]}>
		<ContactRow
			contactType="Email:"
			contactValue={<a href="mailto:jpsilkjr86@gmail.com">jpsilkjr86@gmail.com</a>}
		/>
		<ContactRow
			contactType="Phone:"
			contactValue={<span>(see <a href={resumeLink} target="_blank">Resume</a>)</span>}
		/>
		<ContactRow
			contactType="LinkedIn:"
			contactValue={<a href={linkedinLink} target="_blank">{linkedinLink}</a>}
		/>
		<ContactRow
			contactType="GitHub:"
			contactValue={<a href={githubLink} target="_blank">{githubLink}</a>}
		/>
  </InfoCard>
);

export default Contact;