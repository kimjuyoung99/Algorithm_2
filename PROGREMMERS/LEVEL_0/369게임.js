function solution(order) {
    var answer = 0,result = 0;
    answer = String(order).split("");
    console.log(answer);
    
    answer.forEach(i => {
        if(['3','6','9'].includes(i)) result++;
    })
    
    return result;
}
//하나씩 쪼개서 배열로 만든다
//Map 으로 펼쳐서 3으로 나눠 떨어지면 result count


// https://school.programmers.co.kr/learn/courses/30/lessons/120891