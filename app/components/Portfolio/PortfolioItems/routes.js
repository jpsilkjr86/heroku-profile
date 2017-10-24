// imports project components
import {  Featured, AboutMe, MyWorks, Collaborations, Games, ExternalLinks } from './projects';

// saves routes array
const routes = [
	{ path: '/featured', component: Featured, title: 'Featured Works' },
	{ path: '/about', component: AboutMe, title: 'About Me' },
	{ path: '/myworks', component: MyWorks, title: 'My Works' },
	{ path: '/collaborations', component: Collaborations, title: 'Collaborations' },
	{ path: '/games', component: Games, title: 'Games' },
	{ path: '/links', component: ExternalLinks, title: 'External Links' }
];

module.exports = routes;