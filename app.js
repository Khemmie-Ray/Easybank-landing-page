const mobileBtn = document.querySelector('#mobile-btn');
const menuList = document.querySelector('#menulist');
const closeBtn = document.querySelector('#closebtn');
const mainElement = document.getElementById('mainE')

mobileBtn.addEventListener('click', showNav)
closeBtn.addEventListener('click', hideNav)


function showNav () {
    menuList.style.display = 'block'
    mobileBtn.style.display = 'none'
    closeBtn.style.display = 'block'
    mainElement.style.background = "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.6))";
}

function hideNav () {
    menuList.style.display = 'none'
    mobileBtn.style.display = 'block'
    closeBtn.style.display = 'none'
    mainElement.style.background = "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0))";
}

