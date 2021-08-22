
let tipAmount, total , percentage;

const customButton = document.getElementById('custom');


// ----------------All percentage button---------------

document.getElementById('all%').addEventListener('click', (event) =>{
    // console.log(event.target.innerText);
    // debugger;
    if(event.target.innerText == '5%'){
        percentage = 0.05;
        calculation();
        displayChange();
    }
    else if(event.target.innerText == '10%'){
        percentage = 0.1;
        calculation();
        displayChange();
    }
    else if(event.target.innerText == '15%'){
        percentage = 0.15;
        calculation();
        displayChange();
    }
    else if(event.target.innerText == '25%'){
        percentage = 0.25;
        calculation();
        displayChange();
    }
    else if(event.target.innerText == '50%'){
        percentage = 0.5;
        calculation();
        displayChange();
    }

    // -------------for custom button --------------

    else if(event.target.tagName.toLowerCase() == 'input' && customButton.value != ''){
        if(parseInt(customButton.value) > 0){
            percentage = parseInt(customButton.value) / 100;
            calculation();
            displayChange();
            document.getElementById('custom-error').style.display = 'none';
        }
        else{
            document.getElementById('custom-error').style.display = 'block';

            event.target.style.border = '2px solid red';
        }
    }
});

//------------------- full calculation function -------------------

function calculation(){
    const bill = parseFloat(document.getElementById('bill-amount').value);

    const people = parseInt(document.getElementById('people').value);


    if(bill > 0 && people > 0){
        tipAmount = parseFloat(bill * percentage);
        total = parseFloat(parseFloat(bill + tipAmount)/people);

        errorHandleChange('bill-error', 'bill-error-outline');
        errorHandleChange('people-error', 'people-error-outline');
    }
    else if(bill <= 0 || isNaN(bill)){
        errorHandle('bill-error', 'bill-error-outline');
        tipAmount = 0.00;
        total = 0.00;
    }
    else if(people <= 0 || isNaN(people)){
        errorHandle('people-error', 'people-error-outline');
        tipAmount = 0.00;
        total = 0.00;
    }
}

//--------------- error handling function --------------

function errorHandle(id_text, id_outline){
    document.getElementById(id_text).style.display = 'block';

    document.getElementById(id_outline).style.border = '2px solid red';
}

//--------------- error handling change function --------------

function errorHandleChange(id_text, id_outline){
    document.getElementById(id_text).style.display = 'none';
    document.getElementById(id_outline).style.border = 'none';
}

//-------------- display change function ----------------------

function displayChange(){
    document.getElementById('tip-amount').innerText = tipAmount.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}

//---------------- for Reset button -------------------------

document.getElementById('reset').addEventListener('click', ()=>{
    document.getElementById('tip-amount').innerText = '0.00';
    document.getElementById('total').innerText = '0.00';
    document.getElementById('bill-amount').value = '';
    document.getElementById('people').value = '';
    document.getElementById('custom').value = '';
    errorHandleChange('bill-error', 'bill-error-outline');
    errorHandleChange('people-error', 'people-error-outline');
    document.getElementById('custom-error').style.display = 'none';
    percentage = 0;
});

