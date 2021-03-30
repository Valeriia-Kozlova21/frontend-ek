btn.addEventListener("click",f_loop4);
function f_loop4() {
    t = in1.value;
    i = in2.value;
    p = in3.value;

    if(t<=0||p<=0||i<=0||i>100) {
        alert("Ошибка ввода!")
    }

    for (let j = 1; j<=t; j++) {
        a = Math.round(p*(1+(i/100))**j);
    }
    answer.innerHTML = "Получаемая сумма: "+a;
}