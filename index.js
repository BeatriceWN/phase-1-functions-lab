function distanceFromHqInBlocks(block) {
    const hq = 42;
    return Math.abs(block-hq);
}
// console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(block) {
    distanceFromHqInBlocks(block);
    const blocks = distanceFromHqInBlocks(block);
    return blocks * 264
}
// console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264;
}
// console.log(distanceTravelledInFeet(34, 38));



// Fare Rules Recap:
// First 400 feet → free

// 400 < distance ≤ 2000 feet → 2 cents per foot (after the first 400 feet)

// 2000 < distance ≤ 2500 feet → flat fare of $25

// distance > 2500 feet → "cannot travel that far"

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distance = Math.abs(destination - start) * feetPerBlock;

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}
console.log(calculatesFarePrice(10, 11));
console.log(calculatesFarePrice(2, 10));
console.log(calculatesFarePrice(49, 57));
console.log(calculatesFarePrice(33, 59));