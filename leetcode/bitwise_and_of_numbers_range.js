/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    if (m == 0) return 0;
    var move = 1;
    while (m != n) {
        m >>= 1;
        n >>= 1;
        move <<= 1;
    }
    return m * move;
};

console.log(rangeBitwiseAnd(5, 7));
