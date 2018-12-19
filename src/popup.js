window.onload = function(){
    document.getElementById("darken").onclick = function(){
        chrome.extension.sendMessage({
            type: "darken"
        })
    }
    document.getElementById("revert").onclick = function(){
        chrome.extension.sendMessage({
            type: "revert"
        })
    }
}