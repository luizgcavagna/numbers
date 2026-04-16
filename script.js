const form = document.querySelector("form");
const span = document.querySelector("#results p>span");
const resultsDiv = document.getElementById("results");
const resultDiv = document.getElementById("result");
const formDiv = document.getElementById("form-div");
const number = document.getElementById("number");
const of = document.getElementById("of");
const to = document.getElementById("to");
const checkbox = document.getElementById("checkbox");

let times = 1;

form.onsubmit = (event) => {
  event.preventDefault();

  const quantity = Number(number.value);
  const min = Number(of.value);
  const max = Number(to.value);

  if(min > max)
    return alert("De tem que ser menor do que até!")

  const results = draw(quantity, min, max);

  createItem(results);
}

function createItem(results) {
  formDiv.classList.add("display-none");
  resultsDiv.classList.remove("display-none");
  resultDiv.innerHTML = '';
  span.textContent = times;

  results.forEach((result) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.textContent = result;

    resultDiv.append(item);
  });

  times++;
}

function returnForm() {
  formDiv.classList.remove("display-none");
  resultsDiv.classList.add("display-none");
}

function draw(quantity, min, max){
  const results = [];

  while(quantity > 0){

    const result = mathRandom(min, max);

    if(Boolean(checkbox.value) === true && !results.includes(result)) 
      results.push(result);
      
    else if(Boolean(checkbox.value) === false) 
      results.push(result);
  
    quantity--;
  }

  return results;
}

function mathRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

checkbox.addEventListener('change', function() {
  if (this.checked) {
    checkbox.value = true;
  } else {
    checkbox.value = false;
  }
});