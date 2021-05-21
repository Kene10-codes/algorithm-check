//convert fahrenheit to celsius
const convertFahrToCelsius = (num) => {
    //check if type of parameter(values) is a string or number is true)
 if(typeof(num) === 'string' || typeof(num) === 'number'){
     return ((Number(num) - 32) * 5/9).toFixed(4)
 } else {
     return `${JSON.stringify(num)} is not a valid number but a/an ${typeof(num)}`
 }
}

//call any parameter(values) and console
console.log(convertFahrToCelsius(2))
console.log(convertFahrToCelsius('2'))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({num: 0}))