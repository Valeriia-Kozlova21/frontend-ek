btn.addEventListener("click", func_out);

  function func_out (){
      DPR = Number(in2.value) / Number(in1.value)
      A = 1 - DPR
      ROE = Number(in3.value) / 100
      result.innerHTML ="g = " + A * ROE
  }

