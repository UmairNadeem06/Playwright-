const { expect } = require('@playwright/test');
import selector from '../allivet_locators.json';
export default class general {
    constructor(page) {
        this.page = page;
      }


}