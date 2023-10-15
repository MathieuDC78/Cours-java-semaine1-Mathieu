
let a = 4
let b = 4
let c = 3
if (a = b) {
    console.log('Egal')
}
if (c < b && a + c != 3 ){
    console.log('ok')
}
else{ 
    console.log('raté')
}


switch(a) {
    case b :
        console.log('egal a B')
    break
    case c:
        console.log('egal a C')
    break
    default :
        console.log('egal a rien')
}   


for(let i = 0; i < a; i++) {
    console.log('oklm')
}


let d = 3
while( d < 9 ){
    d++
    if ( d == 7){
        continue
    }
    if ( d == 8){
        break
    }
    console.log(d)
}
console.log('j ai casse la boucle de ' + d + ' tours ')