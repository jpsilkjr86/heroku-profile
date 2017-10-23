// imports react component classes
import React from 'react';

import { Panel, Button } from 'react-bootstrap';

import { portfolioImg, scrollable } from './AboutMe.css';
import portfolioImgSrc from './img/portfolio.jpg';

const AboutMe = props => (
  <Panel header={<h3>About Me</h3>}>
  	<div className={scrollable}>
	    <img src={portfolioImgSrc} alt="John Silkey Profile" className={portfolioImg}/>
	    <p>
				After graduating from Arizona State University in 2009 with a Bachelor's in Chinese,
				my first life choice was to move overseas and teach English in a Mandarin Chinese environment.
				This enabled me to hone my own foreign language skills while immersing myself in and absorbing
				other cultures. I spent one year in Jiangsu province, mainland China, and then over six years
				in Taiwan, teaching English at private learning centers for elementary school students.
			</p>
			<p>
				Now that I am back in the US, I am eager to expand my horizons and learn languages of an
				entirely different sort: computer languages, for the use of web development and application
				programming. As one who has endured the painstaking process of becoming fluent in entirely
				different mode of thinking, I am excited to learn and apply new skills in the fields of computer
				science and engineering.
			</p>
		</div>
  </Panel>
);

export default AboutMe;