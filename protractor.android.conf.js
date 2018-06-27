var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    allScriptsTimeout: 30000,
    multiCapabilities: [{
        // Das sind die Appium Einstellungen. Wir deployen die Anwendung vorher selbst auf dem Gerät und geben hier
        // den Namen des Packages und der MainActivity an. Appium kann die App auch automatisch auf dem Gerät
        // deployen, dann muss hier der Pfad zur APK angegeben werden.
        browserName: '',
        appPackage: 'io.ionic.starter',
        appActivity: '.MainActivity',
        platformName: 'Android',
        platformVersion: '6.0',
        deviceName: 'Testdroid', // was hier steht ist egal, darf aber nicht leer sein
        autoAcceptAlerts: 'true',
        // Vorsicht bei der Rechtschreibung, ein groß geschriebenes 'V' verhinderte bei uns die Testausführung
        autoWebview: true,
        autoWebviewTimeout: 20000,
        newCommandTimeout: 300000
    }],
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    SELENIUM_PROMISE_MANAGER: false,
    // Pfad zum Selenium Server von Appium
    seleniumAddress: 'http://localhost:4723/wd/hub',
    specs: ['./e2e/**/*.e2e-spec.ts'],
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter());
    },
    beforeLaunch: async () => {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
    }
}
