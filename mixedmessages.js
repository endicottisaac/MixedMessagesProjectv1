let element = document.querySelector('button');

function receivedQuote(){
    //Changes button look after pressing
    element.style.backgroundColor = 'black';
    element.style.color = '#fff0e5';
    element.innerHTML = 'You have received knowledge'
} 

element.onclick = receivedQuote;

