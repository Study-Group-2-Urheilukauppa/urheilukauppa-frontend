import React, { useState } from 'react'

const URL = "http://localhost:3000/api/addCategory.php"

export default function AddCategory() {

    const [category, setCategory] = useState({
        categoryname: "",
    });
    
    const [alertMessage, setAlertMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        fetch(URL, {
            method: "POST",
            body: JSON.stringify(category),
        })
        .then((response) => response.json())
        .then((data) => {
            setCategory({
                categoryname: "",
            });
            setAlertMessage("Tuoteryhmän lisäys onnistui!");
        })
        .catch((error) => {
            console.error(error);
            setAlertMessage("Tuoteryhmän lisäys epäonnistui!");
        });
    }
    
    function handleChange(event) {
        const { name, value } = event.target;
        setCategory((prevCategory) => ({
            ...prevCategory,
            [name]: value,
        }));
    }    

    return (
        <>
            <main className="mb-auto mt-20 bg-white grid content-center justify-center w-600 font-bold">Tuoteryhmän lisäys<br></br>
                <div>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mx-auto mt-8 p-4 rounded-md shadow-md bg-white w-full">
                        <label className="font-semibold text-gray-800">
                            Tuoteryhmän nimi:
                            <input
                                type="text"
                                name="categoryname"
                                value={category.categoryname}
                                onChange={handleChange}
                                className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                                required
                            />
                        </label>
                        <br />
                        <button type="submit" className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded">Lisää tuotetyhmä</button>
                        {alertMessage && <p className="text-red-500 mt-2">{alertMessage}</p>}
                    </form>
                </div>
            </main>
        </>
    )
}