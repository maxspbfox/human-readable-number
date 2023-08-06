function getTens(arr) {
    return arr[0] === "1"
        ? getFromTenToNineteen(arr[1])
        : parseTens(arr[0]) + getUnits(arr[1], false);
}

function getHundreds(number) {
    return getUnits(number) + " hundred";
}

function getUnits(number, withZero) {
    let result = "";

    switch (number) {
        case "0":
            result = withZero ? "zero" : "";
            break;
        case "1":
            result = "one";
            break;
        case "2":
            result = "two";
            break;
        case "3":
            result = "three";
            break;
        case "4":
            result = "four";
            break;
        case "5":
            result = "five";
            break;
        case "6":
            result = "six";
            break;
        case "7":
            result = "seven";
            break;
        case "8":
            result = "eight";
            break;
        case "9":
            result = "nine";
            break;
    }
    return result;
}

function getFromTenToNineteen(number) {
    let result = "";
    switch (number) {
        case "0":
            result = "ten";
            break;
        case "1":
            result = "eleven";
            break;
        case "2":
            result = "twelve";
            break;
        case "3":
            result = "thirteen";
            break;
        case "4":
            result = "fourteen";
            break;
        case "5":
            result = "fifteen";
            break;
        case "6":
            result = "sixteen";
            break;
        case "7":
            result = "seventeen";
            break;
        case "8":
            result = "eighteen";
            break;
        case "9":
            result = "nineteen";
            break;
    }

    return result;
}

function parseTens(number) {
    let result = "";

    switch (number) {
        case "2":
            result = "twenty ";
            break;
        case "3":
            result = "thirty ";
            break;
        case "4":
            result = "forty ";
            break;
        case "5":
            result = "fifty ";
            break;
        case "6":
            result = "sixty ";
            break;
        case "7":
            result = "seventy ";
            break;
        case "8":
            result = "eighty ";
            break;
        case "9":
            result = "ninety ";
            break;
    }

    return result;
}

module.exports = function toReadable(number) {
    let arr = number.toString().split("");
    let length = arr.length;
    let result = "";

    switch (length) {
        case 1:
            result = getUnits(arr[0], true);
            break;
        case 2:
            result = getTens(arr);
            break;
        case 3:
            let arr2 = arr.slice(1, length);
            result = getHundreds(arr[0]) + " " + getTens(arr2);
            break;
    }

    return result.trim();
};
