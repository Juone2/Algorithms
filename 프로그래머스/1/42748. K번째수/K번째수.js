function solution(array, commands) {
    let result = [];
    for (let i = 0; i < commands.length; i++) {
        let list = array.slice(commands[i][0] - 1, commands[i][1]);
        let sorted = list.sort((a, b) => a - b);
        result.push(sorted[commands[i][2] - 1]);
    }
    return result;
}