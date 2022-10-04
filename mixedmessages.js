//Creates three random numbers to truly randomize the fortune 
const randNumOne = Math.floor(Math.random() * 11)
const randNumTwo = Math.floor(Math.random() * 11)
const randNumThree = Math.floor(Math.random() *11)

//Picking a person for the fortune
//Assigns a person to a number
const randPerson = randNum => {
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
//Assigns the var person to a random person using the function firstWord
const person = randPerson(randNumOne);
console.log(person)



//Picking the middle part of the fortune 
//assigns a number to a random thing about a person in their life
const randThing = randNum => {
    switch(randNum){
        case 1:
          return 'approaches'
          break;
        case 2: 
          return 'is searching for you'
          break;
        case 3: 
          return 'has collapsed'
          break;
        case 4: 
          return 'loves you'
          break;
        case 5: 
          return 'hates you'
          break;
        case 6: 
          return 'wants something'
          break;
        case 7: 
          return 'has a plan'
          break;
        case 8: 
          return 'knows'
          break;
        case 9: 
          return 'is unaware'
          break;
        default:
          return 'is confused' 

        }
}
//Assigning thing to a randThing
const thing = randThing(randNumTwo);
console.log(thing)

//Picking the advice to give 
//Assigning a number to a piece of advise
const randAdvice = randNum => {
    switch(randNum){
        case 1:
          return 'be brave'
          break;
        case 2: 
          return 'not fear'
          break;
        case 3: 
          return 'keep on keeping on'
          break;
        case 4: 
          return 'prepare accordingly'
          break;
        case 5: 
          return 'stay away'
          break;
        case 6: 
          return 'be cautious'
          break;
        case 7: 
          return 'prepare a detailed plan or else you are doomed'
          break;
        case 8: 
          return 'well tbh idk what you should do'
          break;
        case 9: 
          return 'expect wealth in the near future'
          break;
        default:
          return 'RUN' 

        }
}
//assigning a random advice to advice 
const advice = randAdvice(randNumThree);
console.log(advice)

const fortune = `Your ${person} ${thing}, you should ${advice}`

let element = document.querySelector('button');


function receivedQuote(){
    //Changes button look after pressing
    element.style.backgroundColor = 'black';
    element.style.color = '#fff0e5';
    element.innerHTML = 'You have received knowledge'
    document.getElementById('fortune').innerHTML = fortune
} 

element.onclick = receivedQuote;