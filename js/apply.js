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

  const promoDocumet = document.getElementById(namer'-code');
  promoDocumet.value= 'stevekaku';
  if(promoDocumet.value == 'stevekaku'){
    let conditional = totalbox/20;
    let semiConditional = totalbox - conditional ;
    saveallTotal.innerText = semiConditional;
  }
  else{
    return totalbox;
  }

}


document.getElementById('money-cost-btn2').addEventListener('click',function(){
    let moneyLon = internal('rising1',180);    
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
document.getElementById('promo-btn').addEventListener('click',function(){
    let moneyLon = internal('promo-code');
})
