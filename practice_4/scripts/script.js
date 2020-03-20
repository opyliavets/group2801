var input = prompt('Enter your phrase.');
var output = [];

for (var i = 0; i < input.length; i++){
    if (input[i] === 'a') {
        output.push('4')
    } else if (input[i] === 'i') {
        output.push('1')
    } else if (input[i] === 'e') {
        output.push('3')
    } else if (input[i] === 'o') {
        output.push('0')
    } else {
        output.push(input[i]);
    }
    var outputFinal = output.join('')
}

alert(outputFinal);


// if (input[i] === 'a') {
//     output[i] = '4';
// } else {
//     output[i] = output[i] + input[i];
// }
// if (input[i] === 'i') {
//     output[i] = '1';
// } else {
//     output[i] = output[i] + input[i];
// }
// if (input[i] === 'e') {
//     output[i] = '3';
// } else {
//     output[i] = output[i] + input[i];
// }