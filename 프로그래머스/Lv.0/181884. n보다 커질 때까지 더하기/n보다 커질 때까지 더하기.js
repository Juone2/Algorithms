function solution(numbers, n) {
    let result = numbers.reduce((acc, cur) => acc > n ? acc : acc+cur, 0)
    return result;
}