
//controller function
function getValues() {
    //Get values from page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    // change input to integer
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // Validate values are integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generate numbers
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    } else {
        alert('You must enter numbers');        
    }
}

// generate numbers from start value to end value
//logic function(s)
function generateNumbers(startValue, endValue) {

    // Empty array to hold the numbers
    let numbers = []

    // loop through numbers from start to end
    for (let i = startValue; i <= endValue; i ++) {
        // add them to the array one by one
        numbers.push(i);
    }
    return numbers;
}

//display the number and mark them even
//display or view functions
function displayNumbers(numbers) {

    let templateRows = '';
    for (let i = 0; i < numbers.length; i++) {

        let className = 'even';
        let number = numbers[i];

        if(number % 2 == 0) {
            className = 'even';
        } else {
            className = 'odd';
        }
        templateRows += `<tr><td class="${className}" >${number}</td></tr>`;
    }
    document.getElementById('results').innerHTML = templateRows;
}