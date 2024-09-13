function solution(chicken) {
    if (chicken < 10){
        return 0;
    }
    let 기본쿠폰 = Math.floor(chicken/10);
    let 서비스쿠폰 = chicken%10;
    
    return 기본쿠폰 + solution(기본쿠폰 + 서비스쿠폰);
    
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120884