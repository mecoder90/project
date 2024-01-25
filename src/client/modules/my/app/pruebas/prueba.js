
import { createElement } from 'lwc';
import MyApp from 'my/app';

describe('my-app', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('contains a link to the LWC documentation with target set to _blank', () => {
        const element = createElement('my-app', {
            is: MyApp
        });
        document.body.appendChild(element);

        const linkEl = element.shadowRoot.querySelector('a');

        expect(linkEl.target).toBe('_blank');
    });

    it('contains a link to the LWC documentation with https://', () => {
        const element = createElement('my-app', {
            is: MyApp
        });
        document.body.appendChild(element);
        const linkEl = element.shadowRoot.querySelector('a');

        expect(linkEl.href).toMatch(/^https:/);
    });

    it('contains one active custom element my-greeting', () => {
        const element = createElement('my-app', {
            is: MyApp
        });
        document.body.appendChild(element);
        const greetingEls = element.shadowRoot.querySelectorAll('my-greeting');

        expect(greetingEls.length).toBe(1);
    });
});
