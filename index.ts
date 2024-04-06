              ///Task # 41 ///
//Magicians: Make a array of magician’s names. Pass the array to a function 
//called show_magicians(), which prints the name of each magician in the array.

let magician_name: string[] = ["Jack Nelson", "Herry Brown", "Peter","Henry"]
function show_magicians(magicin: string[]) {
    magician_name.forEach(mag_name => {
        console.log(mag_name)
    })
}
show_magicians(magician_name)
export {magician_name};