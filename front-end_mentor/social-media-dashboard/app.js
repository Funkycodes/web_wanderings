let inner =  document.querySelector('.switch-inner');
let outer = document.querySelector('.switch-outer');
let card = document.querySelectorAll('.card');
let body = document.querySelector('body');
let title = document.querySelector('.title');
outer.addEventListener('click',function(e){
    e.currentTarget.classList.toggle('dark');
    inner.classList.toggle('dark');
    body.classList.toggle('dark');
    card.forEach(item =>{
        item.classList.toggle('dark');
    })
    title.classList.toggle('dark');
})
