// my solution
function solution(a, b) {
    let result = Number(String(b) + String(a)) > Number(String(a) + String(b))
            ? Number(String(b) + String(a))
            : Number(String(a) + String(b))
    return result;
}

// the otehr solution
// Math.max -> 입력 값 중 큰 값 반환
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}
