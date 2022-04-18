/**
 * Variable Declaration
 */
let percentageBtn = document.querySelectorAll('.percentage-button')
let peopleInput = document.querySelector('.people-input');
let billAmt = document.querySelector('#bill-amount-input');
let activeBtnval=0;
let tip = document.querySelector('#tip');
let total = document.querySelector('#total');
let customBtn = document.querySelector('.custom-button');
let resetBtn = document.querySelector('#reset');
/**
 * Function Declaration
 */
    function calculate(){
        let ace =billAmt.value/peopleInput.value
        let tips = billAmt.value/peopleInput.value*activeBtnval;
        tip.innerText = tips;
        total.innerText =ace + tips;
    }
percentageBtn.forEach(btn =>{
    btn.addEventListener('click', function(e){
        /*
         * Remove active from the present holder by sweeping through array
         */
        percentageBtn.forEach(function(btns){
            btns.classList.remove('active');
        })
        e.target.classList.toggle('active');
        activeBtnval = e.target.value;
        calculate();
    })
})
customBtn.addEventListener('input',e=> {
    percentageBtn.forEach(function(btns){
        btns.classList.remove('active');
    })
    activeBtnval=customBtn.innerText/100;
    calculate();
})
billAmt.addEventListener('input', e=>{
  billAmt.value = e.target.value;
  calculate();
});
peopleInput.addEventListener('input', e=>{
  peopleInput.value = e.target.value;
  calculate();
})
resetBtn.addEventListener('click', function(){
    peopleInput.value=0;
    billAmt.value=0;
    total.innerText=0;
    tip.innerText=0;
    percentageBtn.forEach(function(btn){
        btn.classList.remove('active');
    })
})
