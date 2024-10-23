/* fait a l'aide de ChatGPT */

function updateQuantity(gameId, change) {
    const quantityElement = document.getElementById(`quantity-${gameId}`);
    let quantity = parseInt(quantityElement.textContent);
    quantity = Math.max(1, quantity + change);
    quantityElement.textContent = quantity;
    updateTotal();
}

function updateTotal() {
    const game1Quantity = parseInt(document.getElementById('quantity-game1').textContent);
    const game2Quantity = parseInt(document.getElementById('quantity-game2').textContent);
    const subtotal = (59.99 * game1Quantity + 54.99 * game2Quantity).toFixed(2);
    const taxes = (subtotal * 0.02).toFixed(2);
    const total = (parseFloat(subtotal) + parseFloat(taxes)).toFixed(2);

    document.getElementById('subtotal').textContent = `${subtotal} €`;
    document.getElementById('taxes').textContent = `${taxes} €`;
    document.getElementById('total').textContent = `${total} €`;
}