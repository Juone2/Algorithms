function solution(arr) {
    const result = arr.filter((item, idx) => item != arr[idx + 1])
    return result;
}