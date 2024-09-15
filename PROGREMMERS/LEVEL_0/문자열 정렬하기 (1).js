// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
    let answer = [];
    
    my_string = my_string.replace(/\D/g,'');
    answer = [...my_string].map(Number);
    answer = answer.sort((a,b)=> a-b);//오름차순 정렬
    
    return answer;
}
//1. 문자열에서 숫자 빼고 모두 삭제 -> 정규표현식 사용
//\D: 숫자가 아닌 모든 문자를 나타냄 ([^0-9]와 동일)
//g: 전역 검색을 의미 (모든 일치하는 항목을 찾음)
// 숫자가 아닌 모든 문자를 빈 문자열('')로 대체

//2. 문자열을 배열로 만드는 법 3가지
// str = "12345";
//str.split('').map(Number);
//[...str].map(Number);
//Array.from(str, Number);