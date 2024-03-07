function solution(my_string) {
    const length = my_string.length;
    return [...my_string].reduce((acc, _, idx) => {
        const result = my_string.slice(idx, length);
        return [...acc, result]
    }, []).sort();
}