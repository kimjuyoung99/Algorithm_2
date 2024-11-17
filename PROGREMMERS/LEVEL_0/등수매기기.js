function solution(score) {
    let average = score.map(([a,b])=> (a+b)/2);
    console.log(average);
    let rank = new Array(score.length).fill(1);
    console.log(rank);
    
    average.forEach((a,index) =>
          average.forEach((b, index2) => {
        if(a < b) rank[index]++;
    })
    )
    
    return rank;
}
// https://school.programmers.co.kr/learn/courses/30/lessons/120882