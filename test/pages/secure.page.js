import BasePage from './base.page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends BasePage {
    /**
     * define selectors using getter methods
     */
    get flashAlert () { return $('#flash') }
}

export default new SecurePage();
