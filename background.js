// chrome.runtime.sendMessage('send-data', (response) => {
//   console.log('Popup -> background: ', response)
// });


// chrome.runtime.sendMessage('send-data', (response) => {
//   // ans.textContent =  `popup -> background: ${response}`
//   let b =  `popup -> background: ${response}`
//   console.log(b)
//   return true
// });


chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command}`);
  // chrome.runtime.sendMessage('send-data', (response) => {
  //   console.log('Popup -> background: ', response)
  // });
  
  // chrome.runtime.sendMessage({
  //   type: 'key-pressed',
  //   name: 'Kheem chandra'
  // }, (response) => {
  //   console.log('Popup -> background: ', response)
  // });
  
});



chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });
});




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