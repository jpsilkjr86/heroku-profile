// imports project components
import {  Featured, AboutMe, MyWorks, Collaborations, Games, Contact } from './portfolio-items';

// saves routes array
const routes = [
	{ path: '/featured', component: Featured, title: 'Featured Works' },
	{ path: '/about', component: AboutMe, title: 'About Me' },
	{ path: '/myworks', component: MyWorks, title: 'My Works' },
	{ path: '/collaborations', component: Collaborations, title: 'Collaborations' },
	{ path: '/games', component: Games, title: 'Games' },
	{ path: '/contact', component: Contact, title: 'Contact' }
];

module.exports = routes;