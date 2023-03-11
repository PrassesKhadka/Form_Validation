//Validating Forms using JS->Building coutomized error messages
const form=document.querySelector('form')
const mail=document.querySelector('#mail')
const error_message=document.querySelector('.error-message')

mail.addEventListener('input',(e)=>{
    if(mail.validity.valid)
    {
       error_message.textContent='' 
    }
    else
    {
        showError()
    }
})

function showError()
{
    if(mail.validity.typeMismatch)
    {
        error_message.textContent='Not an email!!!'
        error_message.classList.add('show-error')
    }
}
