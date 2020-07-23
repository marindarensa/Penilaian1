let tinggi_badan = 170/100
let berat_badan = 90

let BMI = tinggi_badan*berat_badan;
console.log("Total BMI Rodheye adalah "+BMI);
console.log("Jadi status berat badan Rodheye ");

if (BMI > 30.0) {
    console.log("Kegemukan(Obesitas)");
}else if (BMI <= 29.9 && BMI >= 25.0){
    console.log("Kelebihan berat badan");
}else if (BMI <= 24.9 && BMI >= 18.5){
    console.log("Normal(Ideal)");
}if (BMI < 18.5){
    console.log("Kekurangan berat badan");
}
