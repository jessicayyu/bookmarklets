javascript: (function() {  
    let ele = document.querySelector('.top-matter');
    let author = ele.querySelector('.author').innerHTML;
    let flair = ele.querySelector('.flair').innerHTML;
    let output = `${author} | ${flair}`;
    document.querySelector('.commentarea .md textarea').value = output;
}())