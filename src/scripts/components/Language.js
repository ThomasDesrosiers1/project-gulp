export default class Language {
  constructor(element) {
    this.element = element;

    this.currentUrl = window.location.href;

    this.init();
  }

  init() {
    this.element
      .querySelector('.lang__toggle')
      .addEventListener('click', this.setPath.bind(this));
  }

  setPath(event) {
    event.preventDefault();

    if (this.currentUrl.includes('/en/')) {
      let frenchUrl = this.currentUrl.replace('/en/', '/');
      window.location.href = frenchUrl;
    } else {
      let englishUrl = this.currentUrl.replace(
        window.location.origin + '/',
        window.location.origin + '/en/'
      );
      window.location.href = englishUrl;
    }
  }
}
