function solution(n, k) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    if (i % k === 0) {
      result.push(i);
    }
  }
  return result;
}

// 다른 사람 풀이
// i의 초기 값을 k로 두고 i+=k 하는 방법도 있다~
function solution(n, k) {
    var answer = [];
    for(let i = k ; i <= n; i+=k){
        answer.push(i)
    }
    return answer;
}
