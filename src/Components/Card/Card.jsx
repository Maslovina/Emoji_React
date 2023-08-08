import React from 'react'
import "./Card.css"

export const Card = ({ item, symbol, title, keywords }) => {
    return (
      <div className="card" item={item}>
        <p className="card_symbol">{symbol}</p>
        <h2 className="card_title">{title}</h2>
        <p className="card_keywords">{keywords}</p>
      </div>
    );
}