import { helionHomeUrl, searchProductUrl, shopcardUrl } from "../../config/pagesUrl";
import { searchPhrase, alertMessage, deletedProductMessage } from "../../config/data";
import SearchBarPage from "../../pages/components/SearchBarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import ProductPage from "../../pages/ProductPage";
import CardPage from "../../pages/CardPage";


describe ("E2E - Products", async () => {
    let productTitle:string = "";
    let productPrice:string = "";
    before(()=> {
        browser.url(helionHomeUrl);
    })

    it("Should type search phrase and click search icon", async() =>{
        await SearchBarPage.typeSearchPhrase(searchPhrase);
        await browser.pause(5000);
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(searchProductUrl);
    })

    it("Should click on first product", async () => {
        await SearchResultPage.clickOnFirstBookItem();
        await ProductPage.productTitleIsVisible();
        await ProductPage.addToCartBtnIsVisible();
        productTitle = await ProductPage.getProductTitleValue();
        productPrice = await ProductPage.getProductPrice();
    })
    it("Should click on add To Card Btn and verify alert message, price ", async() =>{
        await ProductPage.clickOnAddToCartBtn();
        await expect(browser).toHaveUrlContaining(shopcardUrl); //sprawdza czy url zawiera chodz frazę ktora sie zgadza 
        await expect(await CardPage.getSuccesAlertValue()).toContain(productTitle);
        await expect(await CardPage.getPrizeItem()).toContain(productPrice);
 
    })

    it("Should delete product from cart", async() => {
        await CardPage.clickOnCheckbox();
        await CardPage.clickOnDeleteSelectedLabel();
        await expect (await browser.getAlertText()).toContain(alertMessage);
        await CardPage.acceptDeleteAlert();
        await expect(await CardPage.getDeleteAlertMessageValue()).toContain(deletedProductMessage);
    })
    
})