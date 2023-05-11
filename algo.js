
function createPhoneNumber(numbers) {
    let str = "(";

    for (let i = 0; i < numbers.length; i++) {
        if (i === 3) {
            str += ") ";
        } else if (i === 6) {
            str += "-";
        }
        str += numbers[i];
    }
    return str;
}

console.log(createPhoneNumber([6,7,0,8,4,1,8,3,4,4]))