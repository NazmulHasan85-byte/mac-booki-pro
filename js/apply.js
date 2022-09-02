// function internal(namer,money,){
//   let allInput =  document.getElementById(namer+'-cost');
//   let inputer =parseFloat(allInput.innerText) ;
//   let condition = inputer + money;
//   allInput.innerText = condition;

//   let allTotal = document.getElementById('intotal-cost');
//   let TOtalAll =allTotal.innerText;
//   let incase = (parseFloat(allTotal.innerText));
   

//   let saveallTotal = document.getElementById('total2-cost');
//   let TOtalAllcash =saveallTotal.innerText;
//   let conditionalcash = (parseFloat(saveallTotal.innerText))
//   let intotal = incase + condition ;
//   saveallTotal.innerText = intotal; 

//  let tax = document.getElementById('rising4-cost')
//   let totaltax = parseFloat (tax.innerText)
//   let subTotaltax = condition /10;
//   tax.innerText =subTotaltax;
  

// }

// document.getElementById('money-cost-btn2').addEventListener('click',function(){
//     let moneyLon = internal('rising1',180);    
// })
// document.getElementById('money-cost-btn4').addEventListener('click',function(){
//     let moneyLon = internal('rising2',265);    
// })
// document.getElementById('money-cost-btn5').addEventListener('click',function(){
//     let moneyLon = internal('rising2',470);    
// })
// document.getElementById('money-cost-btn7').addEventListener('click',function(){
//     let moneyLon = internal('rising3',50);
// })



function internal(namer,money,){
  let allInput =  document.getElementById(namer+'-cost');
  let inputer =parseFloat(allInput.innerText) ; 
    let condition = inputer + money;
  allInput.innerText = condition;
  
  let tax = document.getElementById('rising4-cost')
  let totaltax = (parseFloat (tax.innerText));
  let subTotaltax = money / 10;
  let totaltaxto = subTotaltax + totaltax;
  tax.innerText = totaltaxto;

  let saveallTotal = document.getElementById('total2-cost');
  let conditionalcash = (parseFloat(saveallTotal.innerText))
  let intotal = conditionalcash + money;
  let totalbox = totaltaxto + intotal;
  saveallTotal.innerText = totalbox;  
  

}


document.getElementById('money-cost-btn2').addEventListener('click',function(){
    let moneyLon = internal('rising1',180); 
    // let conduction = intotal + moneyLon;   
})
document.getElementById('money-cost-btn4').addEventListener('click',function(){
    let moneyLon = internal('rising2',265);    
})
document.getElementById('money-cost-btn5').addEventListener('click',function(){
    let moneyLon = internal('rising2',470);    
})
document.getElementById('money-cost-btn7').addEventListener('click',function(){
    let moneyLon = internal('rising3',50);
})
