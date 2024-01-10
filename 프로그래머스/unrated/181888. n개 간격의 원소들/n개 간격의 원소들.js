function solution(num_list, n) {
    const result = num_list.filter((_, idx) => idx % n === 0);
    return result;
}