function solution(hp) {
    let result = 0;
    result+=parseInt(hp/5);
    hp=hp%5;
    result+=parseInt(hp/3);
    result+=parseInt(hp%3);    
// console.log("result : ",result, "hp : ",hp);
    return result;
}
//Math.floor() 쓰는게 더 좋다고 한다
//좋은 풀이 : 
// function solution(hp) {
//     return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
// }


// https://school.programmers.co.kr/learn/courses/30/lessons/120837