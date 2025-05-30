
import { getCookie, hasCookie, setCookie } from "cookies-next"

export const getCookieCart = ():{ [id:string]:number } => {
    if (hasCookie("cart")) {
        const coockieCart = JSON.parse(getCookie("cart") as string ?? "{}");
        return coockieCart;        
    }
     return {}
}


export const addProductCart = (id:string) => {
    const cart = getCookieCart();
    if (cart[id]) {
        cart[id] += 1;
    } else {
        cart[id] = 1;
    }
    setCookie("cart", JSON.stringify(cart));
}

export const removeProductCart = (id:string) => {
    const cart = getCookieCart();    
    delete cart[id];
    
    setCookie("cart", JSON.stringify(cart));
}


export const removeSingleItemFromCart = (id:string) => {
    const cart = getCookieCart();
    if (cart[id]) {
        cart[id] -= 1;
        if (cart[id] <= 0) {
            delete cart[id];
        }
    }
    setCookie("cart", JSON.stringify(cart));
}



