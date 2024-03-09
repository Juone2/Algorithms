function solution(arr, intervals) {
    const [[a, b], [c, d]] = intervals;
    const result = [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
    return result;
}