function solution(n) {
    const arr = Array(n).fill(Array(n).fill(0));
    
    return arr.map((item, idx) => {
        return item.map((item2,idx2) => item2 = idx == idx2 ? 1 : 0);
    });

}

// 다른 사람 풀이
굳이 map 안 써도 이렇게 해결도 가능..
function solution(n) {
  const answer = Array.from(Array(n), () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    answer[i][i] = 1;
  }

  return answer;
}
