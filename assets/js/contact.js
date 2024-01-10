function submited() {
  // Deklarasi Variabel
  const inputName = document.getElementById("name").value;
  const inputEmail = document.getElementById("email").value;
  const inputPhone = document.getElementById("phone").value;
  const inputSubject = document.getElementById("subject").value;
  const inputMessage = document.getElementById("message").value;

  // Validasi & Menampilkan data pada email & console
  if (inputName == "") {
    alert("Name is required!");
  } else if (inputEmail == "") {
    alert("Email is required!");
  } else if (!inputPhone) {
    alert("Number Phone is required!");
  } else if (inputSubject == "") {
    alert("Subject is required!");
  } else if (inputMessage == "") {
    alert("Message is required!");
  } else {
    console.info(
      `Name : ${inputName}\nEmail : ${inputEmail}\nPhone : ${inputPhone}\nSubject : ${inputSubject}\nMessage : ${inputMessage}`
    );

    const emailReceiver = `malikmhdi05@gmail.com`;

    let a = document.createElement("a");
    a.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailReceiver}&su=${inputSubject}&body=Hallo, nama saya ${inputName}, ${inputMessage}, jika berkenan bisa hubungi saya ke Email ${inputEmail} atau nomor Whatsapp ${inputPhone}`;
    a.click();
  }
}
