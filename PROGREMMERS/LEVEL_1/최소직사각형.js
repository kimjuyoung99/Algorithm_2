function solution(sizes) {
    let max= 0, maxW = 0, maxL=0;
    let flag = -1; //가로일땐 0 세로일땐 1 
    for(let i = 0 ; i < sizes.length ; i++){
        for(let j = 0 ; j < sizes.length ; j++){
            if(max < sizes[i][j]){
                max = sizes[i][j];
                if (j == 0) {
                    flag = 0;
                    maxW = max;
                }
                else if(j == 1) {
                    flag= 1;
                    maxL = max;
                }
            }
        }
    }
    console.log('max : ', max);
    console.log('flag : ', flag);
    console.log('maxW : ', maxW);
    console.log('maxL : ', maxL);

    //최댓값 가로인 경우 : 세로 기준 돌림
    if(flag == 0){
        for(let i = 0 ; i < sizes.length ; i++){
            if(sizes[i][1] > sizes[i][0] && sizes[i][1] <= max){
                console.log("이거 바꿀 예정 : ", sizes[i]);
                let change = sizes[i][1];
                sizes[i][1] =  sizes[i][0];
                sizes[i][0] = change;
                console.log("이거 바꿀 예정 : ", sizes[i]);
               //값을 바꿔줌
            }
        }
        maxL = 0;
        for(let i = 0 ; i < sizes.length ; i++){
            if(maxL < sizes[i][1]) maxL = sizes[i][1];
        }
    }
    //최댓값 세로인 경우 : 가로 기준 돌림
    else if(flag == 1){
        console.log("들어욤");
        for(let i = 0 ; i < sizes.length ; i++){
            //가로가 세로보다 클 경우
            if(sizes[i][0] > sizes[i][1] && sizes[i][0] <= max){
                console.log("이거 바꿀 예정 : ", sizes[i]);
                let change = sizes[i][1];
                sizes[i][1] =  sizes[i][0];
                sizes[i][0] = change;
                console.log("이거 바꿀 예정 : ", sizes[i]);
               //값을 바꿔줌
            }
        }
        maxW = 0;
        console.log("바꾼배열 : ",sizes);
        for(let i = 0 ; i < sizes.length ; i++){
            if(maxW < sizes[i][0]) maxW = sizes[i][0];
        }
    }
    console.log("가로최대 : ", maxW, "세로최대 : ", maxL);
    return maxL * maxW;
}
let sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
console.log(solution(sizes));
//1. 일단 기준점을 잡자. 기준점 : 모든 배열의 요소에서 가장 큰 값을 가진 인덱스.(max)
//2. 이 인덱스가 가로면 세로가 기준, 세로면 가로가 기준이다.(max 값을 가진 인덱스는 이미 최댓값이 정해졌기 때문)
//3. 가로가 기준인 경우(가로 인덱스에 가장 큰 값이 있을 경우) 세로를 쭉 돌린다.
//4. 이때, 가로값보다 세로 값이 더 큰 경우 뒤집어서 max 값과 비교해준다. max 보다 작을 경우 가로 세로 change
//5. 세로 부분 index 한바퀴 돌려서 change 한 다음, 최종 세로 부분 배열 천천히 돌면서 가장 높은 값 찾음
//6. 이렇게 구한 최대 W과 L를 곱해준다.