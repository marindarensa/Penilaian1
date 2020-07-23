class PersegiPanjang{
    constructor(p,l){
        /*properti atau atribut dari sebuah objek didefinisikan di dalam method constructor */
        this.panjang = p
        this.lebar = l
    }
    Luas = () =>{
        return this.panjang*this.lebar
    }
    Keliling = () =>{
        return 2*(this.panjang+this.lebar)
    } 
}
class Balok extends PersegiPanjang{
constructor(p,l,t){
    super(p,l)
    this.tinggi = t   
}
luas = () =>{
    return (2*this.panjang*this.lebar) + (2*this.panjang*this.lebar) + (2*this.panjang*this.lebar)
}
volume = () =>{
    return this.panjang*this.lebar*this.tinggi
}
}
let lemari = new Balok(10,5,2)
console.log("Luas lemari = " + lemari.luas());
console.log("Volume lemari = " + lemari.volume());

