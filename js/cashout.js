

document.getElementById('cash_out_input').addEventListener('click',function(event){
    event.preventDefault();
const cashout_balance = parseFloat( document.getElementById('cashout_balance').value);
const cashout_pin = document.getElementById('cashout_pin').value;

const amount_blance = parseFloat(document.getElementById('amount_blance').innerText);



if(cashout_pin === '12345'){
    const Blance =  amount_blance -cashout_balance  ;
    document.getElementById('amount_blance').innerHTML = Blance;
    console.log(Blance);
  }
   else{
    alert('did not match')
    
   }
    

    
})


document.getElementById('cash_out_btn').addEventListener('click',function(){
    const cash_out_form = document.getElementById('cash_out_form');
    cash_out_form.classList.remove('hidden');
    const cash_in_form = document.getElementById('cash_in_form');
    cash_in_form.classList.add('hidden')
})

document.getElementById('add_money_btn').addEventListener('click',function(){
    const cash_out_form = document.getElementById('cash_out_form');
    cash_out_form.classList.add('hidden');
    const cash_in_form = document.getElementById('cash_in_form');
    cash_in_form.classList.remove('hidden')
})

