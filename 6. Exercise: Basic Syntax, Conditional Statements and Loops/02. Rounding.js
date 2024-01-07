function rounding (value, num) {
    if (num > 15){
        num = 15;
    }

    let fixedNum = value.toFixed(num);
    console.log(parseFloat(fixedNum));

}
rounding (3.1415926535897932384626433832795,2);
rounding (10.5,3);
