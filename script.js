//convert fahrenheit to celsius
const convertFahrToCelsius = (num) => {
    let finalValue = ''
    let inputValue = typeof (num)
    //check if type of parameter(values) is a string or number is true)
 if(typeof(num) === 'string' || typeof(num) === 'number'){
     return ((Number(num) - 32) * 5/9).toFixed(4)
 }
 if (toString.call(num) === "[object Array]") {
    let arrayValue = JSON.stringify(num);
    return finalValue = `${arrayValue} is not a valid number but an Array.`
  }

 if (num instanceof Object) {
    let objectValue = JSON.stringify(num);
    return finallu = `${objectValue} is not a valid number but an object.`
  } else {
     return `${JSON.stringify(num)} is not a valid number but a/an ${typeof(inputValue)}`
 }
}

//call any parameter(values) and console
console.log(convertFahrToCelsius(2))
console.log(convertFahrToCelsius('2'))
console.log(convertFahrToCelsius([1,2,3]))
console.log(convertFahrToCelsius({num: 0}))


const checkYuGiOh = (n) => {
    //create an array with n length using es6 syntax
    //use try/catch to validate n
    try {
      let arr = [...new Array(Number(n))].map((_value, index) => {
        //increment the value of index which starts from 0 to start from 1
        index++;
        // create constants for all the strings to replace
        const [_2, _3, _5] = ["yu", "gi", "oh"];
        //check for all
        if (index % 2 === 0 && index % 3 === 0 && index % 5 === 0)
          return _2 + "-" + _3 + "-" + _5;
        //check for two possible multiples
        else if (index % 2 === 0 && index % 3 == 0) return _2 + "-" + _3;
        else if (index % 2 === 0 && index % 5 === 0) return _2 + "-" + _5;
        else if (index % 3 === 0 && index % 5 === 0) return _3 + "-" + _5;
        //check for one multiple
        else if (index % 2 === 0) return _2;
        else if (index % 3 === 0) return _3;
        else if (index % 5 === 0) return _5;
        //return the number
        return index;
      });
      return arr;
    } catch (err) {
      return `'${n}' is an invalid parameter`;
    }
  }

console.log(checkYuGiOh(10))
console.log(checkYuGiOh("5"))
console.log(checkYuGiOh("fizzbuzz is meh"))