const plushButton=document.getElementById('plush-button')
    plushButton.addEventListener('click', function(){
    const mobileNumber=document.getElementById('mobile-Number').value;
    const mobileNumberConvert=parseFloat(mobileNumber);
    document.getElementById('mobile-Number').value=mobileNumberConvert +1;
})

const maynasButton=document.getElementById('maynas-button')
    maynasButton.addEventListener('click', function(){
    const mobileNumber=document.getElementById('mobile-Number').value;
    const mobileNumberConvert=parseFloat(mobileNumber);
    document.getElementById('mobile-Number').value=mobileNumberConvert-1;
})

function mobileNumberUpdate(){
    
}
