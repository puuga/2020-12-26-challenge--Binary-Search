function binarySearch (array, midIndex, leftIndex, rightIndex) {
    if (array[midIndex] === midIndex)
        return midIndex


    if (array[midIndex] > midIndex) {
        const newMidIndex = Math.floor((midIndex - leftIndex) / 2)
        if (newMidIndex < 0) {
            return -1
        }
        return binarySearch(arr, newMidIndex, midIndex - midIndex, midIndex + midIndex)
    }

    if (array[midIndex] < midIndex) {
        const newMidIndex = Math.floor((rightIndex - midIndex) / 2) + midIndex
        return binarySearch(arr, newMidIndex, midIndex - midIndex, midIndex + midIndex)
    }

    return -2
}

const arr = [-3, -2, -1, 0, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const midIndex = Math.floor(arr.length/2)
const index = binarySearch(arr, midIndex, 0, arr.length - 1)
console.log('answer index:', index);