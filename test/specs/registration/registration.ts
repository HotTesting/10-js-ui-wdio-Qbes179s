const assert = require('assert');
const RegistrationActions = require('../PA/registration_pa');
const act = new RegistrationActions(); 
const dashboard = require('../PO/dashboard_po');
const check = new dashboard(); 


describe('User', async () => {
    it('can sign up', async () => {
        browser.url('/');
        act.SignUp();
        await browser.pause(6000);
        act.Sign();
        await browser.pause(3000);
        /////////CHECK//////////
        check.EAM.waitForExist(2000);
        let eamCheck = await check.EAM.isExisting()
        assert.equal(eamCheck,true)
        await browser.reloadSession();       
    })
    
    it('can sign in as a master', async () => {
        browser.url('/');
        act.SignInAsMaster();
        await browser.pause(6000);
        act.Sign();
        await browser.pause(3000);
        /////////CHECK//////////
        check.EAM.waitForExist(2000);
        let eamCheck = await check.EAM.isExisting()
        assert.equal(eamCheck,true)
        await browser.reloadSession();
    })

     it('can sign in as a worker', async () => {
        browser.url('/');
        act.FillWorkerSignInForm();
        await browser.pause(5000);
        act.Sign();
        await browser.pause(3000);
        /////////CHECK//////////
        check.EAM.waitForExist(2000);
        let eamCheck = await check.EAM.isExisting()
        assert.equal(eamCheck,true)
        await browser.reloadSession();
    })
})