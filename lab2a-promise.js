///// Problem 1 - Fun with Promises

function flip() {
    let p = new Promise(function (resolve, reject) {
        if (Math.random() > 0.5) resolve();
        else reject();
    });
    return p;
}

//// Add code here that will "flip" the coin ten times and write the
//// result to the console (e.g. "Heads" or "Tails" for each flip).

// two pluses mean that it will keep going... number will get bigger until 10
for (let i = 0; i < 10; i++) {
    flip().then(
        () => {console.log("Heads!")},
        () => {console.log("Tails!")}
    );
}


///// Problem 2 - More fun...

// Add code here that returns a Promise that will resolve after it has counted to bignum
function countBig(bignum) {
  let p = new Promise(function (resolve, reject) {
    for (let i = 0; i < bignum; i++) {
    if (i = bignum-1) resolve();
    else reject();
  }})
  return p
}


start = Date.now();
bignum = 1000000000;
countBig(1000000000).then(()=> {
    console.log("It took " + (Date.now() - start) + " ms to count to " + bignum);
}, () => {
    console.log("A problem occurred while trying to count to " + bignum);
})
