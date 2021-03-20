btn.addEventListener("click", f_out);
btn1.addEventListener("click", f_out1);
  function f_out (){
    console.log(v1.checked);
    console.log(v2.checked);
    console.log(v3.checked);
    console.log(v4.checked);

    if (v4.checked){
      right.classList.remove("hidden");
      wrong_div.classList.add("hidden");
    }else{
      right.classList.add("hidden");
      wrong_div.classList.remove("hidden");
    }
   
    
  }
  function f_out1 (){
    answer.classList.toggle("hidden");
    btn1.classList.toggle("opend");
  }