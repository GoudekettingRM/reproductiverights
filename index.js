class Accordion {
  static initialize() {
    console.log('hi');
    const accordions = document.querySelectorAll('.usa-accordion');
    console.log(accordions);
    accordions.forEach((accordion) => {
      const acc = new Accordion(accordion);
      acc.init();
    });
  }

  constructor(accordion) {
    this.accordion = accordion;
    this.button = accordion.querySelector('.usa-accordion__button');
    this.content = accordion.querySelector('.usa-accordion__content');
    this.content.style.display = 'none';
    this.contentShown = false;
    this.button.setAttribute('aria-expanded', false);
    this.content.hidden = true;
  }

  init() {
    // this.accordion.addEventListener('click', () => this.handleStateChange());
    this.button.addEventListener('click', () => this.handleStateChange());
    this.button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleStateChange();
      }
    });
  }

  handleStateChange() {
    if (this.contentShown) {
      this.content.style.display = 'none';
      this.contentShown = false;
      this.button.setAttribute('aria-expanded', false);
      this.content.hidden = true;
    } else {
      this.content.style.display = 'block';
      this.contentShown = true;
      this.button.setAttribute('aria-expanded', true);
      this.content.hidden = false;
    }
  }
}
Accordion.initialize();
