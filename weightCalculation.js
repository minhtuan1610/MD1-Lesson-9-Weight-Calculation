function calculateBMI(x) {
    let a = document.getElementById("weight").value;
    let w = parseFloat(a);
    let BMI;
    let h = parseFloat(x);
    console.log(w);
    console.log(h);
    BMI = w / (h * h);
    console.log(BMI);
    return BMI;
}

function classifyBMI(x) {
    let BMI = calculateBMI(x);
    if (BMI < 18) {
        document.getElementById("result").innerHTML = "Underweight";
    } else if (BMI < 25.0) {
        document.getElementById("result").innerHTML = "Normal";
    } else if (BMI < 30.0) {
        document.getElementById("result").innerHTML = "Overweight";
    } else {
        document.getElementById("result").innerHTML = "Obese";
    }
}
