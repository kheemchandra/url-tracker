chrome.storage.sync.get(null, (response) => {
    if (chrome.runtime.lastError) {
        throw chrome.runtime.lastError
    }

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
 