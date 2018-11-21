/// tabanno main js file

// thanks to https://gooroo.io/GoorooTHINK/Article/16413/Creating-a-Chrome-extension-using-Visual-Studio-Code/19953#.W_UJ5ugzaHt 
console.log("hi");

$(function () {
    $("#maintxt").html("set!")
    console.log('ready!');

});

// returns tabs array with tab.url tab.title
var filter = {}; // json: active, etc. see https://developer.chrome.com/extensions/tabs

function onReceived(tabs){
    console.log("onReceived: ", tabs);
}

function getTabs(clbkOnReceived){
    chrome.tabs.query(  filter, 
                        fucnction onQryResult(tabs){ results callback
                            console.log("onQ.tabs: ", tabs)
                            clbkOnReceived(tabs);
                        }
                     );
}

document.addEventListener(  'DOMContentLoaded', 
                            getTabs(onReceived(tabs));

);


