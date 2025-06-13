function findLargestElement(numbers) {
    if (numbers.length === 0) {
        return undefined
    }

    let lar = numbers[0];
    for (let i = 1; i < numbers.length; i++) {  // Start from index 1
        if (numbers[i] > lar) {
            lar = numbers[i];
        }
    }
    return lar;
}

module.exports = findLargestElement;
