function solution(rsp) {
    const winning = {
        '0' : '5',
        '2' : '0',
        '5' : '2'
    }
    return [...rsp].map(move => winning[move]).join('');
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120839