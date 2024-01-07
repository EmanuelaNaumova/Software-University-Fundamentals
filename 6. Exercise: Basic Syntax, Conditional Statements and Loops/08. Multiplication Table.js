function multiplicationTable(num) {
    
    for (let i = 1; i <= 10; i++) {
      const result = num * i;
      console.log(`${num} X ${i} = ${result}`);
    }
  }
multiplicationTable (2);
multiplicationTable (5);