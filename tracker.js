chrome.storage.sync.get(null, (response) => {
    if (chrome.runtime.lastError) {
        throw chrome.runtime.lastError
    }
     
    const pageLinks = getLinks()
    pageLinks.forEach( ([h3, link]) => { 
        let encrypt = btoa(link)
        let status = response[encrypt]
        switch (status) {
            case 1:
                h3.style.color = '#4ef18f'
                break;
            case -1:
                h3.style.color = '#f14e4e'
                break;
        
            default:
                break;
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
 