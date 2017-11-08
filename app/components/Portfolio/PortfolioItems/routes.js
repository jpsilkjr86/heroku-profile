// imports project components
import {  Featured, Bio, MyWorks, Collaborations, Games, Contact } from './portfolio-items';

// saves routes array
const routes = [
	{ path: '/featured', component: Featured, title: 'Featured' },
	{ path: '/bio', component: Bio, title: 'Bio' },
	{ path: '/myworks', component: MyWorks, title: 'My Works' },
	{ path: '/collaborations', component: Collaborations, title: 'Collaborations' },
	{ path: '/games', component: Games, title: 'Games' },
	{ path: '/contact', component: Contact, title: 'Contact' }
];

module.exports = routes;