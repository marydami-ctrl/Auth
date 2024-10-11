
function checkScreenSize() {
    const width = window.innerWidth;

    if (width <= 480) {
        console.log("You are on a small mobile screen.");
        
        document.querySelector('.login-wrapper').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    } else if (width <= 768) {
        console.log("You are on a tablet-sized screen.");
        document.querySelector('.login-wrapper').style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    } else {
        document.querySelector('.login-wrapper').style.backgroundColor = 'transparent';
    }
}


window.addEventListener('resize', checkScreenSize);


checkScreenSize();
