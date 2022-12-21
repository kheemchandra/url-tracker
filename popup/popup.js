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

  let links = await getAllStorageSyncData(null) 
  
  let encrypt = btoa(url)
  links[encrypt] = 1
  
  await setAllStorageSyncData(links)
  
})
 

btnNo.addEventListener('click', async () => {
  const tab = await getCurrentTab()
  const url = tab.url.split('#')[0] 

  let links = await getAllStorageSyncData(null) 
  
  let encrypt = btoa(url)
  links[encrypt] = -1
  
  await setAllStorageSyncData(links)
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
