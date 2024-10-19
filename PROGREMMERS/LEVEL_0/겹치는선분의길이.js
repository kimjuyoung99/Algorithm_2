//https://school.programmers.co.kr/learn/courses/30/lessons/120876
function solution(lines) {
    const points = new Map();
    
    for (const [start, end] of lines) {
        for (let i = start; i < end; i++) {
            const key = i;
            points.set(key, (points.get(key) || 0) + 1);
        }
    }
    
    let answer = 0;
    for (const count of points.values()) {
        if (count >= 2) {
            answer++;
        }
    }
    
    return answer;
}