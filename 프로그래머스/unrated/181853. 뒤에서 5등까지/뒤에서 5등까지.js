function solution(num_list) {
    const result = num_list.sort((a, b) => a - b).slice(0, 5);
    return result;
}