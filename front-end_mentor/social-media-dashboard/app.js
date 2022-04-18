let inner =  document.querySelector('.switch-inner');
let outer = document.querySelector('.switch-outer');
inner.addEventListener('click',function(e){
    e.target.classList.toggle('dark');
    outer.classList.toggle('dark');
})
