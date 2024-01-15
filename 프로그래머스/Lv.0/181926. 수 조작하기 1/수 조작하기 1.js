function solution(n, control) {
    let result = control.split('').reduce((acc, cur) => {
        switch(cur) {
            case 'w':
                return acc + 1;
            case 's':
                return acc - 1;
            case 'd':
                return acc + 10;
            case 'a':
                return acc - 10;
            default:
                return acc;
        }
    }, n);
    return result;
}

// 다른 사람 풀이
// 로직 분리 굿, split() 말고 [...control]도 좋은 듯 bb
function solution(n, control) {
    return [...control].map(x => setValue(x)).reduce((a, b) => a+b, n);
}
function setValue(s){
    return s==="w" ? 1 : s==="s" ? -1 : s==="d" ? 10 : -10;
}
