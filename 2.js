let barang =  [
    {nama: "beras", harga:"10000", jumlah:"5"},
    {nama: "gula", harga:"14000", jumlah:"5"},
    {nama: "telur", harga:"20000", jumlah:"2"},
    {nama: "minyak goreng", harga:"9000", jumlah:"10"},
]

let totalberas = barang[0].harga*barang[0].jumlah;
let totalgula = barang[1].harga*barang[1].jumlah;
let totaltelur = barang[2].harga*barang[2].jumlah;
let totalminyak = barang[3].harga*barang[3].jumlah;

let hargatotal = totalberas + totalgula + totaltelur + totalminyak;
console.log("Jadi total belanjaan Bu Astuti adalah " + hargatotal);
