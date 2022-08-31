// Description:

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let calcBMI = weight / (height ** 2);
    switch(true) {
        case calcBMI <= 18.5:
            return "Underweight";
        case calcBMI <= 25:
            return "Normal";
        case calcBMI <= 30:
            return "Overweight";
        case calcBMI > 30:
            return "Obese";
    }
}

bmi(80, 1.80)