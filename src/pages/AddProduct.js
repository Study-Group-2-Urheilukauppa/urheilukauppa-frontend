import React, { useState, useEffect } from 'react'

const URL = "http://localhost:3000/addProduct.php"

export default function AddProduct() {

    const [product, setProduct] = useState({
        productname: "",
        categoryid: "",
        price: "",
        sale: null,
        imgURL: "product-images/placeholder.png",
        descript: "",
        fulldescript: "",
      });

      // KATEGORIAHOMMAA

      const [categories, setCategories] = useState([]);

      useEffect(() => {
        fetch("http://localhost:3000/products/getcategories.php")
          .then((response) => response.json())
          .then((data) => {
            setCategories(data);
          })
          .catch((error) => {
            console.error(error);
            alert("Virhe ladattaessa kategorioita!");
          });
      }, []);

      // LOPPUU
    
      function handleSubmit(event) {
        event.preventDefault();
        
        fetch(URL, {
          method: "POST",
          body: JSON.stringify(product),
        })
          .then((response) => response.json())
          .then((data) => {
            setProduct({
              productname: "",
              categoryid: "",
              price: "",
              sale: null,
              imgURL: "product-images/placeholder.png",
              descript: "",
              fulldescript: "",
            });
            alert("Tuotteen lisäys onnistui!");
          })
          .catch((error) => {
            console.error(error);
            alert("Tuotteen lisäys epäonnistui!");
          });
      }
    
      function handleChange(event) {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value === "" ? null : value,
        }));
      }    

    return (


<>
<main className="mb-auto mt-20 bg-white grid content-center justify-center w-600 font-bold">Tuotteen lisäys<br></br>
<div>
<form onSubmit={handleSubmit} className="flex flex-col space-y-2 max-w-sm mx-auto mt-8 p-4 rounded-md shadow-md bg-white w-96">
      <label className="font-semibold text-gray-800">
        Tuotenimi:
        <input
          type="text"
          name="productname"
          value={product.productname}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          required
        />
      </label>
      <br />
      <label className="font-semibold text-gray-800">
        Tuoteryhmä:
        <select
                name="categoryid"
                value={product.categoryid}
                onChange={handleChange}
                className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              >
                <option value="">Valitse tuoteryhmä</option>
                {categories.map((category) => (
                  <option key={category.categoryid} value={category.categoryid}>
                    {category.categoryname}
                  </option>
                ))}
              </select>
      </label>
      <br />
      <label className="font-semibold text-gray-800">
        Hinta:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          required
        />
      </label>
      <br />
      <label className="font-semibold text-gray-800">
        Alennusprosentti (jos alennuksessa):
        <input
          type="number"
          name="sale"
          value={product.sale}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
/>
      </label>
      <br />
      <label className="font-semibold text-gray-800">
        Kuvan osoite (esim: product-images/kategoria/kuvannimi.png):
        <input
          type="text"
          name="imgURL"
          value={product.imgURL}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
  
        />
      </label>
      <br />
      <label className="font-semibold text-gray-800">
        Lyhyt tuotekuvaus:
        <textarea
          type="text"
          name="descript"
          rows="6"
          value={product.descript}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          required
        />
      </label>
      <br />
      <label className="font-semibold text-gray-800">
        Tuotekuvaus kokonaan:
        <textarea
          type="text"
          name="fulldescript"
          rows="20"
          value={product.fulldescript}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          required
        />
      </label>
      <br />
      <button type="submit" className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded">Lisää tuote</button>
    </form>
</div>
</main>
</>
    )
}