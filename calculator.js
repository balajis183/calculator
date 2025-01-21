let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let choice = document.getElementById("choice");

function handleSubmit() {
  event.preventDefault();
  let val1 = parseInt(num1.value);
  let val2 = parseInt(num2.value);
  let choices = parseInt(choice.value);

  // console.log(typeof val1);
  // console.log(typeof val2);
  // console.log(typeof choices);

  switch (choices) {
    case 1:
      add(val1, val2);
      break;

    case 2:
      sub(val1, val2);
      break;

    case 3:
      mul(val1, val2);
      break;

    case 4:
      div(val1, val2);
      break;

    case 5:
      rem(val1, val1);
      break;

    default:
      document.write("Invalid choice");
      break;
  }

  function add(a, b) {
    let r = a + b;
    ans.innerHTML = r;
  }

  function sub(a, b) {
    let r = a - b;
    ans.innerHTML = r;
  }
  function mul(a, b) {
    let r = a * b;
    ans.innerHTML = r;
  }

  function div(a, b) {
    let r = a / b;
    ans.innerHTML = r;
  }
  function rem(a, b) {
    let r = a % b;
    ans.innerHTML = r;
  }
}
