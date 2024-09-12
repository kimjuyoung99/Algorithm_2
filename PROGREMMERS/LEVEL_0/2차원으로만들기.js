function solution(num_list, n) {
    var answer = [];
    for(i = 0 ; i < num_list.length ; i+=n){
        answer.push(num_list.slice(i,i+n));
    }
    return answer;
}
//https://school.programmers.co.kr/learn/courses/30/lessons/120842