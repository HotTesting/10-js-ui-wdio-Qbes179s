
describe('Master', async () => {
    it('can create group', async () => {
        // try {
         browser.url('/')

        const masterLink = $('.styles_button__JSGQl') 
        await masterLink.click()
        
browser.pause(1000)

        $('input[name="email"]').setValue('master@test.test')
        $('input[name="password"]').setValue('password')

        const submit = $('button[type="submit"]')
        await submit.click()
        await submit.click()

await browser.pause(1000)

        const eam = await $('a[href="/eam"]')
        await eam.click()


await browser.pause(1000) 

        const addGroup = await $('a[href="/eam/configurate-group"]')
        await addGroup.click()


await browser.pause(1000) 

        const GroupName = new Date().getTime() / 1000 + 'group'
        $('input[name="name"]').addValue(GroupName)

await browser.pause(1000) 

       const Permissions = await $$('.styles_inputGroups__bgqt2 li:last-child .checkbox_span__Kuugs')

        await Permissions[3].scrollIntoView()
await browser.pause(1000) 
        await Permissions[3].moveTo()
await browser.pause(1000) 
        await Permissions[3].click()

        // Permissions.forEach(i => {
        //          i.scrollIntoView()
        //          browser.pause(2000) 
        //                  i.moveTo()
        //          browser.pause(2000) 
        //                  i.click()
        //  })

await browser.pause(1000) 
        const createGroup = await $('button[type="submit"]')

        await createGroup.scrollIntoView()
await browser.pause(1000) 
        await createGroup.moveTo()
await browser.pause(1000) 
        await createGroup.click()
  

await browser.pause(5000) 
        
        let check = await addGroup.isExisting()

        console.log(check + 'FROG')
//        assert.equal(check,true) 
        
        // } catch (err) {
        // console.log(err, '__ERROR__')
//      }
})
})