// const textboxes = document.querySelectorAll(".textbox")
// let height = 0;
// let weight =0; 
// textboxes.forEach( (box) => {
//     box.addEventListener("input" , (e) =>{
//         if(e.target.id === "height")
//             {
//                 height = e.target.value; 
//             }
//         else
//             {
//                 weight = e.target.value;
//             }
//     } )
// })

// const calculateButton = document.querySelector("button");
// const result = document.getElementById("result");
// let bmi =0;
// calculateButton.addEventListener("click", (e) => {
//     bmi = weight / (height*height);
//     console.log(bmi)
//     result.innerHTML = bmi;
// })

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.qu  erySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
