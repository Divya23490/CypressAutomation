const LoginPage = require('../page-objects/LoginPage');


describe('Login to the Application', () => {

    beforeEach(() => {
        LoginPage.open();
    });

    it('login with valid account', () => {
        LoginPage.EnterUsernameText("LifeBonder")
        LoginPage.EnterPasswordText("NextGen2022!")
        LoginPage.ClickSubmitButton()
    })
});
