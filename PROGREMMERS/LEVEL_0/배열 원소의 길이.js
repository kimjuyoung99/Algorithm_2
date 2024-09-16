// https://school.programmers.co.kr/learn/courses/30/lessons/120854
function solution(strlist) {
    var answer = [];
    
    return strlist.map(i => i.length);
}
//다음부턴 map을 최대한 활용하자! for 생각없이 쓰지 말기
// function solution(strlist) {
//     var answer = [];
//     for(let i = 0 ; i < strlist.length ; i++){
//         answer.push(strlist[i].length);
//         console.log(answer);
//     }
//     return answer;
// }