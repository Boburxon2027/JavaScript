//&& and -va 
// console.log(1 && true && underfined && false && 0)
// console.log(true ||(0&& true )||(null && underfined )||1);
// =======================================================================
// ! - Not - inkor 
// console.log(!0)
// =======================================================
// Falsiy - 0, false, "", null, underfined, NaN
// ?? - Nullish
// Falsiy- null yoki underfined 
// console.log(underfined ?? null);
// ============================================
// if / else if / else 
 let age = prompt("Yoshingizni kiriting")
// if (age >= 18){console.log ("Ruxsat")}
// else{console.log ("Mumkin emas.")}

// Boqchada o'qiydi. age >= 3 && age <=6
// Maktabda o'qiydi. age




if(age >= 3 && age <=6)
    {console.log("boqchada o'qiydi")}
else if(age >=7 && age <=17 ){
    console.log("Maktabda o'qidi" )}
else if( age >=18 && age <=30){
    console.log("instutda o'qiydi")}
else if (age >=31 && age <=55){
    console.log("ishda ishlaydi");}
else if(age >=56 && age <=100 ){
    console.log("nafaqa oladi");
}
else if ( age >=101 && age <=200){
    console.log("o'lgan");
    
}
else{
    console.log("Chaqaloq");
}