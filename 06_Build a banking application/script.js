let accountHolderName = document.getElementById('user-name');
let amout = document.getElementById('amout');
let type = document.getElementById('type');
let message = document.getElementById('message');


let initialAmount = 0;
let name;
function done() {

  if(!accountHolderName.value || !amout.value ){
    alert("Fill form")
    return 
  }

  name = accountHolderName.value;

  if (type.value === "deposit") {
    initialAmount = initialAmount + parseInt(amout.value);

  };


  if (type.value === 'withdrawal') {
    if (initialAmount > 0) {
      initialAmount = initialAmount - parseInt(amout.value);
    } else {
      alert('Insufficient Balance')
    }
  };
  message.innerText = `Hey ${name}, Current Amout is ${initialAmount}`
};