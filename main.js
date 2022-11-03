// ---
const hamMenuBtn = document.querySelector('.nav-menu-icon')
const smallMenu = document.querySelector('.nav-menu')
const menuIcon = document.querySelector('.ham')
const headerSmallMenuLinks = document.querySelectorAll('.menu-link')

hamMenuBtn.addEventListener('click', () => {
    if (smallMenu.classList.contains('menu-active')) 
    {
        smallMenu.classList.remove('menu-active')
    } 
    else 
    {
        smallMenu.classList.add('menu-active')
    }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) 
{
    headerSmallMenuLinks[i].addEventListener('click', () => {
        smallMenu.classList.remove('menu-active')
        menuIcon.classList.remove('active')

    })
}

// // ---
// const headerLogoConatiner = document.querySelector('.header__logo-container')

// headerLogoConatiner.addEventListener('click', () => {location.href = '/'});