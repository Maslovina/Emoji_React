import React from 'react'
import "./Header.css"

export const Header = () => {
    return (
      <header>
        <div className="container">
          <h1 className="main_title">Emoji Finder</h1>
          <p className="main_subtitle">Find emoji by keywords</p>
          <input
            className="main_search"
            type="text"
            placeholder="Поиск Emoji"
          />
        </div>
      </header>
    );
}