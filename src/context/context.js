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
        singleProducts: {},
        loading: false,
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

        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProducts: this.getStorageProducts(),
            loading: false,
        });
    };

    // get cart from local storage
    getStorageCart = () => {
        return [];
    };

    // get products from local storage
    getStorageProducts = () => {
        return [];
    };

    // get total
    getTotals = () => {};
    addTotals = () => {};

    syncStorage = () => {};

    // add to cart;
    addToCart = (id) => {
        console.log(`add to cart ${id}`);
    };

    // set single one product
    setSingleProduct = (id) => {
        console.log(`set single product ${id}`);
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
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
