//Challenge 1:  Sum of Positives

function sumOfPositives(arrayNumbers){
    let sum = 0
    for (let i = 0; i < arrayNumbers.length; i++){
        if (arrayNumbers[i] > 0){
            sum += arrayNumbers[i]
        }
    }
    return sum
}

console.log(sumOfPositives([1, -3, 5, -2, 9, -8]))


//Challenge 2: Find Maximum Value

function findMax(arrayNumbers){
    let max = 0
    for (let i = 0; i < arrayNumbers.length; i++){
        if ( arrayNumbers[i] > max){
            max = arrayNumbers[i]
        }
    }
    return max
}

console.log(findMax([1,28,7,12,16]))


//Challenge 3: Election winner

function findWinner(candidates){
    let winner;
    let highestVotes = 0;
    for (let i = 0; i < candidates.length; i++){
        if (candidates[i].votes > highestVotes){
            highestVotes = candidates[i].votes
            winner = candidates[i]
        }
    }
    return winner 
}

const candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
];

console.log(findWinner(candidates))


//Challenge 4: Longest word

function findLongestWord(words){
    let longestWord;
    let length = 0;
    for (let i = 0; i < words.length; i++){
        if (words[i].length > length){
            longestWord = words[i]
            length = words[i].length
        }
    }
    return longestWord
}

console.log(findLongestWord(["apple1", "apple2","banana", "pear", "grape", "grapefruit"]))


//Challenge 5: Count Properties

function countProperties(obj){
    let keys = Object.keys(obj)
    return keys.length
}

console.log(countProperties({ name: "Alice", age: 25, city: "Paris", gender: "female" }))


//Challenge 6:Filter by Length

function filterByLength(words, minLength){
    let filteredWords = []
    for (let i = 0; i < words.length; i++){
        if (words[i].length >= minLength){
            filteredWords.push(words[i])
        }
    }
    return filteredWords
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 7))


//Challenge 7; Sum of Even Numbers

function sumEvenNumbers(numbers){
    let sum = 0;
    for (let i = 1; i < numbers.length; i++){
        if ((numbers[i] % 2) == 0){
            sum += numbers[i]
        }
    }
    return sum
}
console.log(sumEvenNumbers([1, 3, 4, 5, 6]))


//Challenge 8: Difference Between Sum of Even and Odd Numbers

function differenceEvenOdd(numbers){
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < numbers.length; i++){
        if ((numbers[i] % 2) == 0){
            sumEven += numbers[i]
        }else {
            sumOdd += numbers[i]
        }
    }
    return sumEven - sumOdd
}

console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]))



//Challenge 9: Count Truthy
function countTruthy(obj){
    let truthCount = 0;
    for (let key in obj) {
        if (obj[key]){
            truthCount++
        }
    }
    return truthCount
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null, gender: "male" }))

function countTruthy2(obj){
    let values = Object.values(obj)
    let truthValues = []
    for (let i = 0; i < values.length; i++){
        if (Boolean(values[i]) == true){
            truthValues.push(values[i])
        }
    }
    return truthValues.length
}
console.log(countTruthy2({ a: 0, b: "hello", c: false, d: 42, e: null }))    


//Challenge 10: Average of Numbers

function average(numbers){
    let sum = 0;

    if (numbers.length <= 0){
        return 0
    }else {
        for (let i = 0; i < numbers.length; i++){
            sum += numbers[i]
        }
        return sum / numbers.length
    }
    
}
console.log(average([2, 4, 6, 8]))
console.log(average([]))


//Challenge 11:  Linear Search

function linearSearch(arrayNumbers, searchValue){
    let i = 0
    while (i < arrayNumbers.length){
        if (arrayNumbers[i] == searchValue){
            return i
            break
        }else {
            i++
        } 
    }
    return -1
}
console.log(linearSearch([5, 3, 7, 1, 4], 17))


//challenge 12: Reverse Linear Search

function reverseLinearSearch(arrayNumbers, searchValue){
    let i = arrayNumbers.length - 1
    while (i >= 0){
        if (arrayNumbers[i] == searchValue){
            return i
            break
        }else {
            i--
        } 
    }
    return -1
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7))
console.log(reverseLinearSearch([5, 3, 7, 1, 4], 10) )


//Challenge 13: Linear Search All Indices

function linearSearchAll(arrayNumbers, searchValue){
    let indices = []
    let i = 0;
    while (i < arrayNumbers.length){
        if (arrayNumbers[i] == searchValue){
            indices.push(i)
            i++
        }else {
            i++
        }
    }
    return indices
}
console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7) )
console.log(linearSearchAll([5, 3, 7, 1, 4], 10))


//Challenge 14: Count Occurrences

function countOccurrences(arrayStrings){
    let occurrences = {}
    for (let i = 0; i < arrayStrings.length; i++){
        if (arrayStrings[i] in occurrences){
            occurrences[arrayStrings[i]] = occurrences[arrayStrings[i]] + 1
        }else {
            occurrences[arrayStrings[i]] = 1
        }
    }
    return occurrences
}
console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]))


//Challenge 15: Remove Duplicates

function removeDuplicates(arrayNumbers){
    let noDuplicates = []
    for (let i = 0; i < arrayNumbers.length; i++){
        if (noDuplicates.includes(arrayNumbers[i])){
            continue
        }else {
            noDuplicates.push(arrayNumbers[i])
        }
    }
    return noDuplicates
}
console.log(removeDuplicates([7, 1, 3, 4, 6, 2, 3, 2, 4, 1, 5]))


//Challenge 16: Most Frequent

function mostFrequent(arrayItems){
    let maxCount = 0;
    let mostFrequentItem;
    let frequecy = {}
    for(let i = 0; i < arrayItems.length; i++){
        if (arrayItems[i] in frequecy){
            frequecy[arrayItems[i]] = frequecy[arrayItems[i]] + 1
            if (frequecy[arrayItems[i]] > maxCount){
                maxCount = frequecy[arrayItems[i]]
                mostFrequentItem = arrayItems[i]
            }
        }else {
            frequecy[arrayItems[i]] = 1
        }
    }
    return mostFrequentItem
}
console.log(mostFrequent([1, 1, 2, 2, 3, 3, 3, 4]))
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "banana"]))