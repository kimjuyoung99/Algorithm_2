function solution(queue1, queue2) {
    const totalQueue = queue1.concat(queue2);
    const totalSum = totalQueue.reduce((a, b) => a + b, 0);
    
    if (totalSum % 2 !== 0) return -1; // 합이 홀수면 나눌 수 없다.
    
    const target = totalSum / 2;
    
    let left = 0;
    let right = queue1.length;
    let currentSum = queue1.reduce((a, b) => a + b, 0);
    const maxOperations = queue1.length * 3; // 2*length번보다 약간 여유있게 설정
    
    let operations = 0;
    
    while (operations <= maxOperations) {
        if (currentSum === target) return operations;
        
        if (currentSum < target) {
            currentSum += totalQueue[right % totalQueue.length];
            right++;
        } else {
            currentSum -= totalQueue[left % totalQueue.length];
            left++;
        }
        operations++;
    }
    
    return -1; // 모든 시도에도 불구하고 해결되지 않으면 -1 반환
}
// 시간복잡도 : O(n)
// 일단 두 큐를 합치고 '슬라이딩윈도우'라는 개념을 이용해서 풀어야 한다.
// 현재 윈도우의 합과 목표값 (target = 우리가 원하는 반반 값) 이 같으면 return
// 현재 합 < 목표 값 : right 포인터 증가 윈도우 확장
// 현재 합 > 목표 값 : left 포인터 증가 윈도우 축소