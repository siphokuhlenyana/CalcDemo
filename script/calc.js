let buttons =document.getElementsByTagName('button')
let input= document.querySelector('[data-input]')
let Clear=document.querySelector('[value="AC"]')
let Percent=document.querySelector('[value="%"]')
let Decimal=document.querySelector('[value="."]')
let button4=document.querySelector('[(value="9"]')
let button5=documen.querySelector('[value="8"]')
let button6=document.querySelector('[value="7"]')
let button7=document.querySelector('[value="6"]')
let button8=document.querySelector('[value="5"]')
let button9=document.querySelector('[value="4"]')
let button10=document.querySelector('[value="3"]')
let button11=document.querySelector('[value="2")]')
let button12=document.querySelector('[value="1"]')
let button13=document.querySelector('[value="0"]')
let multiply=document.querySelector('[value="*"]')
let divide=document.querySelector('[value="/"]')
let substract=document.querySelector('[value="-"]')
let add=document.querySelector('[value="+"]')
let results=document.querySelector('[value="="]')


    
Clear.addEventListener('click',()=>{
    input.value.innerContent=""
})



Percent.addEventListener('click',()=>{
    modulus()
    input.value = button2.value
})



Decimal.addEventListener('click',()=>{
    input.value = decimal.value
})


button4.addEventListener('click',()=>{
    input.value += button4.value
})


button5.addEventListener('click',()=>{
    input.value += button5.value
})


button6.addEventListener('click',()=>{
    input.value += button6.value
})


button7.addEventListener('click',()=>{
    input.value += button7.value
})


button8.addEventListener('click',()=>{
    input.value += button8.value
})


button9.addEventListener('click',()=>{
    input.value += button9.value
})


button10.addEventListener('click',()=>{
    input.value += button10.value
})


button11.addEventListener('click',()=>{
    input.value += button11.value
})


button12.addEventListener('click',()=>{
    input.value += button12.value
})


button13.addEventListener('click',()=>{
    input.value += button13.value
})


multiply.addEventListener('click',()=>{
    multiplication()
})


divide.addEventListener('click',()=>{
  
})

substract.addEventListener('click',()=>{
    substraction()
    
})

add.addEventListener('click',()=>{
    addition()
})

results.addEventListener('click',()=>{
    substraction()
    addition()
    substraction()
    division()
    percentage()
})


function percentage(){
    input.value= (buttons.value /buttons.value)*100
}

function addition (){
    input.value =eval(buttons.value + buttons.value)
}
function substraction(){
    input.value =buttons.value - buttons.value
}
function division(){
      input.value = buttons.value/buttons.value
}
function multiplication(){
    input.value =buttons.value*buttons.value
}












// button1.addEventListener("click",Clear)
// button2.addEventListener("click",Modulus)
// button3.addEventListener("click",Dot)
// button4.addEventListener("click",clickNine)
// button5.addEventListener("click",clickEight)
// button6.addEventListener("click",clickSeven)
// button7.addEventListener("click",ClickSix)
// button8.addEventListener("click",ClickFive)
// button9.addEventListener("click",ClickFour)
// button10.addEventListener("click",ClickThree)
// button11.addEventListener("click",ClickTwo)
// button12.addEventListener("click",ClickOne)
// button13.addEventListener("click",ClickZero)
// button14.addEventListener("click",function)
// button15.addEventListener("click",function)
// button16.addEventListener("click",function)
// button17.addEventListener("click",function)
// button18.addEventListener("click",function)


// function Clear(){
//   input.value =button1.value;
// }
// function Modulus(){
//     input.value =button2.value;
//   }
//   function Dot(){
//     input.value =button3.value;
//   }
//   function clickNine(){
//     input.value +=button4.value;
//   }
  
//   function clickEight(){
//     input.value +=button5.value;
//   }
  
//   function clickSeven(){
//     input.value +=button6.value;
//   }
  
//   function ClickSix(){
//     input.value +=button7.value;
//   }
  
//   function ClickFive(){
//     input.value +=button8.value;
//   }
  
//   function ClickFour(){
//     input.value +=button9.value;
//   }
  
//   function ClickThree(){
//     input.value +=button10.value;
//   }
  
//   function ClickTwo(){
//     input.value +=button11.value;
//   }
  
//   function ClickOne(){
//     input.value +=button12.value;
//   }
//   function ClickZero(){
//     input.value +=button13.value;
//   }
//   function multiply(){
//       input.value buttons.value
//   }
//    function divide(){
//     input.value
//    }
  





