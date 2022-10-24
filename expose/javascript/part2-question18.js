function printSecond()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printSecond, 1000);
