// let nam = document.getElementById('myname')
// let aged = document.getElementById('age')
// let high = document.getElementById('height')
// let hob = document.getElementById('hobby')
// let gaming = document.getElementById('game')
// let meal = document.getElementById('food')
// let place = document.getElementById('city')
// let org = document.getElementById('origin')
// let parental = document.querySelector('.parents')
// let foot = document.querySelector('.football')
// function about() {
//     nam.innerHTML = 'My name is Kammaldeen'
//     aged.innerHTML = 'I am 1years of age'
//     high.innerHTML = 'I am neither short nor tall'
//     hob.innerHTML = 'I love playing video games'
//     gaming.innerHTML = 'My favourite game is Free Fire'
//     meal.innerHTML = 'My favourite food is.......'
//     place.innerHTML = 'I live in Osogbo'
//     org.innerHTML = 'I was born in Osogbo'
//     parental.innerHTML = 'My parents are from osogbo'
//     foot.innerHTML = 'I love playing Football'
// }

// function hi() {
//     document.getElementById('greetings').innerHTML = 'How are you doing?'
// }

// let fat = document.getElementById('wei')
// let tall = document.getElementById('hei')
// let result = document.getElementById('res')
// let answer = fat.value / tall.value

// function cal() {
//     if (fat.value == '') {
//         fat.style.borderColor = "red";
//         result.innerHTML = 'Please fill the coloured areas';
//     }
//     if (tall.value == '') {
//         tall.style.borderColor = "red"
//         result.innerHTML = 'Please fill the coloured areas';
//     }
//     else if (fat.value > 0 && tall.value > 0) {
//         let answer = fat.value / tall.value
//         result.innerHTML =`Your BMI is ${answer}kg/m`;
//     }
// }
let studentInfo = [
    { name: "ade", school: "oic", age: 12, isPresent: true, mathScore: 8 },
    { name: "ade", school: "oic", age: 12, isPresent: true, mathScore: 8 },
    { name: "Kamaldeen", school: "oic", age: 14, isPresent: true, mathScore: 14 },
    { name: "Adesoji", school: "oic", age: 5, isPresent: false, mathScore: 9 },
    { name: "Victor", school: "oic", age: 16, isPresent: true, mathScore: 12 },
    { name: "Afeez", school: "oic", age: 20, isPresent: true, mathScore: 15 },
];

// let inputData = document.getElementById("search");
// let searchResult = document.getElementById("demo");

// function search() {
//     let results = studentInfo.filter((item) =>
//         item.name.includes(inputData.value)
//     );

//     if (results.length > 0) {
//         searchResult.innerHTML = results.map(item => `
//             name: ${item.name},  school: ${item.school},  age: ${item.age}, isPresent: ${item.isPresent}, mathScore: ${item.mathScore}
//         `).join('<br/>');
//     } else {
//         searchResult.innerHTML = "No data found.";
//     }
// }

// function convertNumber() {
    
//     // Destructuring to get the word based on input
//     const { [input]: word = "Number out of range" } = numberWords;
//     // Display the word or an error message
//     document.getElementById("demo").innerHTML = word;
//   }

// // trunc is a math method that returns an integal
// let solution = Math.trunc(Math.random() * 10);
// console.log(solution)
// // floor is a math method that is used to return the highest
// let sol = Math.floor(Math.random() * 10);
// console.log(sol)
// // ceil is a math method that rounds a number to it's nearest integer
// let solut = Math.ceil(Math.random() * 100);
// console.log(solut)
// // round is a math method that returns a value to it's nearest interger
// let solute = Math.round(Math.random() * 1000);
// console.log(solute)
// // min is a math method that points out the smallest value in a set of value
// let answer = Math.min(0, 100, 30, 20, -100, -1000);
// console.log(answer)
// // max is a math method that points out the largest value in a set of values
// let anwer = Math.max(0, 100, 30, 20, -100, -1000);
// console.log(anwer)
// // abs is a math method that returns the absolute (positive) value of a negative value
// let anr = Math.abs(-8.5);
// console.log(anr)

// Create an Object that maps numbers to words

// let input = document.getElementById("numberr").value;
// let inputter = input.value
let result = document.getElementById("result");
const numberToWords = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty-one",
    22: "twenty-two",
    23: "twenty-three",
    24: "twenty-four",
    25: "twenty-five",
    26: "twenty-six",
    27: "twenty-seven",
    28: "twenty-eight",
    29: "twenty-nine",
    30: "thirty",
    31: "thirty-one",
    32: "thirty-two",
    33: "thirty-three",
    34: "thirty-four",
    35: "thirty-five",
    36: "thirty-six",
    37: "thirty-seven",
    38: "thirty-eight",
    39: "thirty-nine",
    40: "forty",
    41: "forty-one",
    42: "forty-two",
    43: "forty-three",
    44: "forty-four",
    45: "forty-five",
    46: "forty-six",
    47: "forty-seven",
    48: "forty-eight",
    49: "forty-nine",
    50: "fifty",
};



// console.log(typeof input)

function converter(){
const input = document.getElementById("numberr").value;
    let { [input]: word} = numberToWords

console.log(word)

result.innerHTML= "THE NUMBER IN WORD IS " + word
}



// function converter() {
   
//     let { inputter: word } = numberToWords;
    
//     result.innerHTML = word;
// }
