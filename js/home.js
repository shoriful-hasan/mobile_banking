

document.getElementById('add_mony_input')
                .addEventListener('click',function(event){
                    event.preventDefault();
    const Amount_input = parseFloat(document.getElementById('Amount_input').value);

    const pinNumber_input = document.getElementById('pinNumber_input').value;

    const amount_blance = parseFloat( document.getElementById('amount_blance').innerText);





  if(pinNumber_input === '12345'){
    const Blance = Amount_input + amount_blance ;
    document.getElementById('amount_blance').innerHTML = Blance;
    console.log(Blance);
  }
   else{
    alert('did not match')
    
   }
    
    
    

})


document.getElementById('cash_out_input').addEventListener()
