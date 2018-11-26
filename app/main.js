/// tabanno main js file

// thanks to https://gooroo.io/GoorooTHINK/Article/16413/Creating-a-Chrome-extension-using-Visual-Studio-Code/19953#.W_UJ5ugzaHt 

var con = chrome.extension.getBackgroundPage();

con.console.log("hi");

// returns tabs array with tab.url tab.title
var filter = {}; // json: active, etc. see https://developer.chrome.com/extensions/tabs

function onReceived(tabs){
    con.console.log("onReceived: ", tabs);
}

function getTabs(clbkOnReceived){
    chrome.tabs.query(  filter, 
                        fucnction onQryResult(tabs){ results callback
                            con.console.log("onQ.tabs: ", tabs)
                            clbkOnReceived(tabs);
                        }
                     );
}

document.addEventListener(  'DOMContentLoaded', 
                            getTabs(onReceived(tabs));

);


