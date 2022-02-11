document.addEventListener('mousemove', function(e){
    console.log(e);
    let x = e.pageX;
    let y = e.pageY;
    console.log(x, y);
    
    let rgbX = (x/window.innerWidth) * 255;
    let rgbY = (y/window.innerHeight) * 255;

    let body = document.querySelector('body')
    body.style.backgroundColor = `rgb(${rgbX}, 0, ${rgbY})`;
})


