const initialPrice = document.querySelector("#initial-price");
const stockQuantity=document.querySelector("#quantity-stock");
const currentPrice = document.querySelector("#current-price");
const btn = document.querySelector("#btn");
const outputEl = document.querySelector("#output");
btn.addEventListener("click",validate);

function validate(){
    if(initialPrice.value.length == 0){
        alert("its empty");
    }
    if(stockQuantity.value.length == 0){
        alert("its empty");
    }
    if(currentPrice.value.length == 0){
        alert("its empty");
    }
    if(initialPrice.value.length != 0 && stockQuantity.value.length != 0 && currentPrice.value.length != 0)
    {
        submitHandler();
    }
}

function submitHandler(){
    var ip =Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var cp = Number(currentPrice.value);
    
    calculateProfitAndLoss(ip,qty,cp);
}
function calculateProfitAndLoss(initial,quantity,current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        //console.log(loss);
        var lossPercentage = (loss/initial)*100;
        
        showMessage(`Hey the loss is ${loss} and the percent is ${lossPercentage.toFixed()}%`);
        outputEl.style.color="red";
    }
    else if(current > initial){
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;
        //profitPercentage.toFixed(2);
        showMessage(`Hey the profit is ${profit} and the percent is ${profitPercentage.toFixed()}%`);
        outputEl.style.color="green";
        
    }

    else{
        showMessage(`Hey neither profit nor loss`);
        outputEl.style.color="black";
    }
}
function showMessage(msg){
    outputEl.innerHTML = msg;
}

//btn.addEventListener("click",submitHandler);