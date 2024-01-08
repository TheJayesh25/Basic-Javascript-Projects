const calculateBMI = () => {
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    console.log(height);
    console.log(weight);
    if (isNaN(height) || isNaN(weight)) 
    {
        const alert = document.createElement('div');
        alert.appendChild(document.createTextNode('Please enter numerical values'));
        alert.setAttribute('id',document.querySelector('#results').id)
        document.querySelector('#results').replaceWith(alert);
        document.querySelector('#height').value = null;
        document.querySelector('#weight').value = null;

    }
    else{

        let bmi = Math.round((weight/Math.pow((height/100),2))*10)/10;
        let statement = ''
        if (bmi < 18.6){
            statement = 'Under Weight';
        }
        else if (bmi>=18.6 && bmi<=24.9){
            statement = 'Normal Weighted';
        }
        else{
            statement = 'Overweight';
        }
        console.log(bmi);

        const result = document.createElement('div');
        result.appendChild(document.createTextNode(`Your BMI is: ${bmi}, you are ${statement}`));
        result.setAttribute('id',document.querySelector('#results').id)
        document.querySelector('#results').replaceWith(result);

        const resetButton = document.createElement('input');
        resetButton.setAttribute('type','button');
        resetButton.setAttribute('class','button');
        resetButton.setAttribute('value','Reset');
        resetButton.setAttribute('onclick','resetFields()');
        // result.appendChild(document.createTextNode(`Your BMI is: ${bmi}, you are ${statement}`));
        // result.setAttribute('id',document.querySelector('#results').id)
        
        const calculateButton = document.querySelector('.button');
        calculateButton.parentNode.replaceChild(resetButton, calculateButton);


    }
    // return [height, weight];
}

const resetFields = () => {
    document.querySelector('#height').value = '';
    document.querySelector('#weight').value = '';
    const results = document.querySelector('#results');
    if (results) {
        results.textContent = '';
    }
    
    const resetButton = document.createElement('input');
    resetButton.setAttribute('type', 'button');
    resetButton.setAttribute('class', 'button');
    resetButton.setAttribute('value', 'Calculate');
    resetButton.setAttribute('onclick', 'calculateBMI()');

    const currentResetButton = document.querySelector('.button');
    currentResetButton.parentNode.replaceChild(resetButton, currentResetButton);
}

// let height, weight = calculateBMI();
// console.log(height);
// console.log(weight);
{/* <input value="Calculate"  type="button" onclick="calculateBMI();"></input> */}