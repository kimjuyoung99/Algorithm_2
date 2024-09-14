function solution(array) {
    var answer = [];
    answer.push(Math.max(...array),array.indexOf(Math.max(...array)));
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120899