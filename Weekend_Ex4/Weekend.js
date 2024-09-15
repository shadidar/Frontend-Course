// Exercise 1.1 Yes or No
const boolean = (bool) => {
  if (bool) {
    console.log("Yes");
    return "Yes";
  } else {
    console.log("No");
    return "No";
  }
};
boolean(true);

// Exercise 2.1 Sum of lowest numbers
function sumSmallestNums(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1]; 
}

console.log(sumSmallestNums([19, 5, 42, 2, 77]));
console.log(sumSmallestNums([10, 343445353, 3453445, 3453545353453]));

// Exercise 2.2 one and zero-binary
function binaryToNum(arr) {
  let binaryString = arr.join("");
  let number = parseInt(binaryString, 2);
  return number;
}
binaryToNum([0, 0, 0, 1]);
binaryToNum([1, 0, 0, 1]);
binaryToNum([0, 0, 1, 0]);

// Exercise 2.3 Find the next perfect square
function findNextSquare(num) {
  let squareRoot = Math.sqrt(num);
  if (Number.isInteger(squareRoot)) {
    squareRoot++;
    let nextPerSqr = squareRoot * squareRoot;
    return nextPerSqr;
  } else {
    console.log("Its not a perefect square");
    return -1;
  }
}
findNextSquare(16);

// exervise 2.4 Unique
function findUniqe(arr) {
  return arr.find(num => arr.indexOf(num) === arr.lastIndexOf(num));
}

console.log(findUniqe([1, 1, 1, 2, 1, 1]));
console.log(findUniqe([0, 0, 0.55, 0, 0]));

// Exercise 2.5 summation
function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

console.log(summation(2));
console.log(summation(8));




// Exercise 2.7 basic math
function basicMath(operation, value1, value2) {
  let num = null;
  if (operation === "+") {
    num = value1 + value2;
  } else if (operation === "-") {
    num = value1 - value2;
  } else if (operation === "*") {
    num = value1 * value2;
  } else if (operation === "/") {
    num = value1 / value2;
  }
  console.log(num);
  return num;
}
basicMath("-", 5, 2);

// Ex3.1 Growth of population
function nb_year(p0, percent, aug, p) {
  let count = 0;
  let percentNum = percent / 100;
  while (p0 < p) {
    p0 = p0 + (p0 * percentNum + aug);
    count++;
  }
  console.log(count);
}
nb_year(1500, 5, 100, 5000);


// Exercise 5.1 trimming string
function trimString(str) {
  if (str.length > 2) {
    return str.slice(1, str.length - 1);
  } else {
    return str;
  }
}
console.log(trimString("Shadi"));

// Exercise 5.2 string repeat
function repeatStr(count, str) {
  return str.repeat(count);
}
console.log(repeatStr(5, "Shadi"));

// Exercise 5.3 To Camel Case
function toCamelCase(str) {
  let words = str.split(/[-_]/);

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  console.log(words);
  return words.join('');
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));

// Exercise 5.4 To Weird Case
function toWeirdCase(str) {
  return str
    .split(' ')
    .map((word) => {
      return word
        .split('')
        .map((char, index) => {
          return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        })
        .join('');
    })
    .join(' ');
}

console.log(toWeirdCase('String'));
console.log(toWeirdCase('weird string case'));
