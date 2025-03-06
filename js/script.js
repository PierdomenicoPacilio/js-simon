let count = 10;
const timer = setInterval(function(){
    if (count > 0){
        document.getElementById('countdown').innerText = count;
        count = count -  1;
    } else{
        clearInterval(timer);
    };
},1000)
timer;