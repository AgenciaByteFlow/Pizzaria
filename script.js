window.sr = ScrollReveal({ reset:true });

sr.reveal('.conteudo-principal', {duration:2000})
sr.reveal('.main', {duration:3000})
sr.reveal('.text-cardapio', {duration:1000})
sr.reveal('.itens-cardapio', {duration:1000})
sr.reveal('.contatos', {duration:3000})


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