let miles;
let gallons;
let mpg;
let again = 'y';
let valid = true;

do {
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both entries are invalid.');
    }
    
        while (true) {
            again = prompt('Run application again? (y or n)', 'y')
            if (again === 'n' || again === 'y') {
                break;
            }
            else {
                alert("Please enter 'y' or 'n' only");
                continue;
            }
            
        }
} while (again === 'y');
console.log('Application has exited.');