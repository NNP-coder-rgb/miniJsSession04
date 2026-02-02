let countFizz = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(`Các số chia hết cho 3 là: ${i} Fizz`);
    if (i % 5 === 0) continue;
    countFizz += i;
  } else if (i % 5 === 0) {
    console.log(`Các số chia hết cho 5 là: ${i} Fizz`);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(`Các số chia hết cho 3 và 5 là: ${i} FizzBuzz`);
  } else {
    console.log(i);
  }
}

console.log("Tổng các số đã in ra chữ Fizz là: ", countFizz);
