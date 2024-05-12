function solution (s){
    let answer = "YES";
    s = s.toLowerCase();//모두 소문자 변환
    reverse_s = s.split('').reverse().join('');
    if(reverse_s != s) return answer = "NO";
    else return answer;
}

let str ="gooG";
console.log(solution(str));