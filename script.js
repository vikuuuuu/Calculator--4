let input = document.getElementById("inputbtn");
let buttons = document.querySelectorAll(".colbtn");
let string = "";
let arr = Array.from(buttons);
arr.forEach((colbtn) => {
  colbtn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
function calculatorAge() {
  let dobInput = document.getElementById("dobInput").value;
  let refInput = document.getElementById("refInput").value;

  let dobDate = new Date(dobInput);
  let refDate = new Date(refInput);

  let diff = refDate - dobDate;

  let years = refDate.getFullYear() - dobDate.getFullYear();
  let months = refDate.getMonth() - dobDate.getMonth();
  let days = refDate.getDate() - dobDate.getDate();

  if (days < 0) {
    months--;
    let tempDate = new Date(refDate.getFullYear(), refDate.getMonth(), 0);
    days += tempDate.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  let result = document.getElementById("ageResult");
  result.innerHTML = `<p>Age : ${years} Years, ${months} Months, ${days} Days</p>`;
}

let calculatorButton = document.querySelector(".check-dob-btn");
calculatorButton.addEventListener("click", calculatorAge);
