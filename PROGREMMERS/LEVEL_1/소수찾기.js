function solution(cards1, cards2, goal) {
    let p1 = 0, p2 = 0;
    
    for(let word of goal){
        if(word === cards1[p1] && p1 < cards1.length){
            p1++;
        }
        else if(word === cards2[p2] && p2 < cards2.length){
            p2++;
        }
        else return "No";
    }
    
    return "Yes";
    
}