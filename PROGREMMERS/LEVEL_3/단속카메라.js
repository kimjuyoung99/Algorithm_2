const solution = (routes) => {
    let camera = -40000;//카메라 위치는 가장 낮은 수로 가정
    let cnt = 0;//카메라 갯수

    routes.sort((a, b) => a[1] - b[1]);//차량의 각 경로 정렬

    for(let i of routes){
        if(i[0] > camera){
            cnt++;
            camera = i[1];//해당 차량의 진출 지점에 설치한다. 
            // 왜냐하면 해당 차량을 포착 하면서 + 다음 차량도 포착할 가능성 높게
        }
    }
    console.log("cnt : "+ cnt);
    return cnt;
}
const routes = [[-20,-15], [-14,-5], [-18,-13], [-5,-3]];
const result = solution(routes);
console.log("카메라 개수 : "+ result);