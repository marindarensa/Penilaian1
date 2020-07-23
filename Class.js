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
let tanah = new PersegiPanjang(10,50)
console.log("Luas tanah = " + tanah.Luas());
console.log("Keliling tanah = " + tanah.Keliling());
