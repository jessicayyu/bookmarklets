javascript: (function() {  
    let ele = document.querySelector('.top-matter');
    let title = ele.querySelector('a.title').innerHTML;
    let url = window.location.href;
    let date = ele.getElementsByTagName('time')[0].dateTime;
    let dateOptions = {month: 'short', day: 'numeric', year: 'numeric'};
    date = new Date(date);
    date = date.toLocaleDateString('en-US', dateOptions);
    let output = `[${title}](${url}) - ${date}`;
    let target = document.querySelector('.commentarea .md textarea');
    if (target) {
        target.value = output;  
    } else {
        const ele = document.createElement('textarea');
        ele.value = output;
        document.body.appendChild(ele);
        ele.select();
        document.execCommand('copy');
        document.body.removeChild(ele);
    }
}())