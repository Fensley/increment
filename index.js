const counters = document.querySelectorAll(".counter");
counters.forEach(number=>{
  number.innerText= '0';

  const updatenumber =()=>{
    const target = +number.getAttribute('dat-target')
    const c = +number.innerText
     
    const increment = target /200
    if(c < target) {
      number.innerText =`${Math.ceil(c + increment)}`
      setTimeout(updatenumber,1)
    }else{
    number.innerText= target
    }
    
  } 
   updatenumber()
})
