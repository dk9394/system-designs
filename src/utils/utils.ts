export function createCustomElement(tag: string, content: string): HTMLElement {
	const el = document.createElement(tag);
	el.textContent = content;
	return el;
}
