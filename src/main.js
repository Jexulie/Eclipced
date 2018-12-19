chrome.extension.onMessage.addListener(function(message, sender, sendResponse){
    switch(message.type){
        case "darken":
            darken(message.color_pallete);
            break;
        case "revert":
            revert(message.color_pallete);
            break;
    }
})

// borders
// hr
// visited links

function darken(color){
    var bg = document.querySelector("body");
    var ht = document.querySelector("html");

    var head = document.querySelector("head");
    var footer = document.querySelector("footer");
    var nav = document.querySelector("nav");

    var divs = document.querySelectorAll("div");
    var arts = document.querySelectorAll("article");
    var sects = document.querySelectorAll("section");
    var pres = document.querySelectorAll("pre");

    var h1 = document.querySelectorAll("h1");
    var h2 = document.querySelectorAll("h2");
    var h3 = document.querySelectorAll("h3");
    var h4 = document.querySelectorAll("h4");
    var h5 = document.querySelectorAll("h5");
    var h6 = document.querySelectorAll("h6");

    var th = document.querySelectorAll("th");
    var tr = document.querySelectorAll("tr");
    var ul = document.querySelectorAll("ul");
    var ol = document.querySelectorAll("ol");
    var li = document.querySelectorAll("li");

    var a = document.querySelectorAll("a");
    var p = document.querySelectorAll("p");
    var str = document.querySelectorAll("strong");
    var ita = document.querySelectorAll("i");
    var b = document.querySelectorAll("b");
    var c = document.querySelectorAll("cite");
    var s = document.querySelectorAll("span");
    var co = document.querySelectorAll("code");


    var hr = document.querySelectorAll("hr");
    // var b = document.querySelectorAll("button");
    

    bg.style.backgroundColor = color.med_background;
    ht.style.backgroundColor = color.med_background;

    bg.style.color = color.purple_p;

    head.style.backgroundColor = color.med_background;
    footer.style.backgroundColor = color.med_background;
    nav.style.backgroundColor = color.med_background;

    head.style.background = color.med_background;
    footer.style.background = color.med_background;
    nav.style.background =color.med_background;

    // backgrounds

    for(var i=0; i < divs.length; i++){
        divs[i].style.color = color.purple_p;
        divs[i].style.backgroundColor = color.med_background;
        if(divs[i].style.zIndex > 100){
            divs[i].style.backgroundColor = "transparent";
        }
    }

    for(var i=0; i < arts.length; i++){ 
        arts[i].style.color = color.purple_p;
        arts[i].style.backgroundColor = color.med_background;
    }

    for(var i=0; i < sects.length; i++){
        sects[i].style.color = color.blue_p;
        sects[i].style.backgroundColor = color.med_background;
    }

    for(var i=0; i < pres.length; i++){
        pres[i].style.color = color.red_h;
        pres[i].style.background = color.med_background;
    }

    // headers

    for(var i=0; i < h1.length; i++){
        h1[i].style.color = color.red_h;
    }

    for(var i=0; i < h2.length; i++){
        h2[i].style.color = color.blue_h;
    }

    for(var i=0; i < h3.length; i++){
        h3[i].style.color = color.purple_h;
    }

    for(var i=0; i < h4.length; i++){
        h4[i].style.color = color.green_h;
    }

    for(var i=0; i < h5.length; i++){
        h5[i].style.color = color.light_green_h;
    }

    for(var i=0; i < h6.length; i++){
        h6[i].style.color = color.yellow_h;
    }

    // tables & lists

    for(var i=0; i < th.length; i++){
        th[i].style.color = color.yellow_h;
        th[i].style.background = color.light_background;
    }

    for(var i=0; i < tr.length; i++){
        tr[i].style.color = color.red_h;
        tr[i].style.background = color.light_background;
    }

    for(var i=0; i < ul.length; i++){
        ul[i].style.color = color.yellow_h;
        ul[i].style.background = color.light_background;
    }

    for(var i=0; i < ol.length; i++){
        ol[i].style.color = color.blue_h;
        ol[i].style.background = color.light_background;
    }

    for(var i=0; i < li.length; i++){
        li[i].style.color = color.blue_h;
        li[i].style.background = color.light_background;
    }


    // text

    for(var i=0; i < a.length; i++){
        a[i].style.color = color.yellow_p;
        a[i].style.background = "transparent";
    }

    for(var i=0; i < p.length; i++){
        p[i].style.color = color.purple_p;
        p[i].style.background = "transparent";
    }

    for(var i=0; i < ita.length; i++){
        ita[i].style.color = color.purple_p;
        ita[i].style.background = "transparent";
    }

    for(var i=0; i < b.length; i++){
        b[i].style.color = color.purple_p;
        b[i].style.background = "transparent";
    }

    for(var i=0; i < str.length; i++){
        str[i].style.color = color.purple_p;
        str[i].style.background = "transparent";
    }

    for(var i=0; i < c.length; i++){
        c[i].style.color = color.blue_p;
        c[i].style.background = "transparent";
    }

    for(var i=0; i < s.length; i++){
        s[i].style.color = color.blue_p;
        s[i].style.background = "transparent";
    }

    for(var i=0; i < co.length; i++){
        co[i].style.color = color.code;
        co[i].style.background = "transparent";
    }

    // misc

    for(var i=0; i < hr.length; i++){
        hr[i].style.color = color.blue_p;
        hr[i].style.background = "transparent";
    }
}

function revert(){

}
