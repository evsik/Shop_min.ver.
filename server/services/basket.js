function _search(arr, id) {
    return arr.find(item => item.id_product == id);
}

module.exports = {
    add(basket, item) {
        basket.totalPrice += item.price
        basket.totalAmount++
        basket.content.push(item);
        return basket;
    },
    change(basket, id, quantity, sum) { //amount == 1/-1
        let find = _search(basket.content, id);
        basket.totalPrice = +sum
        find.quantity += quantity;
        basket.totalAmount += quantity
        return basket;
    },
    delete(basket, id) {
        let find = _search(basket.content, id);
        basket.totalPrice += -find.price * find.quantity
        basket.content.splice(basket.content.indexOf(find), 1);
        basket.totalAmount--
        return basket;
    }
}
