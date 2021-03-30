btn.addEventListener("click",f_loop2);
function f_loop2() {
    a = in1.value;
    b = in2.value;
    c = in3.value;
    d = in4.value;
    let m = [a,b,c,d]
    for (let i=1;i<4;i++){
        max = Math.max.apply(null,m);
        min = Math.min.apply(null,m);
    }
    answer1.innerHTML = "Максимум: "+ max;
    answer2.innerHTML = "Минимум: "+min;
}