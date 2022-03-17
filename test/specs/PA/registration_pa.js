const registration = require('../PO/registration_po');
const reg = new registration();
const testData = require('../test-data/register-data.json');

class RegistrationActions {
    
    OpenMasterSignInForm() {
        reg.SignInAsMaster_Button.waitForClickable(2000);
        reg.SignInAsMaster_Button.click();
    }
    OpenWorkerSignInForm() {
        reg.SignInAsWorker_Button.waitForClickable(2000);
        reg.SignInAsWorker_Button.click();
    }
    OpenSignUpForm() {
        reg.SignUp_Link.waitForClickable(2000);
        reg.SignUp_Link.click();
    }
    OpenSignInForm() {
        reg.SignIn_Link.waitForClickable(2000);
        reg.SignIn_Link.click();
    }
    FillMasterSignUpForm() {
        let NewEmail = new Date().getTime() / 1000 + '@test.test';
        reg.Email_Field.setValue(NewEmail);
        reg.Name_Field.setValue(testData.TenantName);
        reg.Password_Field.setValue(testData.MasterPassword);
    }
    FillMasterSignInForm() {
        reg.Email_Field.waitForExist(3000);
        reg.Email_Field.setValue(testData.Email);
        reg.Password_Field.waitForExist(3000);
        reg.Password_Field.setValue(testData.MasterPassword);
    }

    FillWorkerSignInForm() {
        reg.TenantName_Field.waitForExist(2000);
        reg.TenantName_Field.setValue(testData.TenantName);
        reg.WorkerName_Field.waitForExist(2000);
        reg.WorkerName_Field.setValue(testData.WorkerName);
        reg.Password_Field.waitForExist(2000);
        reg.Password_Field.setValue(testData.WorkerPassword);
    }
    Sign() {
        reg.Sign_Button.waitForClickable(4000);
        reg.Sign_Button.moveTo();
        reg.Sign_Button.click();
    }
    SignInAsMaster() {
        this.OpenMasterSignInForm();
        this.FillMasterSignInForm();
    }
    SignUp() {
        this.OpenMasterSignInForm();
        this.OpenSignUpForm();
        this.FillMasterSignUpForm();
    }
}

module.exports = RegistrationActions;