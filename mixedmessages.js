const randNumOne = Math.floor(Math.random() * 11)
const randNumTwo = Math.floor(Math.random() * 11)
const randNumThree = Math.floor(Math.random() *11)

const firstWord = randNum => {
    switch(randNum){
        case 1:
          return 'Family'
          break;
        case 2: 
          return 'Friend'
          break;
        case 3: 
          return 'Foe'
          break;
        case 4: 
          return 'Father'
          break;
        case 5: 
          return 'Teacher'
          break;
        case 6: 
          return 'Sibling'
          break;
        case 7: 
          return 'Boss'
          break;
        case 8: 
          return 'Child'
          break;
        case 9: 
          return 'Mother'
          break;
        default:
          return 'Inner self' 

        }
    };

const person = firstWord(randNumOne);
console.log(person)


let element = document.querySelector('button');

function receivedQuote(){
    //Changes button look after pressing
    element.style.backgroundColor = 'black';
    element.style.color = '#fff0e5';
    element.innerHTML = 'You have received knowledge'
} 

element.onclick = receivedQuote;