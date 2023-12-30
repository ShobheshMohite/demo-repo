function sqaure(n){
    return n * n;
}

function sumOfSomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);

    return val1 + val2;
}

const ans = sumOfSomething(1,2,function cube(n){
    return n * n * n ;
}
)
console.log(ans);