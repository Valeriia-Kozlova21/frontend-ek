btn.addEventListener("click",f_loop1);
function f_loop1() {
    a = in1.value;
    b = in2.value;
    let sum = 0;
    let mult = 1;

    if ((a<1) || (a>20)){
        p_a = 1;
    }
        else {
            p_a = 0;
        }
    if ((b<1)||(b>20)){
        p_b = 1;
    }
        else {
            p_b = 0;
        }


    if ((p_a == 1)&&(p_b == 0)) {
        alert ("Ошибка! Число А не принадлежит интервалу [1;20]");
    }
    if ((p_a == 0)&&(p_b == 1)) {
        alert ("Ошибка! Число В не принадлежит интервалу [1;20]");
    }
    if ((p_a == 1)&&(p_b == 1)) {
        alert ("Ошибка! Числа А и В не принадлежат интервалу [1;20]");
    }

    if ((p_a == 0)&&(p_b == 0)) {
        if (in1.value <= in2.value){
            for(let i=a;i<=b;i++){
                sum += Number(i);
                mult = mult*Number(i);
                answer.innerHTML = "Сумма: "+sum + "<br>Произведение: "+mult;
            }
        }
        else {
            for(let j=b;j<=a;j++){
                sum += Number(j);
                mult = mult*Number(j);
                answer.innerHTML = "Сумма: "+sum + "<br>Произведение: "+mult;
            }
        }
    }
}