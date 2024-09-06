https://school.programmers.co.kr/learn/courses/30/lessons/120834
function solution(age) {
    return String(age).split('').map(char => String.fromCharCode(char.charCodeAt(0)+49)).join('');
}