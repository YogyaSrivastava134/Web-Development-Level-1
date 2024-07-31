document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    // Function to handle input (both button clicks and keyboard input)
    function handleInput(value) {
        if (value === 'C') {
            display.textContent = '';
        } else if (value === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error';
            }
        } else {
            display.textContent += value;
        }
    }
    
    // Button click event listeners
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.getAttribute('data-value');
            handleInput(value);
        });
    });
    
    // Keydown event listener for keyboard support
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        
        if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            handleInput(key);
        } else if (key === 'Enter' || key === '=') {
            handleInput('=');
        } else if (key === 'Backspace') {
            display.textContent = display.textContent.slice(0, -1);
        } else if (key === 'Escape') {
            handleInput('C');
        }
    });
});
