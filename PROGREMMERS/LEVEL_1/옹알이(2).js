function solution(babbling) {
    var answer = 0;
    var B_babbling = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(word => {
        let isValid = true;

        // 연속된 발음이 있는지 확인
        B_babbling.forEach(bab => {
            if (word.includes(bab.repeat(2))) {
                isValid = false;
            }
        });

        if (isValid) {
            // 유효한 발음을 모두 제거
            B_babbling.forEach(bab => {
                word = word.split(bab).join(' ');
            });
            // 공백 제거 후 문자열이 빈 문자열인지 확인
            if (word.trim() === '') {
                answer++;
            }
        }
    });

    return answer;
}

