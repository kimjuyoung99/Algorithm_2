function solution(brown, yellow) {
    var answer = [];
    var Ybox = [];
    let bw = 0, bl = 0;

   // yellow의 약수 쌍을 찾아서 확인
    for (let i = 1; i <= Math.sqrt(yellow); i++) {
        if (yellow % i === 0) {
            let j = yellow / i;
            let Bw = j + 2;
            let Bl = i + 2;
            if (2 * (Bw + Bl - 2) === brown) {
                answer = [Bw, Bl];
                break;
            }
        }
    }
    
    
    return answer;
}

// 주의할 부분 : 6,7라인에서  i = yellow 이 아니라  i = yellow - 1 로 두면 test case 1,2를 만족하지 못한다 주의!
// 1. 우선 yellow를 기준으로, 곱해서 yellow 의 수가 나오는 경우의 수를 배열로 구한다. 
// -> yellow가 24면  [ [ 6, 4 ], [ 8, 3 ], [ 12, 2 ] ] (반대의 경우는 안해줌. 가로가 긴 기준으로만)
// 2. 여기에서 갈색은, 바깥으로 감싸져 있는 구조니까 yellow의 가로 + 2 세로 + 2 개이다. 거기에 넓이는 - yellow의 넓이
// 이 조건을 만족하는 애들을 찾는다.
// -> y = [4,6] 일 경우, b 의 가로 세로 길이는 6,8 이다.(그래야 감쌀 수 있으니까)
// 3. 이때 b의 넓이는 6 * 8 = 48 , 여기서 yellow넓이가 안에 있으니 y넓이만큼을 빼준다. 48 - 24 = 24
// 4. 조건에 b = 24 와 y = 24 모두 부합함으로 return 값은 [8,6] 이다. (가로 > 세로 기준)