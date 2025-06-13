import { createCustomElement } from './utils';

describe('Utils', () => {
	beforeEach(() => {});

	describe('createCustomElement', () => {
		it('new html element should be created', () => {
			const el = createCustomElement('div', 'test');

			expect(el).toBeTruthy();
			expect(el.tagName).toBe('DIV');
			expect(el.textContent).toBe('test');
		});
	});
});
