// This file provides a solution to the problem from week 2.
// The problem statement can be found at the following link:
// https://magical-lemonade-f70.notion.site/Pen4o-s-Odyssey-Week-2-16c8f86b5b1e808088fde0cb6293f6a2

function guessTheTreasureDoor (chosenDoor) {
    // Generating a random number from the set [1, 2, 3]
    let treasureDoor = Math.ceil(Math.random() * 3);

    if (chosenDoor !== 1 && chosenDoor !== 2 && chosenDoor !== 3) {
        console.log("Invalid choice. Please select Door 1, 2, or 3.");
        return;
    }

    if (chosenDoor === treasureDoor) {
        console.log(`Congratulations, Pen4o! You found the treasure behind Door ${treasureDoor}!`);
    } else {
        console.log("A bucket of cold water splashes on you! Unlucky Pen4o!");
    }
}

guessTheTreasureDoor(3);
guessTheTreasureDoor(1);
guessTheTreasureDoor(4);