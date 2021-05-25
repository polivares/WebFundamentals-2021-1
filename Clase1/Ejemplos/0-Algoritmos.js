// Primer algoritmo
console.log("Primer algoritmo");
for(var i=0; i < 10; i++){
    console.log(i)
    i = i+3
}
console.log(i)

// Segundo algoritmo
console.log("Segundo Algoritmo");a = 20;
function abc(list){
    a = 15;
    console.log(a);
}
console.log(a);

a = [[1,2,3], [5,10,20]];
abc(a)

// Tercer algoritmo
console.log("Tercer Algoritmo")
function sum(list){
    sum = list[0];
    for(var i=0; i<=list.length; i++){
        sum = sum + list[i];
        console.log(sum);
    }   
}
c = sum([1,2,3]);
console.log(c);