btn.addEventListener("click",f_loop3);
function f_loop3() {
    sum1 = 0;
    sum2 = 0;
    sum3 = 0;
    n = in1.value;
    for (let i = 1; i<=n; i++){
        sum1 = sum1+i;
    }
    answer1.innerHTML = "Сумма первых n натуральных чисел: "+sum1;
    for (let j = 1; j<=n; j++){
        if(j%2==0){
            sum2 = sum2+j;
        }
    }
    answer2.innerHTML = "Сумма первых n четных чисел: "+sum2;
    for (let k = 1; k<=n; k++){
        if(k%2!=0){
            sum3 = sum3+k;
        }
    }
    answer3.innerHTML = "Сумма первых n нечетных чисел: "+sum3;
}