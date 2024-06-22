//front, back 두개 배열 써서 나중에 concat으로 합쳐줘야 함
//안 그럼 런타임 에러 남!!
function solution(food){
    var front = [];
    var back = [];
    for(let i = 1 ; i < food.length ; i++){
        let count = Math.floor(food[i]/2);
        if(count > 0){
            for(let j = 0 ; j < count ; j++){
              front.push(i);
              back.unshift(i);
            }
        }
    }
    front.push(0);
    var answer = front.concat(back);
    return answer.join('');
}
console.log(solution([1, 3, 4, 6]));  // "1223330333221"

//실패한 이유 : 논리적오류가 너무 많다. 
//그리고 하나의 배열에 push,unshift 써버리면 런타임 에러 남
//front, back 두개 배열 써서 나중에 concat으로 합쳐줘야 함
//양옆으로 바로 넣는게 아니라 왼쪽, 오른쪽 방면 각각 반복문으로 해결하는게 효율적이란다.
// function solution(food) {
//     var answer = [0];
//     console.log(answer);
//     for(let i = 3 ; i >= 1 ; i--){
//         if (Math.floor(food[i] / 2) >= 1){
//             console.log("작동 : ", i);
//             Footseting(Math.floor(food[i] / 2), i);
//         } 
//     }
//     function Footseting(num, index){
//         for(let i = 1 ; i <= num ; i++){
//             answer.push(index);
//             answer.unshift(index);
//         }
//         console.log("삽입 작업 후 : ", answer);
//     }

//     console.log(answer.join(''));
//     return answer.join('');
// }

//food 배열 index 3,2,1 을 돈다(거꾸로 돌아야 함!)
//일단 resule 배열을 0 하나 넣어놓고, sift(왼쪽부터 삽입)와 push(오른쪽부터 삽입)로 진행한다.
//삽입 조건1) 이때 /2를 해서 2 이상 나와야 함.(num)
//2) num만큼 반복문 돌려서 shift, push 해준다. 이떄 숫자 뭘로? index 번호로!(인덱스 번호가 곧 칼로리임)
//answer 배열을 문자열로 만들어준다. join 함수 (answer.join('')) 이후 return 