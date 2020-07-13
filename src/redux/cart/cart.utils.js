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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((x) => x.id === cartItemToRemove.id);

  if (existingCartItem.quantity > 1)
    return cartItems.map((item) =>
      item.id === existingCartItem.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  else return cartItems.filter((item) => item.id !== cartItemToRemove.id);
};
