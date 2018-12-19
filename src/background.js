// omnibox listener
chrome.omnibox.onInputChanged.addListener(function(text, suggest){
    suggest([
        {content: "darken", description: "let the night rules..."},
        {content: "restore", description: "bring light back..."}
    ]);
});

// omnibox responser
chrome.omnibox.onInputEntered.addListener(function(text){
    switch(text){
        case "darken":
            darken();
            break;
        case "restore":
            restore();
            break;
    }
})

// popup responder
chrome.extension.onMessage.addListener(function(request, sender, sendResponse){
    switch(request.type){
        case "darken":
            darken();
            break;
        case "restore":
            restore();
            break;
    }
    return true;
});

chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    switch(command){
        case "darken":
            darken();
            break;
        case "revert":
            revert();
            break;
    }
});
  

// color pallete
var colors = {
    light_background: "#333",
    med_background: "#222",
    dark_background: "#111",
    purple_p: "#9863db",
    blue_p: "#63c3db",
    yellow_p: "#dba163",
    red_p: "#db637b",
    yellow_h: "#e7b082",
    light_green_h: "#d2e782",
    green_h: "#82e782",
    red_h: "#e782aa",
    blue_h: "#82ade7",
    purple_h: "#af82e7",
    code: "#cfef60"
}

// handlers
var darken = () => {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "darken", color_pallete: colors});
        chrome.browserAction.setBadgeText({text: "Eclipsed!"});
    });
}

var restore = () => {
    chrome.tabs.getSelected(null, function(tab){
        chrome.tabs.sendMessage(tab.id, {type: "restore"});
        chrome.browserAction.setBadgeText({text: "Bright again!"});
    });
}

