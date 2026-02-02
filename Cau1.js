let n = +prompt("Nhập vào số nguyên n: ");

if (n % 2 === 0) {
  alert(`Số [${n}] là số chẵn`);
} else {
  alert(`Số [${n}] là số lẻ`);
}

if (n > 0) {
  alert(`Số [${n}] là số dương`);
  for (let i = 1; i <= n; i++) {
    alert("Kết quả hiển thị trong console(F12)");
    console.log(`Các số từ 1 đến ${n} là: ${i}`);
  }
} else if (n < 0) {
  alert(`Số [${n}] là số âm`);
  alert("Giá trị không hợp lệ để hiển thị dãy số");
} else {
  alert(`Số [${n}] = 0`);
  alert("Giá trị không hợp lệ để hiển thị dãy số");
}
