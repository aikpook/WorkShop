let number = "123.34";
let numToWord = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eighth",
    "9": "nine",
    ".": "dot"
}
    for (var i=0; i<number.length; i++) {
    console.log(numToWord[number[i]]);

    }