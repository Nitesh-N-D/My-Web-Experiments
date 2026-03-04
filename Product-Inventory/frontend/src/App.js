import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3001/products";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    axios.get(API).then(res => setProducts(res.data));
  };

  const addProduct = () => {
    axios.post(API, {
      name,
      price: Number(price),
      quantity: Number(quantity)
    }).then(() => {
      clearInputs();
      loadProducts();
    });
  };


  const updateProduct = (id) => {
    const newPrice = prompt("Enter new price:");
    const newQty = prompt("Enter new quantity:");

    axios.put(`${API}/${id}`, {
      price: Number(newPrice),
      quantity: Number(newQty)
    }).then(loadProducts);
  };

  const deleteProduct = (id) => {
    axios.delete(`${API}/${id}`).then(loadProducts);
  };

  const clearInputs = () => {
    setName("");
    setPrice("");
    setQuantity("");
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
  <div className="dashboard">
    <div className="sidebar">
      <h3>Inventory System</h3>
      <p>Product Dashboard</p>
    </div>

    <div className="main">
      <div className="header">Product Inventory Dashboard</div>

      
      <div className="form-row">
        <input placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
        <input placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
        <button onClick={addProduct}>Add</button>
      </div>

      <input
        className="search"
        placeholder="Search product..."
        onChange={e => setSearch(e.target.value)}
      />

    
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>
                <button className="update" onClick={() => updateProduct(p.id)}>Update</button>
                <button className="delete" onClick={() => deleteProduct(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
}

export default App;