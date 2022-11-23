const btnYes = document.getElementById('btn--yes')
const btnNo = document.getElementById('btn--no') 

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}


btnYes.addEventListener('click', async () => {
  const tab = await getCurrentTab()
  const url = tab.url.split('#')[0] 

  let yess = await getAllStorageSyncData({'YES': new Array()})
  


  let cache = yess['YES']
  if(!cache.includes(url)){
    cache.push(url)
    await setAllStorageSyncData({'YES': cache})
  } 
})
 
function isEmpty(obj){
    return Object.keys(obj).length === 0 && obj.constructor === Object
} 

btnNo.addEventListener('click', async () => {
  const tab = await getCurrentTab()
  const url = tab.url.split('#')[0] 

  let nos = await getAllStorageSyncData({'NO': new Array()})
   
  

  let cache = nos['NO']
  if(!cache.includes(url)){
    cache.push(url)
    await setAllStorageSyncData({'NO': cache})
  } 
})
 
function getAllStorageSyncData(key) { 
  return new Promise((resolve, reject) => { 
    chrome.storage.sync.get(key, (items) => { 
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(items);
    });
  });
}

function setAllStorageSyncData(data) { 
    return new Promise((resolve, reject) => { 
      chrome.storage.sync.set(data, () => { 
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError);
        }
        resolve({success: true});
      });
    });
}