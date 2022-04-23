// Komentar satu baris
document.writeln("<p>Hello World</p>");
// // komentar ini bisa lebih dari satu baris
// // loh, coba saja
document.writeln("<h1>Hello World Lagi</h1>");


document.writeln(100);
document.writeln("<br>");
document.writeln(100.100);
document.writeln("<br>");
document.writeln("<br>");

document.writeln(true);
document.writeln("<br>");
document.writeln(false);

document.writeln("<br>");
document.writeln("<br>");
document.writeln("Abdur Rahman");
document.writeln("<br>");
document.writeln("Member Proggrammer Zaman Now");
document.writeln("\n");


document.writeln("<br>");
document.writeln("<br>");
document.writeln("Nama : " + "Abdur Rahman");
document.writeln("<br>");
document.writeln("Member" + " Channel Proggrammer Zaman Now");



document.writeln("<textarea cols='90' rows='5'>");
document.writeln("Abdur \nRahman \nMaman");
document.writeln("\\Home\\Abdur");
document.writeln("\"Member Proggrammer Zaman Now\"");
document.writeln("\'Belajar Javascript\'");
document.writeln("</textarea>");

document.writeln("<br>");
document.writeln("<br>");


let fullName;
fullName = "abdurrahman";
document.writeln(fullName);
document.writeln("<br>");

let FirstName;
FirstName = "Abdur";
document.writeln(FirstName);
document.writeln("<br>");

let LastName;
LastName = "Rahman";
document.writeln(LastName);
document.writeln("<br>");

const application = "Belajar Javascript Dasar";
document.writeln(application);
document.writeln("<br>");

let result = 1 + 2;
document.writeln("<p> 1 + 2 = " + result + "</p>");
let  OriginalResult = result;



result = result * 2;
document.writeln("<p>" + OriginalResult + " * 2 = " + result + "</p>");

result = result -1;
document.writeln("<p>" + OriginalResult + " - 1 = " + result + "</p>");



let result1 = 10;
result1 +=10;
document.writeln("<p>" + result1 + "</p>");

result1 -=10;
document.writeln("<p>" + result1 + "</p>");

result1 *=10;
document.writeln("<p>" + result1 + "</p>");



let result2 = +1;
document.writeln("<p>" + result2 + "</p>");

result2 --;
document.writeln("<p>" + result2 + "</p>");

result2 ++;
document.writeln("<p>" + result2 + "</p>");

result2 = -result2;
document.writeln("<p>" + result2 + "</p>");


// Operasi Perbandingan
let result3 = 5 == "5";
document.writeln("<p>" + result3 + "</p>")

result3 = 5 === "5";
document.writeln("<p>" + result3 + "</p>")

result3 = 5 > 10 ;
document.writeln("<p>" + result3 + "</p>")

result3 = 5 < 10 ;
document.writeln("<p>" + result3 + "</p>")

// oprator logika

const nilaiUjian = 70;
const nilaiAbsensi = 70;


const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;


const lulus =  lulusUjian && lulusAbsensi;
document.writeln("<p>" + lulus + "</p>")
