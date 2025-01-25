// This file provides a solution to the problem from Week 3.
// The problem statement can be found at the following link:
// https://magical-lemonade-f70.notion.site/Pen4o-s-Odyssey-Week-3-16c8f86b5b1e8058af0ddff280a23dc5

function treasureMap (cipher) {
    // A variable to store the sum of the digits
    let digitsSum = 0;

    // A variable to store the characters of the decrypted cipher
    let cipherDecrypted = "";

    // Iterating over each character
    for (let i = 0; i < cipher.length; i++) {
        let char = cipher[i];

        // Summing the digits
        let digit = !isNaN(Number(char)) ? Number(char) : 0;
        digitsSum += digit;

        // Switching case of characters
        if (char === char.toUpperCase()) {
            char = char.toLowerCase();
        } else {
            char = char.toUpperCase();
        }

        // Accumulating the characters of the decrypted cipher        
        cipherDecrypted += char;
    }

    // Outputting the results
    console.log(cipherDecrypted);

    if (digitsSum > 20) {
        console.log(`The map reveals the your next location! Total power: ${digitsSum}`);
    } else {
        console.log(`The map warns of danger! Total power: ${digitsSum}`);
    }
}

treasureMap("T3r4p_M4p");
treasureMap("SecreT_tRe4sure!");
treasureMap("Dangerous_2Clue");