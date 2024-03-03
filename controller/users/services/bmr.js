const bmr =  ({sex, currentWeight, height, levelActivity}, age) => {
    let bmr;
    if (sex === 'male') {
        bmr = (10 * currentWeight + 6.25 * height - 5 * age + 5) * levelActivity;
    } else if (sex === 'female') {
        bmr = (10 * currentWeight + 6.25 * height - 5 * age - 161) * levelActivity;
    }
    return bmr;
};

module.exports = bmr