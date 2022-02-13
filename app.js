function updateProduct(product,price,isAdd) {
    const productInput = document.getElementById(product +'-quantity');
    let productNumber=productInput.value;
    if(isAdd==true){
        productNumber=parseInt(productNumber)+1;
    }
    else if(productNumber>0){
        productNumber=parseInt(productNumber)-1;
    }
    productInput.value=productNumber;
    
    const productPrice= document.getElementById(product+'-total');
    productPrice.innerText=productNumber*price; 
    calculateTotal();  
}
function getInputValue(product) {
    const productNumber=document.getElementById(product + '-quantity');
    const productValue=parseInt(productNumber.value);
    return productValue;  
}

function calculateTotal() {
    const phoneTotal=getInputValue('phone')*1219;
    const caseTotal=getInputValue('case')*59;
    const subTotal=phoneTotal+caseTotal;
    const tex=subTotal/10;
    const total=subTotal+tex;
    // update on the Html
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('total-tax').innerText=tex;
    document.getElementById('total-amount').innerText=total;
}

// handle Phone
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProduct('phone',1219,true); 
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProduct('phone',1219,false);
})

// handle Case

document.getElementById('case-plus').addEventListener('click',function(){
    updateProduct('case',59,true)
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateProduct('case',59,false); 
})
