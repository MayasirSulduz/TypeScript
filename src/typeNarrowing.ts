function getChai(kind: string | number) {

    if (typeof kind === 'string') {
        return `Making ${kind} chai...`
    }

    return `Chai order:${kind}`;
}

function serveChai(msg?: string) {
    if (msg) {
        return `serving${msg}`
    }

    return `Serving default masala chai`
}


function orderChai(size: "small" | "medium" | "Large" | number) {
    if (size === "small") {
        return `Small cutting chai..`
    }

    if (size === "medium" || size === "Large") {
        return `make extra chai...`
    }

    return `Chai order ${size}`

}

class KulhadChai {
    serve() {
        return `Serving Khulad chai`
    }
}

class Cutting {
    serve() {
        return `Serving Cutting chai`
    }
}


function serve(chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
}


type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj != null &&
        typeof obj.type === "string" &&
        typeof obj.type === "number"
    )
}


function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}

type MasalaChai = {
    type: "masala"
    spiceLevel: number
}

type GingerChai = {
    type: "ginger"
    amount: number
}

type ElachiChai = {
    type: "elachi"
    aroma: number
}

type Chai = MasalaChai | GingerChai | ElachiChai

function MakeChai(order: Chai) {
    switch (order.type) {
        case "masala":
            return `Masala chai`
            break;
        
        case "elachi":
            return `Elachi chai`
            break;
        case "ginger":
            return`Ginger chai`
            break
        default:
            return`Any chai`
            break
    }

}

function brew(order: MasalaChai | GingerChai) {
    if ('spiceLevel' in order){

    }
}
