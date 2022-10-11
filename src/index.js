import * as React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import App from './App';

class ReactElement extends HTMLElement {
  
  constructor() {
    super();
    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this._innerHTML = this.innerHTML;
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount();
  }

  mount() {
    let retrieveData = this.children[0].innerHTML.trim();
    let parsedData = JSON.parse(retrieveData);
    let props = parsedData;
    render(
        <App {...props} />
    , this)
  }

  unmount() {
    unmountComponentAtNode(this);
  }

}

customElements.define('mfe-structure', ReactElement);