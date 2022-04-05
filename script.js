const errorIcon = document.querySelectorAll('.errorIcon');
const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.btnSubmit');
const errorText = document.querySelectorAll('.errorText');

errorIcon.forEach(icon => icon.style.display ='none');
errorText.forEach(text => text.style.display = 'none');

submitBtn.addEventListener('click',function(){
    if(firstname.value === ""){
        errorIcon.item(0).style.display ='block';
        errorText.item(0).style.display ='block';
    }
    else{
        errorIcon.item(0).style.display ='none';
        errorText.item(0).style.display ='none';
    }

    if(lastname.value === ""){
    errorIcon.item(1).style.display ='block';
    errorText.item(1).style.display ='block';
    }
    else{
        errorIcon.item(1).style.display ='none';
        errorText.item(1).style.display ='none';
    }

    if(email.value === ""){
        errorIcon.item(2).style.display ='block';
        errorText.item(2).style.display ='block';
    }
    else{
        errorIcon.item(2).style.display ='none';
        errorText.item(2).style.display ='none';
    }

    
    if(password.value === ""){
        errorIcon.item(3).style.display ='block';
        errorText.item(3).style.display ='block';
    }
    else{
        errorIcon.item(3).style.display ='none';
        errorText.item(3).style.display ='none';
    }
})

