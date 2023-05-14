// глава 6
// задание 1
let array = [1, 2, true, 3, "a", 4, 'A', 5, null, 5];

function elementsFunc() {
    let even = 0;
    let odd = 0;

    array.map(function (item, index, array) {
        if (item == null) {
            console.log("Элемент " + index + " равен null.");
            return;
        }

        if (typeof item == "string") {
            console.log("Элемент " + index + " - строка.");
            return;
        }

        if (item % 2 === 0) even++;
        else odd++;
    });

    console.log("Чётных: " + even);
    console.log("Нечётных: " + odd);
}

elementsFunc();

//задание 2


function getSimplicityOfNumber(number) {
    if (number > 1000) return "Данные неверны.";
    if (number === 0) return "Число ненатуральное.";
    if (number === 1) return "Не простой и не составной.";

    let divisionsCount = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) divisionsCount++;
    }

    if (divisionsCount === 2)
        return "Число простое.";
    else
        return "Число составное.";
}

console.log(getSimplicityOfNumber(10));
console.log(getSimplicityOfNumber(11));
console.log(getSimplicityOfNumber(1001));
console.log(getSimplicityOfNumber(1));
console.log(getSimplicityOfNumber(0));


//задание 3 

function getSum(number1) {
    return function (number2) {
        return number1 + number2;
    }
}

console.log(getSum(153)(7));



//задание 4


function numberPerSecond(number1, number2) {
    let progress = number1;

    let intervalId = setInterval(function () {
        if (progress <= number2) {
            console.log(progress);
            progress++;
        }
        else clearInterval(intervalId);
    }, 1000);
}

numberPerSecond(5, 15);

//задание 5

const pow = (x, n) => {
    return x ** n;
}

console.log(pow(8, 3));