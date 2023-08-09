const formatPrice = (price) => {
    const formattedPrice = price.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP"
    });
    return formattedPrice;
};

export { formatPrice };