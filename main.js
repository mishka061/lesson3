document.querySelector("#one").innerHTML =
  "<h1>Мы взаимодействуем с html через js</h1>"; //обращение по id
document.querySelector("p").innerHTML = "Акуна Матата"; // изменяет первый селектор <p>

let inPut = document.querySelector(".text"); //обращение по классу
let btn = document.querySelector(".check-in");
let div = document.querySelector(".out");

btn.onclick = function () {
  console.log("Клик!");
  console.log(+inPut.value); // + переводит в числовые значения
  let e = inPut.value;
  div.innerHTML = e; // с помощью innerHTML добавляем в div переменную е
};

let num = prompt("Введите число");
if (num > 100) {
  alert("Вы ввели число" + num);
} else {
  console.log("Вы ввели число " + num);
}
