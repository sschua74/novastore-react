import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
    { id: 1, name: "Laptop", price: 1200, description: "High performance laptop" },
    { id: 2, name: "Smartphone", price: 800, description: "Latest model smartphone" },
    { id: 3, name: "Headphones", price: 150, description: "Noise-cancelling headphones" },
];

export default function ProductList() {
    return (
        <div style={{ padding: "20px" }}>
            <h2>🛍 Product Listing</h2>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {products.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
        </div>
    );
}