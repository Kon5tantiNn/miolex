document.addEventListener('DOMContentLoaded', function() {
    let block1 = document.querySelector('.block');
    let block3 = document.querySelector('.block3');
    let sideNavLeft = document.querySelector('.side-nav-left');
    let sideNavRight = document.querySelector('.side-nav-right');
    
    block1.addEventListener('click', function() {
        sideNavLeft.classList.toggle('visible');
    });

    block3.addEventListener('click', function() {
        sideNavRight.classList.toggle('visible')
    });

    document.addEventListener('click', function(event) {
        if(!sideNavLeft.contains(event.target) && sideNavLeft.style.display === 'flex') {
            sideNavLeft.classList.remove('visible')
        }
        if(!sideNavRight.contains(event.target) && sideNavRight.style.display === 'flex') {
            sideNavRight.classList.remove('visible')
        }
    })
})