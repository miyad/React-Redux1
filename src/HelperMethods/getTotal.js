export const getTotal = (cart, products) => {
    let sum = 0;
    cart.map(
        (e) =>
            (sum += Number(
                Number(e.amount) * Number(products.find((p) => p.id === e.id).price)
            ))
    );
    return sum.toFixed(2);
}