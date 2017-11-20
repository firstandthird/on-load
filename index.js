import Domodule from 'domodule';
import { addClass } from 'domassist';

export default class OnLoad extends Domodule {
  get defaults() {
    return {
      className: 'loaded'
    };
  }

  postInit() {
    let src;

    if (this.el.tagName !== 'IMG') {
      const styles = window.getComputedStyle(this.el);
      src = styles['background-image']
        .replace('url(', '')
        .replace(/'/g, '')
        .replace(/"/g, '')
        .replace(')', '');
    } else {
      src = this.el.src;
    }

    const img = new Image();
    img.onload = this.onLoad.bind(this);
    img.src = src;
  }

  onLoad() {
    addClass(this.el, this.options.className);
  }
}

Domodule.register('OnLoad', OnLoad);
