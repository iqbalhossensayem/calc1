const allBtns = document.querySelectorAll(".calc-btn");
const display = document.getElementById("display");

let values = "";

for (let i = 0; i < allBtns.length; i++) {
  const btns = allBtns[i];

  btns.addEventListener("click", () => {
    const btnValue = btns.innerText;
    if (btnValue == "C") {
      values = "";
    } else if (btnValue == "=") {
      values = calculateResult(values);

      // values = eval(values);
    } else if (btnValue == "←") {
      values = values.slice(0, -1);
    } else {
      values += btnValue;
    }

    display.value = values;
  });
}

function calculateResult(exp) {
  exp = exp.replace("×", "*").replace("÷", "/");

  exp = exp.replace(/(\d+)%/g, "($1/100)");

  let result = eval(exp);

  if (isNaN(result) || !isFinite(result)) {
    return "Error";
  }

  return result;
}
