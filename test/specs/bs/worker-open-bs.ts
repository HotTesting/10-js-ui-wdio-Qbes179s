describe('Worker with permissions', async () => {
    it('can open BS', async () => {
        try {
        browser.url('/')
        
        $('input[name="tenantName"]').setValue('MASTERrich')
        $('input[name="workerName"]').setValue('Bob')
        $('input[name="password"]').setValue('e0af9b82-6b19-450a-bfce-fa22cfa38b0f')

        const submit = $('button[type="submit"]')
        await submit.click()
        await submit.addValue('Enter')

browser.pause(1000)

        const bs = await $('a[href="/bs"]')
        await bs.click()

browser.pause(1000)

//////////////////----CHECK---////////////////////////
        const addSpace = await $('a[href="/bs/create-space"]')
        let check = await addSpace.isExisting()

        console.log(check + 'FROG')
        assert.equal(check,true)

        } catch (err) {
        console.log(err, '__ERROR__')
     }
})
})
