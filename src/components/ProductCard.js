import React from "react";

export default function ProductCard({ product }) {
    const cardStyle = {
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "200px",
        textAlign: "center",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    };

    return (
        <div style={cardStyle}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong>${product.price}</strong>
        </div>
    );
}