const SelectSorted = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            arr[minIndex] > arr[j] ? minIndex = j : '';
        }
        if (minIndex !== i) {
            let temp;
            temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

const solution = (array, commands) => {
    let result = [];
    for ( let i = 0; i < commands.length; i++) {
        const [ start, end, k] = commands[i];
        const sorted = array.slice(start - 1, end);
        result.push(SelectSorted(sorted)[k - 1]);
    }
    return result;
}