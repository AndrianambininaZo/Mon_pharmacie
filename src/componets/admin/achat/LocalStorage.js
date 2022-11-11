export const getCarts=()=>{
    let carts=localStorage.getItem('carts');
    if (carts) {
        return(carts=JSON.parse(localStorage.getItem("carts")))
        
    }
    else{
        return [];
    }
}