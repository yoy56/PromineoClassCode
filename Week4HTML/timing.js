const tock = new Event('tick');


setInterval(function(){ 
    document.dispatchEvent(tock);
}, (50));