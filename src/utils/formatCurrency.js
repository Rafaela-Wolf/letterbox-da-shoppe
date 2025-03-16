export const formatCurrency = (number) => {
    if (!number) return "N/A";
    return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
};