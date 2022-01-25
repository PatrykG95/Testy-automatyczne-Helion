import GlobalPage from "../../pages/GlobalPage";
import SearchBarPage from "../../pages/components/SearchBarPage";
import SearchResultPage from "../../pages/SearchResultPage";
import { helionHomeUrl,notFoundUrl,searchPageUrl } from "../../config/pagesUrl";
import { searchPhrase, searchResultTitle, incorrectSearchPhrase, notFoundMessage  } from "../../config/data";


describe ("E2E - SearchBar", async() => {
    it("Should open helion page and verify url and visible searchbar", async () => {
        await GlobalPage.openPage(helionHomeUrl, helionHomeUrl);
        await SearchBarPage.searchBarIsVisible();
    })

    it("Should click on rodo-ok", async () => {

        await SearchBarPage.ClickRodoOkBtn();


    })

    it("Should click on search icon, and verify url",async () => {

        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(helionHomeUrl);
        
    })

    it("Should type search value and verify visible popup", async () => {
        await SearchBarPage.typeSearchPhrase(searchPhrase);
        await browser.pause(5000);
        await SearchBarPage.suggestPopupIsVisible();
    })

    it("Should click on see all book button", async () => {
        await SearchBarPage.ClickOnSeeAllBooksBtn();
        await expect(browser).toHaveUrl(searchPageUrl);
    })

    it("Should verify visible correctly title and number of books", async() => {
    
        await expect(await SearchResultPage.getPageTitle()).toContain(searchResultTitle)
        await expect(await SearchResultPage.getNumberOfBooks()).toEqual(20);

    })

    it("Should clear input value and verify value", async () => {
        await SearchBarPage.clearSearchInput();
        await expect(await SearchBarPage.getInputValue()).toContain("");

    })

    it("Should type incorrect book name and verify alert", async() =>{
        await SearchBarPage.typeSearchPhrase(incorrectSearchPhrase);
        await SearchBarPage.clickOnSearchIcon();
        await expect(await SearchBarPage.getNotFoundAlerText()).toContain(notFoundMessage);

    })

    it("Should clear input value and click on search icon", async () => {
        await SearchBarPage.clearSearchInput();
        await SearchBarPage.clickOnSearchIcon();
        await expect(browser).toHaveUrl(notFoundUrl);
        await expect(await SearchBarPage.getInputValue()).toContain(incorrectSearchPhrase);
    })
    


})
