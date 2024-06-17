function solution(answers) {
    var result = [];

    patterns = [
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    const scores = [0,0,0];

    //여기가 좀 어렵다!!
    for(let i = 0 ; i < answers.length ; i++){
        patterns.forEach((pattern, index) => {
            if(answers[i] === pattern[i%pattern.length]){
                scores[index]++;
            }
        });
    }

    const maxScore = Math.max(...scores);

    const result = [];

    scores.forEach((score,index) => {
        if(score == maxScore){
            result.push(index + 1);
        }
    });

    //마지막 단계 : 동점일 경우 오름차순 배열
    return result.sort((a,b) => a - b);
}
// 1. 각 수포자의 답안 패턴을 정의한다.
// 2. for문을 이용하여 정답 배열과 각 수포자의 답안 패턴을 비교하여 맞힌 문제의 개수를 score배열에 넣는다.
// 3. 점수 배열을 돌려서 가장 높게 맞은 사람의 번호를 출력한다(동점일 경우 오름차순 예외처리)