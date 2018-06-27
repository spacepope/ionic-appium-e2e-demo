import { browser, element, by, ElementFinder, protractor, ElementArrayFinder } from 'protractor';

describe('Home', () => {
        beforeAll(async () => {
                // Zwischen Browser- und Device-Konfiguration kann z.B. danach unterschieden werden,
                // ob die baseUrl gesetzt ist (Browser ja, Device nein).
                if (browser.baseUrl) {
                        await browser.get('');
                }
        });

        it('title of the first card reads Home', async () => {
                const title: string = await element(by.css('.title')).getText();
                expect(title).toBe("Home");
        });

        it("should have 3 tab buttons Home, About and Contact", async() => {
                const tabButtons = await element.all(by.css(".tab-button")).getText();
                expect(tabButtons).toEqual(["Home", "About", "Contact"]);
        });  
});
