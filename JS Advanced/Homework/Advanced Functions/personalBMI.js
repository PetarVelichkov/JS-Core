function personalBMI(name, age, weight, height) {
    let person = {};
    if (!person[name]) {
        person.name = name;
        person.personalInfo = {
            age: age,
            weight: weight,
            height: height
        };
        height = height / 100;
        person.BMI = Math.round(weight / (height * height));
        let status;
        if (person.BMI < 18.5) {
            status = 'underweight';
        } else if (person.BMI < 25) {
            status = 'normal';
        } else if (person.BMI < 30) {
            status = 'overweight';
        } else if (person.BMI >= 30) {
            status = 'obese';
        }
        person.status = status;
        if (status === 'obese') {
            person.recommendation = 'admission required';
        }
    }
    return person;
}
console.log(personalBMI('Honey Boo Boo', 9, 57, 137));
