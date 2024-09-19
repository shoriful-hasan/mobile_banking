document.getElementById('btn-login')
      .addEventListener('click',function(event){
        event.preventDefault()
        console.log('form are sumitted');
        const ph_login = document.getElementById('ph-login').value;
        const pas_login = document.getElementById('pas-login').value;
        console.log(ph_login,pas_login);

    if(ph_login === '01753639166' && pas_login === '2635'){

       window.location.href = 'home.html'

        console.log('you are the validate user');
        
    }
        else{
            alert('did not match the phone and  password')
        }
        
      })
