// https://school.programmers.co.kr/learn/courses/30/lessons/120875
function solution(dots) {
    function getSlope(dot1,dot2){
        return((dot2[1]-dot1[1]) / (dot2[0]-dot1[0]));
    }
    if(getSlope(dots[0],dots[1]) === getSlope(dots[2],dots[3]) ||
      getSlope(dots[0],dots[2]) === getSlope(dots[1],dots[3]) ||
       getSlope(dots[0],dots[3]) === getSlope(dots[1],dots[2])
      ) return 1;
    
    return 0; 
}
