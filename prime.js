let num=11;
let fact=0;
for(i=1;i<=num;i++){
if(num%i==0){
fact++;
}
}
if(fact==0){
console.log("prime");
}else{
console.log("not a prime")