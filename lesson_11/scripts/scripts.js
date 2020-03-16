function superswitcher() {
    var switchButton = document.querySelector('#button')
    var lamp = document.querySelector('#lamp')
    var lampDiv = document.querySelector('#lampDiv')
    
    if (switchButton.className === 'button button__off') {
        switchButton.className = 'button button__on';
        lamp.className = 'lamp lamp__on';
        switchButton.value = 'OFF';
        lampDiv.className = 'lamp2';
    } else {
        switchButton.className = 'button button__off';
        lamp.className = 'lamp lamp__off';
        switchButton.value = 'ON';
        lampDiv.className = 'lamp3';
        }
}

const fruites = ['oranges', 'banans', 'apples'];
const output = document.querySelector('.output');

for (let i = 0; i < 3; i++) {
    console.log(fruites[i]);
    var result = output.textContent[i];
    result++;
}
