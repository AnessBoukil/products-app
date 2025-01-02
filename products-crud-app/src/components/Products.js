import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "computer", price: 4300, checked: true },
    { id: 2, name: "Printer", price: 1200, checked: true },
    { id: 3, name: "iPhone", price: 5000, checked: false },
  ]);

  const handleDeleteProduct = (product) => {
    console.log(product);
    const newProducts = product.filter((p) => p.id != product.id);
    setProducts(newProducts);
  };

  return (
    <div className="p-1 m-1">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Checked</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>{product.price}</td>
                      <td>
                        <button className="btn btn-outline-success">
                          <FontAwesomeIcon
                            icon={product.checked ? faCheckCircle : faCircle}
                          ></FontAwesomeIcon>
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteProduct(product)}
                          className="btn btn-outline-danger"
                        >
                          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
