let str = "";  
let displayValue = "";  
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;

        if (value === "=") {
            try {
                str = eval(str);  
                displayValue = str;  
                document.querySelector('#calc-display').textContent = displayValue;
            } catch (error) {
                document.querySelector('#calc-display').textContent = "Error"; 
                str = "";
                displayValue = "";
            }
        } else if (value === "DEL") {
            str = str.slice(0, -1);
            displayValue = displayValue.slice(0, -1);
            document.querySelector('#calc-display').textContent = displayValue || "0"; 
        } else if (value === "RESET") {
            str = "";
            displayValue = "";
            document.querySelector('#calc-display').textContent = "0";
        } else {
            if (value === "x") {
                str += "*";
                displayValue += "x";
            } else {
                str += value;
                displayValue += value;
            }
            document.querySelector('#calc-display').textContent = displayValue;
        }
    });
});
