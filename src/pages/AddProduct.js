import React, { useState } from 'react'

const URL = "http://localhost:3000/addProduct.php"

export default function AddProduct() {

    const [product, setProduct] = useState({
        productname: "",
        categoryid: "",
        price: "",
        sale: "NULL",
        imgURL: "",
        descript: "",
        fulldescript: "",
      });
    
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
              sale: "NULL",
              imgURL: "",
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
          [name]: value,
        }));
      }    

    return (

        // PITÄÄ VIELÄ LISÄTÄ TUOTERYHMÄ-KOHTAAN DROPDOWNVALIKOLLA TUOTERYHMÄT JOTKA SE HAKEE KANNASTA!
        // MYÖS PITÄÄ LISÄTÄ ESIM ALENNUS-KOHTAAN, ETTÄ SE ANTAA NULL ARVON JOS KENTÄN JÄTTÄÄ TYHJÄKSI
        // TUOTEKUVAUS-OSIOIT PITÄÄ SAADA ISOMMIKSI JA TEKSTI NIIHIN JÄRKEVÄSTI
        // KUVAN LISÄYS ???

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
        <input
          type="text"
          name="categoryid"
          value={product.categoryid}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          required
        />
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
        <input
          type="text"
          name="descript"
          value={product.descript}
          onChange={handleChange}
          className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          required
        />
      </label>
      <br />
      <label className="font-semibold text-gray-800">
        Tuotekuvaus kokonaan:
        <input
          type="text"
          name="fulldescript"
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