 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');
 const password2 = document.getElementById('password2');

 form.addEventListener('submit', checkInputs)

 function checkInputs(e){
     e.preventDefault();
     const usernameValue = username.value;
     const emailValue = email.value;
     const passwordValue = password.value;
     const passwordValue2 = password2.value;

     if(usernameValue === ''){
         setErrorFor(username, "username cannot be blank");
     } else{
         setSuccessFor(username);
     }

     if(emailValue === ''){
         setErrorFor(email, "email cannot be blank");
     }else if(!isEmail(emailValue)){
         setErrorFor(email, 'Email is not valid')
     }else{
         setSuccessFor(email);
     }

     if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}


    if(passwordValue2 === ''){
        setErrorFor(password2, "passport cannot be empty")
    } else if(passwordValue !== passwordValue2){
        setErrorFor(password2, 'passwords does not match')
    }else{
        setSuccessFor(password2);
    }
}

 function setErrorFor(input, message){
     const singleContainer = input.parentElement;
     const small = singleContainer.querySelector('small');

     small.innerText = message;

     singleContainer.className = 'singleContainer error';
 }

 function setSuccessFor(input){
     const singleContainer = input.parentElement;
     singleContainer.className = 'singleContainer success';
 }

 function isEmail(email){
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
 }
 function isPassword(password){
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(password);
 }