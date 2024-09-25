// NoaKhali Donation :
let totalAmount1 = Number(document.getElementById('totalAmount').innerText);
let noakhaliDonate = Number(document.getElementById('noakhali-donate').innerText);
let noakhaliButton = document.getElementById('noakhali-donate-btn');

noakhaliButton.addEventListener('click', function(){
    let noakhaliInput = Number(document.getElementById('noakhali-input').value);

    if (isNaN(noakhaliInput) || noakhaliInput <= 0 || noakhaliInput > totalAmount)  {
        alert("Please enter a valid donation amount.");
        return;
    }

    let noakhaliFinal = totalAmount1 - noakhaliInput;
    let noakhaliFinalAdd = noakhaliDonate + noakhaliInput;

 
    document.getElementById('totalAmount').innerText = noakhaliFinal;
    document.getElementById('noakhali-donate').innerText = noakhaliFinalAdd;

    
});


// Feni Donation :

let totalAmount2 = Number(document.getElementById('totalAmount').innerText);
let feniDonate = Number(document.getElementById('feni-donate').innerText);
let feniButton = document.getElementById('feni-button');

feniButton.addEventListener('click', function(){
    let feniInput = Number(document.getElementById('feni-input').value);

    if (isNaN(feniInput) || feniInput <= 0 || feniInput > totalAmount2)  {
        alert("Please enter a valid donation amount.");
        return;
    }

    let feniFinal = totalAmount2 - feniInput;
    let feniFinalAdd = feniDonate + feniInput;

 
    document.getElementById('totalAmount').innerText = feniFinal;
    document.getElementById('feni-donate').innerText = feniFinalAdd;

    
});

// Quota Donation :

let totalAmount3 = Number(document.getElementById('totalAmount').innerText);
let quotaDonate = Number(document.getElementById('quota-donate').innerText);
let quotaButton = document.getElementById('quota-button');

quotaButton.addEventListener('click', function(){
    let quotaInput = Number(document.getElementById('quota-input').value);

    if (isNaN(quotaInput) || quotaInput <= 0 || quotaInput > totalAmount3)  {
        alert("Please enter a valid donation amount.");
        return;
    }

    let quotaFinal = totalAmount3 - quotaInput;
    let quotaFinalAdd = quotaDonate + quotaInput;

 
    document.getElementById('totalAmount').innerText = quotaFinal;
    document.getElementById('quota-donate').innerText = quotaFinalAdd;

    
});