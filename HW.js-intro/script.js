const subdigits = (x) => {
    const strNum = x.toString();
    const halfLength = strNum.length / 2;

    const firstHalfSum = strNum.slice(0, halfLength).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    const secondHalfSum = strNum.slice(halfLength).split('').reduce((acc, curr) => acc + parseInt(curr), 0);

    return (firstHalfSum % 2 === 0 && secondHalfSum % 2 === 0) ? 'Lucky' : 'Unlucky';
}

console.log(subdigits(123871));