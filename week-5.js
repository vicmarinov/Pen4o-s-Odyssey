// This file provides a solution to the problem from Week 5.
// The problem statement can be found at the following link:
// https://magical-lemonade-f70.notion.site/Pen4o-s-Odyssey-Week-5-1718f86b5b1e80419cf7efc60e406876

function secretWell (targetVolume, volumeOfAllAddedWater) {
    let hasAnInvalidAttempt = false;
    
    let index = 0;

    while (targetVolume > 0) {
        let volumeOfCurrentlyAddedWater = volumeOfAllAddedWater[index];

        if (volumeOfCurrentlyAddedWater < 0) {
            console.log("Failure! The well has been sealed.");
            hasAnInvalidAttempt = true;
            break;
        }

        targetVolume -= volumeOfCurrentlyAddedWater;
        index++;
    }

    if (targetVolume === 0 && !hasAnInvalidAttempt) {
        console.log("Success! The well reveals its precious treasure!");
    } else if (targetVolume < 0 && !hasAnInvalidAttempt) {
        console.log("Overflow! The well rejects your offering.");
    }
}

secretWell(50, [30, 20]);
secretWell(100, [10, 30, -10]);
secretWell(50, [30, 40]);