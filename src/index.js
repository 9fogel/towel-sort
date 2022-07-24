
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let newArr = [];
    if (matrix === undefined) {
        return [];
    } else {
        for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            newArr.push(...matrix[i]);
        } else if (i % 2 !== 0) {
            let reverseArr = []; 
            for (let k = 0; k < matrix[i].length; k++) {
            
            reverseArr.unshift(matrix[i][k]);
            console.log(reverseArr)
            }
            newArr.push(...reverseArr);
        }
    }
    return (newArr);
    }
    
}
