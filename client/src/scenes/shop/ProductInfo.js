import React from "react";
import '../../styles/global.css';
import '../../styles/ProductInfo.css';
import Rules from  '../../components/rules.pdf'
const ProductInfo = () =>{
    return(
        <div className="product-width">
            <h2>Product Overview</h2>
            <div className="product-info-flex">
                <div className="product-basic">
                    <h3>Basic Information</h3>
                    <p>Theme: Multiplayer</p>
                    <p>Genre: Family and Friends</p>
                    <p>Number of players: 2-8</p>
                    <p>Item Dimensions: 87x34x45</p>
                    <p>Game places: Anywhere</p>
                    <p>Material type: Wood</p>
                    <p>Pucks: 4pucks each color</p>
                    <a href={Rules} download="rules">Download Rules</a>
                </div>
                <div className="product-add">
                    <div>
                        <h3>Additonal Information</h3>
                        <p>Manufacturer: Jalfam Games</p>
                        <p>Eco-friendly</p>
                        <p>Great tool for parents to teach their children Maths</p>
                        <p>Made in Canada</p>
                    </div>
                    <div>
                        <h4>A classic and decent gift:-</h4>

                        <p>This wooden board game is not only built as a learning tool, but it’s always a good option to play when you feel bored, anxious, frustrated, or depressed and it will relieve you from moody or bad emotions. This is also the best option to give this as a  gift to family members, friends, and relatives.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo;