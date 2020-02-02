javascript: (function() {
    let url = new URL(window.location.href);
    let paste;
    let matchStr = url.pathname;
    let host = url.hostname;
    if (host.indexOf("amazon") > 0) {
        matchStr = matchStr.split('/dp/')[1].match(/\w{10}/)[0];
        paste = "https://amzn.com/" + matchStr;
    } else if (host.indexOf("ebay") > 0) {
        matchStr = matchStr.split('/');
        matchStr = matchStr[matchStr.length - 1];
        paste = "https://ebay.com/itm/" + matchStr;
    } else if (host.indexOf("reddit.com") > 0) {
        matchStr = matchStr.split('/comments/')[1].match(/\w{6}/)[0];
        paste = "https://redd.it/" + matchStr;
    }
    const ele = document.createElement('textarea');
    ele.value = paste;
    document.body.appendChild(ele);
    ele.select();
    document.execCommand('copy');
    document.body.removeChild(ele);
}())
