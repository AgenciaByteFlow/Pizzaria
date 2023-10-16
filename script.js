
window.addEventListener('scroll', function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 50)
})

let show = true;
const menuContent = document.querySelector('#header');
const menuToggle = menuContent.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on',show);
    show = !show;
});