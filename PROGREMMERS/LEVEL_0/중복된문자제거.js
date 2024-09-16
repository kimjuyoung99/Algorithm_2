// https://school.programmers.co.kr/learn/courses/30/lessons/120888
function solution(my_string) {
    return [...new Set(my_string)].join('');
}
//중복제거할땐 Set 쓰자
//includes() 사용하는 경우
// function solution(my_string) {
//     let answer = '';
//     for (let char of my_string) {
//         if (!answer.includes(char)) {
//             answer += char;
//         }
//     }
//     return answer;
// }
