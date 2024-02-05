window.onload = () => {
    console.log("loaded");


}

// let arr = [[1, 34, 5, 6], ["a","b","c"],[true, false, true], [[10,290,30],["aa", "bb"]]];

// for (let i = 0; i < arr.length; i++) {

//     for (let j = 0; j < arr[i].length; j++) {
//         // console.log(arr[i][j])
//         for (let k = 0; k < arr[i][j].length; k++) {
//             console.log(arr[i][j][k]);            
//         }        
//     }
// }

// let matrix3d = [
//     [1, 0, 0, 0],
//     [0, 1, 0, 0],
//     [0, 0, 1, 0],
//     [0, 0, 0, 1]
// ];

// console.log("Matrix " + matrix3d[1][1])

// recursion

const arr = [1, 2,[31, 32, 33, [311, 321, 331], 34, 35]]

const recursion = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if( arr[i].length ){
            recursion(arr[i])
        }
    }
}

recursion(arr)