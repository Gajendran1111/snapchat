// promise 

function go (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let  shop = false
            if(shop){
                resolve("going to the shop")
            }
            else {
                reject("i not going the shop")
            }
            
        }, 2000);
        
    })
}
function buy (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let product = true
            if(product){
                resolve("buy the product")
            }
            else {
                reject("not buying the product")
            }
            
        }, 5000);
        
    })
}
function change(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let get = false 
            if (get){
                resolve ("get the change back")
            }
            else {
                reject("did not get the change back")
            }
            
        }, 1000);
        
    })
}
function back() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let home = true
            if(home){
                resolve("back to home")
            }
            else {
                reject("back to the playground")
            }
            
        }, 1500);
       
    })
}
// go()
// .catch(val => {console.log(val); return buy()})
// .then(val => {console.log(val); return change()})
// .catch(val => {console.log(val); return back()})
// .then(val => {console.log(val)})

async function ne () {
    try {
        const a = await go();
    console.log(a);
    const b = await buy();
    console.log(b);
    const c = await change();
    console.log(c);
    const d = await back();
    console.log(d);
    } catch (error) {
        console.log(error);
        
    }
}
ne();
