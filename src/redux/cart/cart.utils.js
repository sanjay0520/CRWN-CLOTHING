export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((x) => x.id === cartItemToAdd.id);

  if (existingCartItem)
    return cartItems.map((item) =>
      item.id === existingCartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  else return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
