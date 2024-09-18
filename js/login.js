document.getElementById('btn-login')
      .addEventListener('click',function(event){
        event.preventDefault()
        console.log('form are sumitted');
        const ph_login = document.getElementById('ph-login').value;
        const pas_login = document.getElementById('pas-login').value;
        console.log(ph_login,pas_login);
        
        
      })
