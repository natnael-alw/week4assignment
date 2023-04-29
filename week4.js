 //question 1
 var ages = [3, 9, 23, 64, 2, 8, 28, 93]
function subtractFirstFromLast(a,b) {
    console.log('question 1a',(ages[ages.length-1])-(ages[0]))
}
subtractFirstFromLast()
ages.push(22) // new ages added
console.log(ages) // checking the addition
subtractFirstFromLast() // calling the funtion again to make sure it works for all lenths
let average = 0;
   function averageAge(){
    for (let i =0; i < ages.length; i++){
     average +=ages[i]/ages.length
        }
    console.log('question 1b',average)

    }
    averageAge()
  
// question 2
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names.join().length[2])
 let averageLetterName= 0;
function averageLetter(){
 
for (let i = 0; i < names.length; i++){
  averageLetterName=  names.join("").length/names.length
}// first join all the character then i divided them by the lenth of names arrray (dont see the need of a loop here)
console.log('question 2',averageLetterName)
//names++
}
averageLetter()

let allTogether = 0

for (let i = 0; i < names.length; i++){
    console.log (names.join(" "))

}

//question 3
//Answer
console.log ('question 3', 'by using Array.length-1')

//question 4
console.log('question 4', 'array[0]')

//question 5

let namesLength = new Array(0)
let sum= 0
for(let i = 0; i <names.length; i++){

   namesLength = names.map(function(x){
        return x.length
    }) //i got the correct answer using the map method but no luck with loops. but close

   

}
console.log(namesLength)


//question 6
// counting namesLength

for (let i = 0; i < namesLength.length; i++){
   console.log(namesLength[i].length)

}

//question  7

function wordsTime(word,n){
    for (let i =0; i< n; i++){
        console.log(word(i))
    }
}// this would print a word input n times

//question 8
let firstName = 'natnael';
let lastName = 'Gebremariam';

function fullName(A, B){
    return firstName+ " " + lastName
}
console.log('question 8', fullName())
//question 9  
  const array1 =[102,200]
  let sum1 =0

 function isSumGreaterthan100(array){  
    let initialvalue= 0

    
if (sum1 = array1.reduce((accumulator, currentvalue)=> accumulator+currentvalue)
    > 100)
    {
        return true

    }
 }
console.log('question 9',isSumGreaterthan100())


//question 10   

function returnsAverage(array){
    return (array1.reduce(function(accumulator, currentvalue){
        return accumulator + currentvalue
    }))/array1.length


}
console.log('question 10', returnsAverage())

//question 11 comparison of the avarage of two arrays of numbers, succesful!
const array101 = [40, 60]
const array102 =[20,60]
 
function returnsHighestAverage(array1,array2){
    if( ((array101.reduce(function(accumulator,currentvalue){
        return accumulator + currentvalue}))/array101.length) >

        (array102.reduce(function(accumulator, currentvalue){
            return accumulator + currentvalue
        })/array102.length

        ))
    return true

}


        console.log('question 11',returnsHighestAverage())

//question 12
let isHotOutside = true;
let moneyInPocket = 200;
function wiilByADrink(a,b){
     
    if (moneyInPocket >= 10.5 && isHotOutside === true){
        return true
    }


}      console.log('question 12', wiilByADrink())

    

//question 13  booking trips, this funtion returns a bollean tp decide weather to book truck load trips if rate per mile is $4 and distance is greter than 500 miles
let tripDistance= 506
ratePerMile = 4.44
bookIt = ( a,b)=> {
    if (ratePerMile >= 4 &&  tripDistance >= 500)
    return true
}
console.log('question 13', bookIt())
