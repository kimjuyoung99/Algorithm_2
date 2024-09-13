function solution(box, n) {
    let answer = 1;
    for(let i = 0; i < 3 ; i++) answer *= Math.floor(box[i]/n);
    return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/120845