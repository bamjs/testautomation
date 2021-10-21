const { Builder, By, Key, until, Browser } = require('selenium-webdriver');
const { PageLoadStrategy } = require('selenium-webdriver/lib/capabilities');
// By = webdriver.By,
// until = webdriver.until; 
{ describe, before, after, it } require('selenium-webdriver/testing');
// var driver;
require("geckodriver")
require("chromedriver");
// require('org.openqa.selenium.JavascriptExecutor')
describe("this is test for banks ", function () {
    this.timeout(500000);
    var driver;
    const startTime = new Date;
    beforeEach("this for testing banks ", function () {
        driver = new Builder().forBrowser("firefox").build();
        async function login() {
            await driver.get(`http://35.154.32.162/login`);
            await driver.manage().window().maximize();

            console.log(startTime);
            var mobile = driver.wait(until.elementLocated(By.name('mobile')));
            mobile.sendKeys('9876543210');
            var password = driver.wait(until.elementLocated(By.name(`password`)));
            password.sendKeys("123456")

            var button = driver.wait(until.elementLocated(By.css(".primary")));
            await button.click();
        } login()
    });



    afterEach("logout and exit", async () => {


        var userMenu = driver.wait(until.elementLocated(By.css(`.mat-menu-trigger`)));
        // await driver.sleep(10000);


        await userMenu.click();
        var logout = driver.wait(until.elementLocated(By.css("#mat-menu-panel-0 > div > button:nth-child(2)")));
        await logout.click();
        const endTime = new Date;
        console.log(endTime);
        totalTime = endTime - startTime
        console.log(totalTime);
        await driver.quit();
        // await driver.sleep(2000);done();






    })
    // describe(`this is for adding banner images`, () => {

    it("this is test add banners", async function () {
        await driver.sleep(2000);
        var createBanner = driver.wait(until.elementLocated(By.xpath('/html/body/application-root/div/application-layout/div/div/div/application-banners-list-container/div/div/div[2]/button')))
        await createBanner.click();
        var createBanner = driver.wait(until.elementLocated(By.xpath('/html/body/application-root/div/application-layout/div/div/div/application-banners-list-container/div/div/div[2]/button')))
         createBanner.click();
        var createBanner = driver.wait(until.elementLocated(By.xpath('/html/body/application-root/div/application-layout/div/div/div/application-banners-list-container/div/div/div[2]/button')))
         createBanner.click();
        var createBanner = driver.wait(until.elementLocated(By.xpath('/html/body/application-root/div/application-layout/div/div/div/application-banners-list-container/div/div/div[2]/button')))
         createBanner.click();
        var appsc = driver.wait(until.elementLocated(By.css("#mat-option-2 > span")));
         appsc.click();
        await driver.sleep(2000);
        var bannerTitle = driver.wait(until.elementLocated(By.name("title")));
          var courses = driver.wait(until.elementLocated(By.css("body > application-root > div > application-layout > div > div > div > application-create-banners-container > div > application-create-banners > div > div > form > div:nth-child(1) > div:nth-child(5) > mat-form-field")));
         courses.click();
        await bannerTitle.sendKeys("APPSC DASARA DHAMAKA");
        var bannerURL = driver.wait(until.elementLocated(By.name("fileUrl")));
        await bannerURL.sendKeys("https://platoonline.in/storage/pdfs/TECHNICAL_ASSISTANCE61.jpeg");
        var order = driver.wait(until.elementLocated(By.name("order")));
        await order.sendKeys("5");

        var link = driver.wait(until.elementLocated(By.name("link")));
        await link.sendKeys("https://platoonline.in/storage/pdfs/TECHNICAL_ASSISTANCE61.jpeg");
        // await driver.sleep(5000)
        // await driver.wait(until.elementIsNotVisible(By.css("#cdk-overlay-27 > snack-bar-container > div > div > application-toast-message > div > div > div.msg-list.error > span")))
        // var bannerSubmit = driver.wait(until.elementIsEnabled(By.css("body > application-root > div > application-layout > div > div > div > application-create-banners-container > div > application-create-banners > div > div > form > div.text-right.button-group > button.primary")));
        var bannerSubmit = driver.wait(until.elementLocated(By.css("body > application-root > div > application-layout > div > div > div > application-create-banners-container > div > application-create-banners > div > div > form > div.text-right.button-group > button.primary")));
        // console.log(bannerSubmit);
        driver.takeScreenshot().then(
            function (image) {
                require('fs').writeFileSync('screenshot', image, 'base64');
            }
        );
        await bannerSubmit.click();

    })
    



    it("checking creating tag ", async () => {
        
        // var tagMenu = driver.wait(until.elementLocated(By.xpath("/html/body/application-root/div/application-layout/div/div/application-aside-menu/aside/a[2]") ));
        
        // await tagMenu.click();
        await driver.sleep(2000)
        var tagmenn = driver.wait(until.elementLocated(By.linkText("Tags")));
        await tagmenn.click();
        var tagmenn = driver.wait(until.elementLocated(By.linkText("Tags")));
        tagmenn.click();
        var createBanner = driver.wait(until.elementLocated(By.css("body > application-root > div > application-layout > div > div > div > application-tags-list-container > div > div > div.action-buttons > button")));
        await createBanner.click();
        var tagTitle = driver.wait(until.elementLocated(By.name("title")));
        await tagTitle.sendKeys("appsc troops");
        driver.takeScreenshot().then(
            function (image) {
                require('fs').writeFileSync('captured_image_3.png', image, 'base64');
            }
        );
        var tagSubmit = driver.wait(until.elementLocated(By.css("body > application-root > div > application-layout > div > div > div > application-create-tags-container > div > application-create-tags > div > div > form > div.text-right.button-group > button.primary")));
        await tagSubmit.click();

    })
    it("creating questions",async()=>{
        var questionTab = driver.wait(until.elementLocated(By.linkText("Questions")));
        questionTab.click();
        var createQuestion = driver.wait(until.elementLocated(By.css("body > application-root > div > application-layout > div > div > div > application-questions-container > div > div > div.action-buttons > button")));
        createQuestion.click();
        driver.switchTo().frame(0);
        var paragraph = driver.wait(until.elementLocated(By.css("body > p").getText()));
        console.log(paragraph)


    })


   
});





