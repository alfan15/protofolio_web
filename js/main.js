// Inisialisasi Firebase (TAMBAHKAN DATA ANDA SENDIRI)
var config = {
  apiKey: "xxxxx",
  authDomain: "xxxxx",
  databaseURL: "xxxxx",
  projectId: "xxxxx",
  storageBucket: "xxxxx",
  messagingSenderId: "xxxxx"
};
firebase.initializeApp(config);

// Koleksi pesan referensi
var messagesRef = firebase.database().ref('messages');

// Dengarkan pengiriman formulir
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Menyerahkan formulir
function submitForm(e){
  e.preventDefault();

// Dapatkan nilai
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

 // Tampilkan peringatan
  document.querySelector('.alert').style.display = 'block';

 // Sembunyikan peringatan setelah 3 detik
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

// Hapus formulir
  document.getElementById('contactForm').reset();
}

// Berfungsi untuk mendapatkan nilai form
function getInputVal(id){
  return document.getElementById(id).value;
}

// Simpan pesan ke firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}