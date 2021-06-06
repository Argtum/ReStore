import React from 'react';
import './shopping-cart-table.css';
import {connect} from "react-redux";
import {allBooksRemovedFromCart, booksRemovedFromCart, booksAddedToCart} from "../../actions";

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  const renderRow = (item, idx) => {
    const {id, title, count, total} = item;

    return (
        <tr key={id}>
          <td>{idx + 1}</td>
          <td>{title}</td>
          <td>{count}</td>
          <td>${total}</td>
          <td>
            <button
                onClick={() => onDelete(id)}
                className="btn btn-outline-danger btn-sm float-end">
              <i className="fa fa-trash" />
            </button>
            <button
                onClick={() => onIncrease(id)}
                className="btn btn-outline-success btn-sm float-end">
              <i className="fa fa-plus-circle" />
            </button>
            <button
                onClick={() => onDecrease(id)}
                className="btn btn-outline-warning btn-sm float-end">
              <i className="fa fa-minus-circle" />
            </button>
          </td>
        </tr>
    )
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ( {shoppingCart: {cartItems, orderTotal}}) => {
    return {
        items: cartItems,
        total: orderTotal
    };
};

const mapDispatchToProps = {
    onIncrease: booksAddedToCart,
    onDecrease: booksRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
