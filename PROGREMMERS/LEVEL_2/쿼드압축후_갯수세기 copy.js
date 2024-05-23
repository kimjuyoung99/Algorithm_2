function solution(arr) {
    const n = arr.length;

    function compress(x,y,size){
        const initial = arr[x][y];
        let allSame = true;

        for(let i = x ; i < x+size ; i++){
            //여기서 initial는 검사하는 구역의 첫 번째 값이다!
            for(let j = y; j < y + size ; j++){
                if(arr[i][j] !== initial){
                    allSame = false;
                    break;
                }
            }
            if(!allSame){
                break;
            }
        }

        // 모든 요소가 동일한 값일 경우 (영역이 전부 1이나 0일 경우)
        if (allSame) {
            if (initial === 0)  return [1, 0];  // 영역이 전부 0으로 이루어져 있으면 [0의 개수, 1의 개수]
            else return [0, 1];  // 영역이 전부 1으로 이루어져 있으면 [0의 개수, 1의 개수]     
        }

        // 동일하지 않을 경우 영역을 4개로 분할하여 재귀
        const half = size / 2;
        const topLeft = compress(x,y,half);
        const topRight = compress(x ,y + half, half);
        const bottomLeft = compress(x + half, y, half);
        const bottomRight = compress(x+half, y +half, half);

        return [
            topLeft[0] + topRight[0] + bottomLeft[0] + bottomRight[0],//0의 총 개수
            topLeft[1] + topRight[1] + bottomLeft[1] + bottomRight[1],//1의 총 개수
        ];
    }
    return compress(0,0,n);
}

// 예제 사용
const arr1 = [
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1]
];
console.log(solution(arr1)); // 출력: [4, 9]

const arr2 = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1]
];
console.log(solution(arr2)); // 출력: [10, 15]
