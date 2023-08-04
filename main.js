const arrEle = (arr) => {


    // Sắp xếp mảng theo thứ tự giảm dần
    let sortedArr = arr.sort((a, b) => {
        return b - a;
    });
    console.log(sortedArr);


    // Lấy phần tử lớn thứ hai trong mảng
    let arrEle = sortedArr[1];

    return arrEle;

    // tính tổng của các số chẵn
    const sumNumber = (arr) => {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (arr[i] % 2 === 0) {
            }
        }

        return sum;
    }
}
const numbers = [4, 2, 9, 7, 5, 8];
console.log(arrEle(numbers));
console.log(sumNumber(numbers)); 