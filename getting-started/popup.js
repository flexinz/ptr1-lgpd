function getCurrentTabUrl() {
  var queryInfo = {
    active: true,
    currentWindow: true,
  }

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0]
    // console.log(tab.url);
    var result = tab.url;
    // document.write (result);
    document.getElementById("campo").setAttribute('value',result);
  })
  

}
// var urlFinal = document.getElementById('campo').value;

// function getCookies(domain, name, callback) {
//   chrome.cookies.get({"url": domain, "name": name}, function(cookie) {
//       if(callback) {
//           callback(cookie.value);
//       }
//   });
// }

// //usage:
// getCookies("http://www.example.com", "id", function(id) {
//   alert(id);
// });

document.querySelector('#get-url').addEventListener('click', getCurrentTabUrl);