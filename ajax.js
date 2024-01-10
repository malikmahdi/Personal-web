// Ajax
// sebuah teknik dalam javascript untuk berinteraksi dengan request asynhronous -> ketika mengambil data di Internet

// Syntax
const xhttp = new XMLHttpRequest();

xhttp.open("GET", "urldatayang digunakan", true);
// param 1 : method
// param 2 : url -> tujuan
// param 3 : true or false, true/asynchronous -> berjalan dilayar secara paralel, false/synchronous -> blocking jika proses belum selesai

// Ketika sudah mendapatkan datanya, lalu akan direspon didalam onload
xhttp.onload = () => {
  if (xhttp.status === 200) {
    console.info(xhttp.response);
  } else {
    console.info("Server mereka error");
  }
};

// eror dikita, misal ingin mengambil/fetchin/get data dari url luar, namun internet kita malah mati, maka akan dijalankan onerror
xhttp.onerror = () => {
  console.info("Network error");
};
