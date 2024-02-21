import { defineConfig } from "cypress";
import { Browser as PuppeteerBrowser, Page } from "puppeteer-core";

import { setup, retry } from "@cypress/puppeteer";

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here

      setup({
        on,
        onMessage: {
          async switchToNewTabAndRegisterUser(browser: PuppeteerBrowser) {
            const page = await retry<Promise<Page>>(async () => {
              const pages = await browser.pages();
              const page = await pages.find(page =>
                page.url().includes("register")
              );
              if (!page) {
                throw new Error("Could not find page");
              }

              return page;
            });

            await page.bringToFront();
            await page.waitForSelector("#firstname");
            await page.type("#firstname", "test");
            await page.type("#lastname", "test");
            await page.type("#email", "test@test.com");
            const submitButton = await page.$("#submit");
            await submitButton.click();
            const successMsg = await page.$eval(
              "#successMsg",
              el => el.textContent
            );
            submitButton.dispose();
            await page.close();
            return successMsg;
          }
        }
      });
    }
  }
});
