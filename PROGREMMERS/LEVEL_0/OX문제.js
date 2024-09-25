// https://school.programmers.co.kr/learn/courses/30/lessons/120907
//방법1
function solution(quiz) {
    return quiz.map(q => {
        const [expression, result] = q.split('=');
        return eval(expression) === Number(result.trim()) ? 'O' : 'X';
    });
}
//구조 분해 할당을 이용하여 '=' 기준으로 나눈다. (["3 - 4", "-3"])
// eval 함수 : JavaScript에서 문자열로 표현된 JavaScript 코드를 실행하는 함수
//trim() : 문자열 앞뒤의 공백(스페이스, 탭, 줄바꿈 등)을 모두 제거

//방법2
function solution(quiz) {
    var answer = [];
    
    for (let equation of quiz) {
        let [left, right] = equation.split('=');
        left = left.trim();
        right = right.trim();
        
        let result;
        if (left.includes('+')) {
            let [x, y] = left.split('+').map(num => parseInt(num));
            result = x + y;
        } else {
            let [x, y] = left.split('-').map(num => parseInt(num));
            result = x - y;
        }
        
        answer.push(result === parseInt(right) ? "O" : "X");
    }
    
    return answer;
}


