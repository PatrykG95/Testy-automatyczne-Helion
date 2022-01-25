class CardPage {

    get alertMessage () {
        return $("div.successbox >p>b");
    }

    get priceItem() {
        return $("h3#cart-edit-summary");
    }

    get checkbox(){
        return $("table#koszyk th.checkbox label");
    }

    get deleteSelectedLabel() {
        return $("div#usun a");
    }

    get deletedAlertMessage() {
        return $("div#content div.infobox p");
    }
    
    async getDeleteAlertMessageValue():Promise <string> {
        const alert:WebdriverIO.Element = await this.deletedAlertMessage;
        await alert.waitForDisplayed();
        return await alert.getText();


    }

    async acceptDeleteAlert () {
        await browser.acceptAlert();

    }

    async clickOnDeleteSelectedLabel(){
        const label:WebdriverIO.Element = await this.deleteSelectedLabel;
        await label.waitForDisplayed();
        await label.scrollIntoView();
        await label.click();
    }

    async clickOnCheckbox(){
        const checkbox:WebdriverIO.Element = await this.checkbox;
        await checkbox.waitForClickable();
        await checkbox.scrollIntoView();
        await checkbox.click();
    }

    async getPrizeItem ():Promise <string>{
        const price:WebdriverIO.Element = await this.priceItem;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async getSuccesAlertValue():Promise <string> {
        const alert:WebdriverIO.Element = await this.alertMessage;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

}

export default new CardPage();