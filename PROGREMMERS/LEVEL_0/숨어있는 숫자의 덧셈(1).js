function solution(my_string) {
    let answer = 0;
    for(let i = 0 ; i < my_string.length ; i++)
        if(my_string[i] >= '0' && my_string[i] <= '9' ) answer+=parseInt(my_string[i]);
    return answer;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120851