let subs: number | string = 'dftgfc'

let api: 'pend' | 'Success' | 'error' = 'Success'

let seat: 'aisle' | 'window' | 'middle' = "window"

console.log(subs)
console.log(api)
console.log(seat)


let orders = ['43', '654', '532', '3452']
let current:string | undefined ;

for (let order of orders){
    if(order === '43'){
        current = order
        break
    }

    current = '334'

}

console.log(current)