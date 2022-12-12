const btnNums=document.querySelectorAll(".btn-num")
const btnOperations=document.querySelectorAll(".btn-operation")
const btnReset=document.querySelector(".btn-reset")
const btnDot=document.querySelector(".btn-dot")
const btnResult=document.querySelector(".btn-result")
let result=document.querySelector("#result")

btnNums.forEach(btnNum =>{
      btnNum.addEventListener("click",function(){
    let firstElement=result.innerHTML[0]
    console.log(firstElement)
      if((isNaN(firstElement)) || firstElement==0){
        result.innerHTML=""
      }
        result.innerHTML+=btnNum.value 
      })   

})

btnOperations.forEach(btnOperation=>{
   btnOperation.addEventListener("click",function(){
    let lastElement=result.innerHTML[result.innerHTML.length-1]
    console.log(lastElement)
    if(!isNaN(lastElement)){
        result.innerHTML+= btnOperation.value;
    }else{
        result.innerHTML = result.innerHTML.slice(0, -1) + btnOperation.value;
    }
   })
   
})

btnReset.addEventListener("click",function(){
    result.innerHTML=""
})
btnDot.addEventListener("click",function(){
    let lastElement=result.innerHTML[result.innerHTML.length-1]
    if(lastElement!="."){
          result.innerHTML+=btnDot.value
    }

})

btnResult.addEventListener("click",function(){
    let lastElement=result.innerHTML[result.innerHTML.length-1]
    if(isNaN(lastElement)){
        result.innerHTML = result.innerHTML.slice(0, -1)
    }else{
       if( eval(result.innerHTML) % 1 !=0){
        result.innerHTML=eval(result.innerHTML).toFixed(2)
       }else{
        result.innerHTML=eval(result.innerHTML)
       }
    }

})
