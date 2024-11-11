// https://school.programmers.co.kr/learn/courses/30/lessons/120869
function solution(spell, dic) {
    let answer = 0;
    let spellSort = new Set(spell);
    
    return dic.some(word =>
                   (new Set(word).size === spellSort.size)  &&
                    ([...spellSort].every(char => word.includes(char)))
                    ) ? 1 : 2;
}
//다른 풀이
function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');
    
    for (let word of dic) {
        if (word.length !== spell.length) continue;
        
        if (sortedSpell === [...word].sort().join('')) {
            return 1;
        }
    }
    
    return 2;
}