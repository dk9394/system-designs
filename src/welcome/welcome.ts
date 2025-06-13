import './welcome.css';

import { createCustomElement } from '../utils';

export const welcome = createCustomElement(
	'h2',
	'Welcome to Typescript & Webpack boilerplate codebase!'
);

welcome.classList.add('welcome__title');
