const iphoneButton = document.getElementById('iphoneBtn'); 
const ipadButton =  document.getElementById('ipadBtn'); 
const macButton = document.getElementById('macBtn');
iphoneButton.addEventListener('click', function () { 
    window.location = 'iphoneDetails.html' 
})
ipadButton.addEventListener('click', function () { 
    window.location = 'ipadDetails.html' 
})
macButton.addEventListener('click', function () { 
    window.location = 'macDetails.html' 
})


