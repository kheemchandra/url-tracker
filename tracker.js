chrome.runtime.sendMessage('get-user-data',   (response) => {
        
    const {YES, NO} = response
    console.log('Response is ', response)

    const pageLinks = getLinks()
    pageLinks.forEach( ([h3, link]) => {
        if(YES.includes(link)){
            h3.style.color = '#4ef18f'
        }
        else if(NO.includes(link)){
            h3.style.color = '#f14e4e'
        } 
    })
});

function getLinks(){
    const h3s = [...document.querySelectorAll('a > h3')]
    
    return h3s.map(h3 => {
        let p = h3.parentElement
        return  [h3, p.href] 
    })
    
}

// document.body.style.backgroundColor = 'red' 

let items
/*
chrome.storage.sync.get(null, (result) => {
    if (chrome.runtime.lastError) {
        throw chrome.runtime.lastError
    }
    console.log('Inside tracker')

    const {YES, NO} = result
    items = YES 

    // const pageLinks = getLinks()
    // pageLinks.forEach( ([h3, link]) => {
    //     if(YES.includes(link)){
    //         h3.style.color = 'green'
    //     }
    //     else if(NO.includes(link)){
    //         h3.style.color = 'red'
    //     }else {
    //         h3.style.color = 'yellow'
    //     }
    // })
    // document.body.style.backgroundColor = 'red'
})

if(items){
    document.body.style.backgroundColor = 'green'
}else{
    // document.body.style.backgroundColor = 'red'
}



// chrome.storage.sync.get(null, (result) => {
//     if (chrome.runtime.lastError) {
//         throw chrome.runtime.lastError
//     }
//     console.log('Inside tracker')

//     const {YES, NO} = result

//     const pageLinks = getLinks()
//     pageLinks.forEach( ([h3, link]) => {
//         if(YES.includes(link)){
//             h3.style.color = 'green'
//         }
//         else if(NO.includes(link)){
//             h3.style.color = 'red'
//         }else {
//             h3.style.color = 'yellow'
//         }
//     })
//     document.body.style.backgroundColor = 'red'
// })
*/


