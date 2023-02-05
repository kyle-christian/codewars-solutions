// son age * 2 - father age absolute value

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs((sonYearsOld * 2) - dadYearsOld)
}

//alternative

const twiceAsOldAlt = (d, s) => Math.abs(d - 2 * s);