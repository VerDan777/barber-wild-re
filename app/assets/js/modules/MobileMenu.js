import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $('.site-header__menu-icon');
        this.mainMenu = $('.main-nav');

        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        console.log('events created');
    }

    toggleTheMenu() {
        console.log('button clicked');
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
        this.mainMenu.toggleClass('main-nav--is-visible');
    }
}

export default MobileMenu;