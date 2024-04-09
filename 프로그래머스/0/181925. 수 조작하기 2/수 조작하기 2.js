function solution(numLog) {
    const object = {
        '1': 'w', 
        '-1': 's', 
        '10': 'd', 
        '-10': 'a'
    };

    return numLog.slice(1).map((item, idx) => {
        return object[item - numLog[idx]]
    }).join('')
}