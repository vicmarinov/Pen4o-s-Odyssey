// This file provides a solution to the problem from week 1.
// The problem statement can be found at the following link:
// https://magical-lemonade-f70.notion.site/Pen4o-s-Odyssey-Week-1-16c8f86b5b1e802fb2dae878aad08e1a

function isValidTriangle (side1, side2, side3) {
    if ((side1 < side2 + side3) && (side2 < side1 + side3) && (side3 < side1 + side2)) {
        console.log(`The Triangle of Truth with sides ${side1}, ${side2}, and ${side3} has been validated. Pen4o, you may begin your journey!`);        
    } else {
        console.log(`The Triangle of Truth with sides ${side1}, ${side2}, and ${side3} is invalid. Pen4o remains stuck!`);
    }
}

isValidTriangle(3, 4, 5);
isValidTriangle(1, 2, 3);