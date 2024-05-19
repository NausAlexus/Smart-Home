// Задаём стили времени
document.querySelector(".time").style.margin = "18px 0 0 16px";
document.querySelector(".time").style.fontSize = "22px";

// Задаём стили верхнему меню
document.querySelector(".list").innerHTML = `
<div class="list1">Room</div>
<div class="list2">All</div>`;
document.querySelector(".list").style.marginTop = "24px";
document.querySelector(".list1").style.width = "180px";
document.querySelector(".list1").style.height = "50px";
document.querySelector(".list1").style.borderRadius = "30px";
document.querySelector(".list1").style.fontSize = "18px";
document.querySelector(".list1").style.cursor = "pointer";
document.querySelector(".list2").style.width = "180px";
document.querySelector(".list2").style.height = "50px";
document.querySelector(".list2").style.borderRadius = "30px";
document.querySelector(".list2").style.fontSize = "18px";
document.querySelector(".list2").style.cursor = "pointer";

// Задаём стили меню
document.querySelector(".menu").style.width = "430px";
document.querySelector(".menu").style.height = "93px";
document.querySelector(".menu").style.backgroundColor = "white";
document.querySelector(".menu").style.marginTop = "29px";
document.querySelector(".menu").style.borderRadius = "20px 20px 0 0";