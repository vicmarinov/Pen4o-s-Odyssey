// This file provides a solution to the problem from Week 6.
// The problem statement can be found at the following link:
// https://magical-lemonade-f70.notion.site/Pen4o-s-Odyssey-Week-6-1718f86b5b1e806ab0def0ff74c5d76c

function theHallOfLight (rowsNumber, columnsNumber) {
    for (let row = 0; row < rowsNumber; row++) {
        let outputRow = "";

        for (let column = 0; column < columnsNumber; column++) {
            let indicesSum = row + column;
            
            if (indicesSum % 2 === 0) {
                outputRow += "*";
            } else {
                outputRow += ".";
            }
        }

        console.log(outputRow);
    }
    
    console.log("Pen4o's Odyssey has come to an end, but your programming journey is just beginning. The world of code awaits you!");
}

theHallOfLight(3, 4);
theHallOfLight(5, 5);