chrome.commands.onCommand.addListener(async (command) => {
    console.log(`Command: ${command}`); 
    let val
    switch (command) {
        case 'y-save':
            val=1
            break;
        case 'n-save':
            val=-1
            break;    
        default:
            break;
    }
   
    const tab = await getCurrentTab()
    const url = tab.url.split('#')[0] 
    console.log('Current url is ', url)
    let links = await getAllStorageSyncData(null) 

    let encrypt = btoa(url)
    links[encrypt] = val

    await setAllStorageSyncData(links)

});


async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

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