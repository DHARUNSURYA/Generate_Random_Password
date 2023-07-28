let keylist='abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_-=+?/|'
console.log(keylist.length)
let password=''
let gpass=(plength)=>{
    password=''

    for(i=0;i<plength;i++){
        password+=keylist.charAt(Math.floor(Math.random()*keylist.length))
    }
    return password
}
let pass=(passl)=>{
    document.output.password.value=gpass(passl)
}