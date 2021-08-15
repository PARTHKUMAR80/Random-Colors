let btn=document.getElementById('change');
let text=document.getElementById('color');
let generator=function(){
    newColor='#'+(Math.random()*0xFFFFFF<<0).toString(16);
    console.log(newColor);
    if (newColor.length<7){
        generator();
    }
    return newColor;
}
btn.addEventListener('click',function(){
    generator();
    document.body.style.background=newColor;
    btn.style.color=newColor;
    text.innerText=newColor;
})