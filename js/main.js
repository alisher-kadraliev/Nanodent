// nav menu
let menuBtn = document.getElementById('menuBtn')
let subMenu = document.getElementById('subMenu')

function closeMenu() {
    subMenu.classList.remove('open')
    menuBtn.classList.remove('open')
}

menuBtn.addEventListener('mouseenter', () => {
    subMenu.classList.add('open')
    menuBtn.classList.add('open')
})

menuBtn.addEventListener('mouseleave', closeMenu)

subMenu.addEventListener('mouseenter', () => {
    menuBtn.classList.add('open')
    subMenu.classList.add('open')
})
subMenu.addEventListener('mouseleave', closeMenu)

// mobile
let mobileMenuBtn = document.getElementById('mobile-menu-btn')
let mobileMenu = document.getElementById('mobile-menu')

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('mb-open')
})
// mobile
let closeBtnNav = document.getElementById('closeBtnNav')
let mbContent = document.getElementById('mbContent')
let openBtnNav = document.getElementById('openBtnNav')
closeBtnNav.addEventListener('click', () => {
    mbContent.classList.remove('show')
})
openBtnNav.addEventListener('click', () => {
    mbContent.classList.add('show')
})
// nav menu end
