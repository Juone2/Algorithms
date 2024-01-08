function solution(num_list, n) {
    const result = num_list.slice(n - 1, num_list.length);
    return result;
}

// 다른 사람 좋은 풀이
// 똑같은 slice인데 나만 어렵게 생각 했나봄
function solution(num_list, n) {
  return num_list.slice(n - 1);
}
