# E2E testing an Ionic App with Protractor and Appium

This is a small Ionic test project (tabs template) with e2e testing enabled.
Helpful guides/articles:

- https://blog.softwareforen.de/2018/05/ui-tests-fuer-ionic-3-mit-protractor-und-appium/
- https://sites.google.com/a/chromium.org/chromedriver/
- http://appium.io/docs/en/writing-running-appium/server-args/

## usage 
(tested on Android)

0. install ionic and cordova globally if not already done
1. clone repo & npm i
2. if needed install appium-doctor to verify appium installation
3. try `ionic serve` to verify our app is running fine (and exit afterwards)
4. run app on emulator or attached device
5. be sure to download matching chromedriver. I did this by installing the correct version of chromedriver npm package with `npm i chromedriver@<version> --save-dev` 
5. start appium with `appium --chromedriver-executable <path to executable>` (or start without argument to take latest chromedriver bundled with appium)
6. in another console window start e2e test with `.\node_modules\.bin\protractor .\protractor.android.conf.js`
