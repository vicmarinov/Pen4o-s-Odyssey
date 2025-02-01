// This file provides a solution to the problem from Week 4.
// The problem statement can be found at the following link:
// https://magical-lemonade-f70.notion.site/Pen4o-s-Odyssey-Week-4-1718f86b5b1e805d9c16dba269126241


// A more optimized version
// ------------------------

function isPalindrome (num) {
    let numAsString = num.toString();

    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== numAsString[numAsString.length - i - 1]) {
            return false;
        }
    }

    return true;
}

function luckyNumbers (start, end) {
    let outputNumbers = 0;

    for (let i = start; i <= end; i++) {
        // Checking if i is divisible by 6 instead of checking if it's even and divisible by 3
        if (i % 6 === 0) {
            if (isPalindrome(i)) {
                console.log(i);
                outputNumbers++
            }
        }
    }

    if (outputNumbers === 0) {
        console.log("The statues remain silent…");
    }
}

luckyNumbers(1, 50);
luckyNumbers(10, 300);
luckyNumbers(50, 60);


// The first idea
// --------------

// function isEven (num) {
//     if (num % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isDivisibleBy3 (num) {
//     if (num % 3 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isPalindrome (num) {
//     let numAsString = num.toString();

//     for (let i = 0; i < numAsString.length; i++) {
//         if (numAsString[i] !== numAsString[numAsString.length - i - 1]) {
//             return false;
//         }
//     }

//     return true;
// }

// function luckyNumbers (start, end) {
//     let outputNumbers = 0;

//     for (let i = start; i <= end; i++) {
//         let isLuckyNumber = isEven(i) && isDivisibleBy3 (i) && isPalindrome(i);

//         if (isLuckyNumber) {
//             console.log(i);
//             outputNumbers++;
//         }
//     }

//     if (outputNumbers === 0) {
//         console.log("The statues remain silent…");
//     }
// }

// luckyNumbers(1, 50);
// luckyNumbers(10, 300);
// luckyNumbers(50, 60);