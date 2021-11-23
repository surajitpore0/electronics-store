import React, { Component } from "react";
import { linkData } from "./linkData";
import { socialData } from "./socialData";
import { items } from "./productData";
const ProductContext = React.createContext();

// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        cartItem: 11,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true,
    };

    componentDidMount() {
        this.setProducts(items);
    }

    // set products
    setProducts = (products) => {
        let storeProducts = products.map((item) => {
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            const product = { id, ...item.fields, image };
            return product;
        });

        // featured products
        let featuredProducts = storeProducts.filter(
            (item) => item.featured === true
        );

        this.setState(
            {
                storeProducts,
                filteredProducts: storeProducts,
                featuredProducts,
                cart: this.getStorageCart(),
                singleProduct: this.getStorageProducts(),
                loading: false,
            },
            () => {
                this.addTotals();
            }
        );
    };

    // get cart from local storage
    getStorageCart = () => {
        let cart;
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        } else {
            cart = [];
        }
        return cart;
    };

    // get products from local storage
    getStorageProducts = () => {
        return localStorage.getItem("singleProduct")
            ? JSON.parse(localStorage.getItem("singleProduct"))
            : {};
    };

    // get total
    getTotals = () => {
        let subTotal = 0;
        let cartItems = 0;

        this.state.cart.forEach((item) => {
            subTotal += item.total;
            cartItems += item.count;
        });

        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax;
        total = parseFloat(total.toFixed(2));
        return {
            cartItems,
            subTotal,
            tax,
            total,
        };
    };
    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItem: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total,
        });
    };

    syncStorage = () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
    };

    // add to cart;
    addToCart = (id) => {
        console.log(`add to cart ${id}`);
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find((item) => item.id === id);

        if (!tempItem) {
            tempItem = tempProducts.find((item) => item.id === id);
            let total = tempItem.price;
            let cartItem = { ...tempItem, count: 1, total };
            tempCart = [...tempCart, cartItem];
        } else {
            tempItem.count++;
            tempItem.total = tempItem.count * tempItem.price;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }

        this.setState(
            () => {
                return { cart: tempCart };
            },
            () => {
                this.addTotals();
                this.syncStorage();
                this.openCart();
            }
        );
    };

    // set single one product
    setSingleProduct = (id) => {
        // console.log(`set single product ${id}`);
        let product = this.state.storeProducts.find((item) => item.id === id);
        localStorage.setItem("singleProduct", JSON.stringify(product));
        this.setState({
            singleProduct: { ...product },
            loading: false,
        });
    };

    // @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    // handel sidebar
    handleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen,
        });
    };

    // handel cart
    handleCart = () => {
        this.setState({
            cartOpen: !this.state.cartOpen,
        });
    };

    // close cart
    closeCart = () => {
        this.setState({
            cartOpen: false,
        });
    };

    // open cart
    openCart = () => {
        this.setState({ cartOpen: true });
    };

    // *********************************************
    // cart functionality
    // increment
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find((item) => item.id === id);
        cartItem.count++;
        cartItem.total = cartItem.count * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2));
        this.setState(
            () => {
                return {
                    cart: [...tempCart],
                };
            },
            () => {
                this.addTotals();
                this.syncStorage();
            }
        );
    };

    // decrement
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find((item) => item.id === id);
        cartItem.count--;

        if (cartItem.count === 0) {
            this.removeItem(id);
        } else {
            cartItem.total = cartItem.count * cartItem.price;
            cartItem.total = parseFloat(cartItem.total.toFixed(2));
            this.setState(
                () => {
                    return {
                        cart: [...tempCart],
                    };
                },
                () => {
                    this.addTotals();
                    this.syncStorage();
                }
            );
        }
    };
    // remove item
    removeItem = (id) => {
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter((item) => item.id !== id);
        this.setState(
            {
                cart: [...tempCart],
            },
            () => {
                this.addTotals();
                this.syncStorage();
            }
        );
    };

    clearCart = () => {
        this.setState(
            {
                cart: [],
            },
            () => {
                this.addTotals();
                this.syncStorage();
            }
        );
    };

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleSidebar: this.handleSidebar,
                    handleCart: this.handleCart,
                    closeCart: this.closeCart,
                    openCart: this.openCart,
                    addToCart: this.addToCart,
                    setSingleProduct: this.setSingleProduct,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
