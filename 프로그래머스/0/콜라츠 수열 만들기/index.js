function solution(n) {
  let answer = [];
  let int = n;
  while(int !== 1) {
    answer.push(int);
    if ( int % 2 === 0) {
      int /= 2
    }
    else {
      int = 3 * int + 1;
    }
  }
  answer.push(1);
  return answer;
}