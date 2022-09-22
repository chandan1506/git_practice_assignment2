let number=13;
let fact=0;
for(i=1;i<=number;i++){
if(number%i==0){
fact++;
}
}
if(fact==2){
console.log(true);
}else{
console.log(false)