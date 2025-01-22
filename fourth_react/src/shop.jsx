import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addItemToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

            if (existingItem) {
                return prevCart.map((cartItem) =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            }

            return [...prevCart, { ...item, quantity: 1 }];
        });

        setTotalCount((prevCount) => prevCount + 1);
        setTotalPrice((prevPrice) => prevPrice + item.price);
    };

    const removeItemFromCart = (itemId) => {
        setCart((prevCart) => {
            const itemToRemove = prevCart.find((cartItem) => cartItem.id === itemId);

            if (itemToRemove.quantity === 1) {
                return prevCart.filter((cartItem) => cartItem.id !== itemId);
            }

            return prevCart.map((cartItem) =>
                cartItem.id === itemId
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
        });

        const itemToRemove = cart.find((cartItem) => cartItem.id === itemId);
        setTotalCount((prevCount) => prevCount - 1);
        setTotalPrice((prevPrice) => prevPrice - itemToRemove.price);
    };

    return (
        <div className='bg-gray-300 h-screen text-black font-medium'>
            <div className="text-center flex flex-col gap-4">
                <h2 className=' text-5xl mt-10'>Shopping Cart</h2>
                <ul className=''>
                    {cart.map((item) => (
                        <li className="" key={item.id}>
                            {item.name} - ${item.price} x {item.quantity}
                            <button className="ml-3" onClick={() => removeItemFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
                <div>
                    <p>Total Items: {totalCount}</p>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                </div>
                <div className='flex gap-6'>
                    {/* Example buttons for testing */}
                    <div>
                        <img className="rounded-xl " src="bottle.avif" alt="item 1" />
                        <button
                            onClick={() =>
                                addItemToCart({ id: 1, name: 'Item 1', price: 10.0 })
                            }
                        >
                            Add Item 1
                        </button>
                    </div>
                    <div>
                        <img className="rounded-xl " src="bottle.avif" alt="item 1" />
                        <button
                            onClick={() =>
                                addItemToCart({ id: 2, name: 'Item 2', price: 20.0 })
                            }
                        >
                            Add Item 2
                        </button>
                    </div>
                    <div>
                        <img className="rounded-xl " src="bottle.avif" alt="item 1" />
                        <button
                            onClick={() =>
                                addItemToCart({ id: 3, name: 'Item 3', price: 50.0 })
                            }
                        >
                            Add Item 3
                        </button>
                    </div>
                    <div>
                        <img className="rounded-xl " src="bottle.avif" alt="item 1" />
                        <button
                            onClick={() =>
                                addItemToCart({ id: 4, name: 'Item 4', price: 30.0 })
                            }
                        >
                            Add Item 4
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
