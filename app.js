function circleBar(elemId,percent){
    let elem=document.getElementById(elemId);
    let circle=elem.querySelectorAll('circle');
    let r=circle[0].getAttribute('r');
    let circum=2*Math.PI*r;
    let offset=circum - (circum*percent / 100);
    circle[1].style.setProperty('--offset',offset); 
}
circleBar('elem1',25);