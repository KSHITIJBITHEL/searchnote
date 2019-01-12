// create a context menun
browser.contextMenus.create({
  id: "ggl",
  title:"search on google",
  contexts: ["selection"]// telling the compiler that in this api we need selected text which we will return as info object
});

//add action listener to context menu
browser.contextMenus.onClicked.addListener(contextMenuAction);
function contextMenuAction(info,tab) {
  const url = "https://google.com/?q="+info.selectionText; // we can only invoke selectiontext if we have the selection in contexts
  browser.tabs.create({url: url}); 
}