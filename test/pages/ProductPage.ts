class ProductPage {

    get productTitle() {
        return $("div.title-group >h1>span[itemprop='name']")
    }

    get addToCartBtn (){
        return $("a#addToBasket_vfrdev_w");

    
    }

    get priceValue () {

        return $("ins#cena_w");
    }

    async getProductPrice():Promise <string> {
        const price:WebdriverIO.Element = await this.priceValue;
        await price.waitForDisplayed();
        return await price.getText()
    }

    async getProductTitleValue():Promise <string> {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async clickOnAddToCartBtn(){
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.scrollIntoView()
        await btn.waitForDisplayed();
        await btn.click();
    }

    async addToCartBtnIsVisible(){
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.waitForDisplayed();
    }
    async productTitleIsVisible() {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();

    }
}

export default new ProductPage();