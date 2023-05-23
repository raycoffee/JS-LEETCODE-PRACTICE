/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
    return function (x) {

        return functions.reduceRight((a, b) => {
            let sum = b(a)
            return sum
        }, x)

    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */