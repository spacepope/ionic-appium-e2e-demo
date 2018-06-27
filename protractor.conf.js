var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    allScriptsTimeout: 11000,
    baseUrl: 'http://localhost:8100',
    capabilities: {
        'browserName': 'chrome'
        // 'browserName': 'firefox'
    },
    // 'true' für direkte Verbindung mit Chrome oder Firefox (statt über einen Selenium Server)
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },
    // diese Einstellung muss 'false' sein, wenn mit async/await Syntax gearbeitet werden soll
    SELENIUM_PROMISE_MANAGER: false,
    // welche Spezifikationen sollen ausgeführt werden (hier alle im Ordner e2e)
    specs: ['./e2e/**/*.e2e-spec.ts'],
    beforeLaunch: function() {
        // Compiler-Optionen die ts-node verwenden soll
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        // führt aktuell im Ordner www gebaute App aus
        require('connect')().use(require('serve-static')('www')).listen(8100);
    },
    onPrepare: function() {
        // Auswahl des Spec-Reporters
        jasmine.getEnv().addReporter(new SpecReporter());
    }
}
