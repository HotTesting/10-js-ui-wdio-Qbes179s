const asserteam = require('assert');
const RegisterActions = require('../PA/registration_pa');
const regAct = new RegisterActions(); 
const eamAct = require('../PA/eam_pa');
const eamActions = new eamAct();
const dashB = require('../PA/dashboard_pa');
const checkEAM = new dashB(); 
const testData = require('../test-data/register-data.json');
const eam = require('../PO/eam_po');
const EAM = new eam();


describe('MASTER', async () => {
    it('can change tenant name', async () => {
        await browser.url('/');
        await regAct.SignInAsMaster();
        await regAct.Sign();
        await checkEAM.OpenEAM();
        await eamActions.ChangeTenantName(testData.NewTenantName);
        await eamActions.ClickSaveButton();
        await browser.reloadSession();
        await browser.url('/');
        await regAct.SignInAsMaster();
        await regAct.Sign();
        await checkEAM.OpenEAM();
        /////////CHECK and return previous value/////////////
        let check = await EAM.Name_Field.getValue()
        asserteam.strictEqual(check,testData.NewTenantName);
        await eamActions.ChangeTenantName(testData.TenantName);
        await eamActions.ClickSaveButton();
        await browser.reloadSession();

    })
    it('can add worker', async () => {
        await browser.url('/');
        await regAct.SignInAsMaster();
        await regAct.Sign();
        await checkEAM.OpenEAM();

        await eamActions.AddWorkerButton();
        let NewWorker = new Date().getTime() / 1000 + 'dev';
        await eamActions.FillCreateWorkerForm(NewWorker);
        await eamActions.ClickSaveButton();
        await eamActions.ClickSaveCSV();
        /////////CHECK/////////////
        await checkEAM.OpenEAM();
        let check = await ($$('.styles_tableCell__C6dnh'))[0].getText()
        asserteam.strictEqual(check,NewWorker);
        await eamActions.ChangeTenantName(testData.TenantName);
        await eamActions.ClickSaveButton();
        await browser.reloadSession();

    })

})

describe('WORKER', async () => {

    it('can change tenant name', async () => {
        await browser.url('/');
        await regAct.FillWorkerSignInForm();
        await regAct.Sign();
        await checkEAM.OpenEAM();
        await eamActions.ChangeTenantName(testData.NewTenantName);
        await eamActions.ClickSaveButton() ;
    
        await browser.reloadSession();
        await browser.url('/');
        await regAct.SignInAsMaster();
        await regAct.Sign();
        await checkEAM.OpenEAM();
        /////////CHECK and return previous value/////////////
        let check = await EAM.Name_Field.getValue()
        asserteam.strictEqual(check,testData.NewTenantName);
        await eamActions.ChangeTenantName(testData.TenantName);
        await eamActions.ClickSaveButton() 
        await browser.reloadSession();

     })

    it('can create worker', async () => {
        await browser.url('/');
        await regAct.FillWorkerSignInForm();
        await regAct.Sign();
        await checkEAM.OpenEAM();

        await eamActions.AddWorkerButton();
        let NewWorker = new Date().getTime() / 1000 + 'dev';
        await eamActions.FillCreateWorkerForm(NewWorker);
        await eamActions.ClickSaveButton();
        await eamActions.ClickSaveCSV();
        /////////CHECK/////////////
        await checkEAM.OpenEAM();
        let check = await ($$('.styles_tableCell__C6dnh'))[0].getText()
        asserteam.strictEqual(check,NewWorker);
        await eamActions.ChangeTenantName(testData.TenantName);
        await eamActions.ClickSaveButton();
        await browser.reloadSession();
//       await browser.reloadSession();

     })
})
