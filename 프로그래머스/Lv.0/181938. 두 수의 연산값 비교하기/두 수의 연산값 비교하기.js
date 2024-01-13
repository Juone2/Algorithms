function solution(a, b) {
    
    let sumab = Number(`${a}${b}`);
    let xab = 2 * a * b;
    let result = sumab > xab ? sumab : xab;
    return result;
}

// 다른 사람 풀이
// a+""+b+"" -> 문자열 변환 
function solution(a, b) {
    let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
}

