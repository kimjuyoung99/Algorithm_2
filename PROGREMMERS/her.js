function solution(arr){
    var answer = [];
    let arr2 = [];
    let len = arr.length, len2 = arr[0].length, count = 0;

    while(count != len2){
        let sum = 0;
        for(let i = 0 ; i < len ; i++) arr2.push(aa(arr[i],len2, count));
        sum = bb(arr2);
        answer.push(sum);
        count++;
        arr2 = [];
    }
    // console.log("answer : ",answer);
    return answer;
}
function aa(arr, len2,count){
    for(let i = 0 ; i < len2 ; i++){
        if(arr[i] == count) return i;
    }
}
function bb(arr2){
    let sum = 0;
    console.log(arr2);
    for(let i = 0 ; i < arr2.length ; i++){
        if(arr2[i] > arr2[i+1]){
            sum += arr2[i] - arr2[i+1];
        }
        else if(arr2[i] <= arr2[i+1]) sum += arr2[i+1] - arr2[i];
    }
    return sum;
}



const arr = [[0,1,2],[0,1,2]];
solution(arr);


// console.log(len2);
// for(let i = 0 ; i < len2 ;i++){
//     let sum = 0, flag = -1;
//     for(let j = 0 ; j < len ; j++){
//         if(i == 0 && i == arr[i][j]) flag = j;
//         else if (i == arr[i][j]) {
//             if(flag - j > 0) sum+= (flag - j);
//             else sum += (j - flag); 
//             flag = j;
//         }
//     }
//     console.log(i," 번째 루프");
//     console.log("answer : ", answer);
//     console.log("sum : ", sum);
//     answer.push(sum);
// }
// console.log(answer);
// return answer;