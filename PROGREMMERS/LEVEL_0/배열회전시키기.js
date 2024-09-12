// https://school.programmers.co.kr/learn/courses/30/lessons/120844
function solution(numbers, direction) {
    let flag = 0;
    if (direction == "right"){
        // flag = numbers.pop();
        numbers.unshift(numbers.pop());
    }
    else {
        // flag = numbers.shift();
        numbers.push(numbers.shift());
    }
    return numbers;
}