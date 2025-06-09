let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let message = document.getElementById('message');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {

  if (!password.value || !confirmPassword.value) {
    message.innerText = "Please Enter Password First."
    message.style.color= "red"
    message.style.fontSize= "20px"
    return
  }


  if (password.value === confirmPassword.value) {
    message.innerText = "Valid Password."
    message.style.color = "green"
  } else {
    message.innerText = "Not Valid Password."
    message.style.color = "red"
  }
})