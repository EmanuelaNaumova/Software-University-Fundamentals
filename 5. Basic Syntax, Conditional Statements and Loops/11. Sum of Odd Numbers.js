function sumOfOddNumbers(limit) {
    
    let sum = 0;

    for (let n = 1; n <= limit * 2; n++) {
        if (n % 2 !== 0) {
            console.log(n);
            sum += n;
        }
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
