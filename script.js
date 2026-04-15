const form = document.querySelector("form");
const number = document.getElementById("number");
const of = document.getElementById("of");
const to = document.getElementById("to");

form.onsubmit = (event) => {
  event.preventDefault();

  const quantity = Number(number.value);
  const min = Number(of.value);
  const max = Number(to.value);
  
  if(!quantity || !min || !max )
    return alert("Os dados precisam ser preenchidos!");

  if(min > max)
    return alert("De tem que ser menor do que até!")

  const results = draw(quantity, min, max);
  console.log(results);
}

function draw(quantity, min, max){
  let results = [];

  while(quantity > 0){

    let result = mathRandom(min, max);

    if(!results.includes(result)) {
      results.push(result);
      quantity--;
    } 
  }

  return results;
}

function mathRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}