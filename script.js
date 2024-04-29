//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {

	const counterElement = document.getElementById('counter');
    
    const incrementButton = document.getElementById('incrementBtn');
    
    incrementButton.addEventListener('click', function() {
        let currentValue = parseInt(counterElement.textContent);
        
        alert(currentValue);
        
        currentValue++;
        
        counterElement.textContent = currentValue;
    });
});