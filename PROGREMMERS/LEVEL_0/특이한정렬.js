function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const distA = Math.abs(a - n);
        const distB = Math.abs(b - n);
        if (distA === distB) {
            return b - a;
        }
        return distA - distB;
    });
}

//return  distA - distB; 여기가 이해가 안가. (a,b) 이면 a - b 나 b - a만 시도할 수 있는거 아니야? distA - distB이 어떻게 적용되는거지?


// 네, 좋은 질문입니다. 이 부분에 대해 더 자세히 설명해 드리겠습니다.

// sort() 메소드의 비교 함수에서 return distA - distB;가 어떻게 작동하는지 이해하기 위해서는 JavaScript의 sort() 메소드의 동작 방식을 알아야 합니다.

// JavaScript의 sort() 메소드:
// 비교 함수 (a, b) => {...}는 두 요소 a와 b를 비교합니다.
// 이 함수가 음수를 반환하면 a를 b보다 앞에 정렬합니다.
// 양수를 반환하면 b를 a보다 앞에 정렬합니다.
// 0을 반환하면 a와 b의 순서를 변경하지 않습니다.
// distA - distB의 의미:
// distA는 a와 n 사이의 거리입니다.
// distB는 b와 n 사이의 거리입니다.
// distA - distB가 음수이면, a가 n에 더 가깝다는 의미이므로 a를 앞에 정렬합니다.
// distA - distB가 양수이면, b가 n에 더 가깝다는 의미이므로 b를 앞에 정렬합니다.