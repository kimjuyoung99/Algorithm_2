function solution(my_string, s, e) {
    var answer;
    var part1 = my_string.slice(0,s);
    var part_reverse = my_string.slice(s,e+1);
    var part2 = my_string.slice(e+1);

    part_reverse=part_reverse.split('').reverse().join('');
    answer = part1 + part_reverse + part2;

    return answer;
}