var initialprice = document.querySelector(".initial-price");
var quantityofstocks = document.querySelector(".quantity");
var currentprice = document.querySelector(".current-price");

var button = document.querySelector(".submit");
var output = document.querySelector(".output");

button.addEventListener("click",()=>{
    var initial = Number(initialprice.value);
    var quantity = Number(quantityofstocks.value);
    var current = Number(currentprice.value);

    var differenceinprices = current - initial ; 
    if(differenceinprices>0){
        var profit= differenceinprices;
        var profitpercentage = (profit/initial)*100
        output.innerText = "You got a profit of "+profit*quantity+" and the profit percentage is "+profitpercentage;
    }else{
        var loss= differenceinprices*-1;
        var losspercentage = (loss/initial)*100
        output.innerText = "You got a loss of "+loss*quantity+" and the loss percentage is -"+losspercentage;
    }

    //console.log(initial.value,quantity.value ,current.value);
    // output.innerText = "anni ochai le";
})