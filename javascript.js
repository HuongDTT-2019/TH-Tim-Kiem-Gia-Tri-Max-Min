function findMin(arr) {
    let min=arr[0];
    for (let i=0;i<arr.length;i++){
        if (arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
function findMax(arr){
    let max=arr[0];
    for (let i=0;i<arr.length;i++){
        if (arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
function displayArr(arr){
    let count=10;
    for (let i=0;i<arr.length;i++){
       if(i===count){
           document.write("<br>");
           count=count+10;
       }
       document.write(arr[i]+" ");
    }

}
let nums=[];
for (let i=0;i<100;i++){
    nums[i]=Math.floor(Math.random()*101);
}
console.log(nums);
displayArr(nums);
document.write("<br>");

let min_values=findMin(nums);
document.write("Min is: "+ min_values);
document.write("<br>");

let max_values=findMax(nums);
document.write("Max is: "+ max_values);