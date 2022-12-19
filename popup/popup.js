const btnYes = document.getElementById('btn--yes')
const btnNo = document.getElementById('btn--no') 
const ans = document.getElementById('ans') 

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

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if(message === 'send-data'){
//     sendResponse('OK')
//   }
  
//   // const {type, name} = message
  
//   // if (type === 'key-pressed') {
//   //   ans.textContent = `Your name ${name}`
//   //   sendResponse('OK boss!');
//   // }
// });



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting === "hello")
      sendResponse({farewell: "goodbye"});
  }
);