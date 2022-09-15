var initialprice = document.querySelector(".initial-price");
var quantityofstocks = document.querySelector(".quantity");
var currentprice = document.querySelector(".current-price");

var button = document.querySelector(".submit");
var output = document.querySelector(".output");
var container = document.querySelector(".container");

button.addEventListener("click",()=>{
    var initial = Number(initialprice.value);
    var quantity = Number(quantityofstocks.value);
    var current = Number(currentprice.value);

    if(initial<=0 && quantity<=0){
        container.style.backgroundColor = 'white';
        output.innerText = "Invalid inputs"
    }else if(quantity<=0){
        container.style.backgroundColor = 'white';
        output.innerText = "Invalid quantity"
    }else if(initial<=0){
        container.style.backgroundColor = 'white';
        output.innerText = "Invalid initial value"
    }
    else{
        var differenceinprices = current - initial ; 
        if(differenceinprices>0){
            var profit= differenceinprices;
            var profitpercentage = ((profit/initial)*100).toFixed(2)
            container.style.backgroundColor = 'green';
            output.innerText = "You got a profit of "+profit*quantity+" and the profit percentage is "+profitpercentage;
        }else if(differenceinprices===0){
            container.style.backgroundColor = 'white';
            output.innerText = "No profit No loss"
        }
        else{
            var loss= differenceinprices*-1;
            var losspercentage = ((loss/initial)*100).toFixed(2)
            container.style.backgroundColor = 'red';
            output.innerText = "You got a loss of "+loss*quantity+" and the loss percentage is -"+losspercentage;
        }
    }

    
})