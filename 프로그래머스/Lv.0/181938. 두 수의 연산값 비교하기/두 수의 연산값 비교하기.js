function solution(a, b) {
    
    let sumab = Number(`${a}${b}`);
    let xab = 2 * a * b;
    let result = sumab > xab ? sumab : xab;
    return result;
}