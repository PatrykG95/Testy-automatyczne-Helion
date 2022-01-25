
import { searchPhrase, searchResultTitle } from "../../config/data";

class SearchBarPage {

    get searchInput() {
        return $("#inputSearch");
    }

    get searchIcon(){
        return $("//button[contains(text(),'Szukaj')]");
    }

    get suggestPopup (){
        return $("form#szukanie div.suggest-list ");
    }

    get seeAllBookBtn () {
        return $("li.wszystkie > p > a");
    }

    get rodook (){
        return $("//a[contains(text(),'Rozumiem')]");
    }

    get notFoundAlert() {
        return $("div.not-found");
    }

    async getNotFoundAlerText():Promise <string> {
        const alert:WebdriverIO.Element = await this.notFoundAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async getInputValue():Promise <string> {
        const InputValue:WebdriverIO.Element = await this.searchInput;
        await InputValue.isDisplayed();
        return InputValue.getValue();

    }

    async clearSearchInput() {
        const ClearInput:WebdriverIO.Element = await this.searchInput;
        await ClearInput.waitForDisplayed();
        await ClearInput.clearValue();

    }

    async ClickRodoOkBtn () {
        const rodoBtn:WebdriverIO.Element = await this.rodook;
        await rodoBtn.waitForDisplayed();
        await rodoBtn.click();
        await expect (await rodoBtn.isDisplayed()).toBeFalsy();
    }


    async ClickOnSeeAllBooksBtn(){
        const btn:WebdriverIO.Element = await this.seeAllBookBtn;
        await btn.waitForDisplayed();
        await btn.scrollIntoView();
        await browser.pause(3000);
        await btn.click();
    }

    async suggestPopupIsVisible() {
        const popup:WebdriverIO.Element = await this.suggestPopup;
        await popup.waitForDisplayed();
        
    
    }

    async typeSearchPhrase(value:string) {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await browser.pause(3000);
        await input.setValue(value);
        await browser.pause(10000);

    
    }

    async clickOnSearchIcon() {

        const icon:WebdriverIO.Element = await this.searchIcon;
        await icon.waitForDisplayed();
        await browser.pause(5000);
        await icon.click();
    }

    async searchBarIsVisible() {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed(); //czeka aż input bedzie widoczny jak nie bedzie to testy się wykraczą
        //await expect(input.isDisplayed()).toBeTruthy();
    }

    
}

export default new SearchBarPage();
