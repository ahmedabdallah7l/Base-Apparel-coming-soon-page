const emailAdress = document.getElementById("emailAdress")
const submit = document.querySelector("#submit")
const error = document.querySelector(".error")
const errorMessage = document.querySelector(".errorMessage")
emailAdress.addEventListener("keyup", function()
{
    if (validation()===true)
    {
      error.style.display="none"
      errorMessage.style.display="none"
      submit.style.pointerEvents="auto"
      submit.addEventListener("click",()=>
      {
         alert("done")
      })

    }
    else
    {
        error.style.display="block"
        errorMessage.style.display="block"
        submit.style.pointerEvents="none"
    }
    
})



function validation ()
{
    let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(regex.test(emailAdress.value))
    {
        return true
    }
    else
    return false
}