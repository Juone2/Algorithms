  const solution = (binomial) => {
    const [a, op, b] = binomial.split(" ");
    return op === "+" ? +a + +b : op === "-" ? a - b : a * b
  };

// 다른 풀이 1
const ops = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

function solution(binomial) {
  const [a, op, b] = binomial.split(' ');
  return ops[op](+a, +b);
}

// 다른 사람 풀이 2
const solution = (binomial) => eval(binomial); 
