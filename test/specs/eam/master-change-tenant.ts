describe('Master', async () => {
    it('can create group', async () => {
        // try {
    browser.url('/')

    const masterLink = $('.styles_button__JSGQl') 
    await masterLink.click()
        
browser.pause(1000)

    $('input[name="email"]').setValue('master@test.test')
    $('input[name="password"]').setValue('password')

    let submit = $('button[type="submit"]')
    await submit.click()
    await submit.click()

await browser.pause(1000)

    const eam = await $('a[href="/eam"]')
    await eam.click()


await browser.pause(1000) 

    const changeName = await $('input[name="name"]')
    await changeName.clearValue()
    await changeName.setValue('MASTER')


await browser.pause(1000) 

//    submit = $('button[type="submit"]')
    await submit.moveTo()
    await submit.click()

await browser.pause(2000) 
    
    let check = await changeName.getValue()

    console.log(check + 'FROG')
//    assert.equal(check,true) 
        
        // } catch (err) {
        // console.log(err, '__ERROR__')
//      }
})
})