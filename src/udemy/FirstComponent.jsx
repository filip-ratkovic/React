import React from 'react'
import "../style/firstComponent.css"

function FirstComponent(props) {
    const {title, amount, date} = props;
    return (
        <div>
            <div className="expense-item">
                <div>{date.toISOString()}</div>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">${amount}</div>
                </div>
            </div>
        </div>
    )
}

export default FirstComponent