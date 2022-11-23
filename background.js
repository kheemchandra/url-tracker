// chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
  
//   if (message === 'get-user-data') {
//     getAllStorageSyncData(null).then(sendResponse) 
//   }
//   return true
// });



// function getAllStorageSyncData(key) { 
//   return new Promise((resolve, reject) => { 
//     chrome.storage.sync.get(key, (items) => { 
//       if (chrome.runtime.lastError) {
//         return reject(chrome.runtime.lastError);
//       }
//       resolve(items);
//     });
//   });
// }