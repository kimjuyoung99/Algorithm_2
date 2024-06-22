function solution(number, limit, power) {
    var answer = 0;
    
    for(let i = 1 ; i <= number ; i++){
        let num = divisor(i);
        if(num > limit) answer += power;
        else answer += num;
    }
    function divisor(num){
        let count =0;
        for(let i = 1 ; i*i <= num ; i++){
             if(num % i === 0) {
                if(i * i === num) count += 1;
                else count += 2;
            }
        }
        return count;
    }
    return answer;
}
//가장 중요한건 약수 구하는 함수를 최적화 하는 것. -> 쌩으로 돌리면 시간초과됨