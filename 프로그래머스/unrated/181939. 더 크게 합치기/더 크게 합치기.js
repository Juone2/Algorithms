function solution(a, b) {
    let result = Number(String(b) + String(a)) > Number(String(a) + String(b))
            ? Number(String(b) + String(a))
            : Number(String(a) + String(b))
    return result;
}