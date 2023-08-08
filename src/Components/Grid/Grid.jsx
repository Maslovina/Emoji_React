import React from 'react'
import "./Grid.css"

export const Grid = ({children,handler}) => {
    return (
      <div handler={handler} className="emoji_list" id="emoji_container">
        {children}
      </div>
    );
}