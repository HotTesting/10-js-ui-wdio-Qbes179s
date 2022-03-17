
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
    
        const addWorker = await $('a[href="/eam/create-worker"]')
        await addWorker.click()
    
    
await browser.pause(1000) 
    
        const GroupName = new Date().getTime() / 1000 + 'Dev'
        $('input[name="name"]').addValue(GroupName)
    
await browser.pause(1000) 
    
        const Groups = await $$('.checkbox_span__Kuugs')
    
        await Groups[0].scrollIntoView()
await browser.pause(1000) 
        await Groups[0].moveTo()
await browser.pause(1000) 
        await Groups[0].click()
    
            // Permissions.forEach(i => {
            //          i.scrollIntoView()
            //          browser.pause(2000) 
            //                  i.moveTo()
            //          browser.pause(2000) 
            //                  i.click()
            //  })
    
await browser.pause(1000) 
        const createWorker = await $('button[type="submit"]')
    
        await createWorker.scrollIntoView()
await browser.pause(1000) 
        await createWorker.moveTo()
await browser.pause(1000) 
        await createWorker.click()
      
    
await browser.pause(2000) 

        const saveCSV = await $('.styles_saveBtn__jQ6gL')
        await saveCSV.moveTo()
await browser.pause(1000) 
        await saveCSV.click()
await browser.pause(5000) 
        let check = await saveCSV.isExisting()
    
        console.log(check + 'FROG')
//        assert.equal(check,true) 
            
            // } catch (err) {
            // console.log(err, '__ERROR__')
    //      }
    })
    })