import React, { useState } from 'react';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [alertMessage, setAlertMessage] = useState("");

  const submitFeedback = async () => {
    const response = await fetch('http://localhost:3000/Feedback.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        feedback
      })
    });
 

    const result = await response.json();

    if (result.success) {
      setAlertMessage('Lomake lähetetty onnistuneesti!');
    } else {
      setAlertMessage('Ilmeni ongelma lomakkeen lähtettämisessä. Yritä myöhemmin uudelleen.');
    }
  };

  return (
    <>
      <main className="mb-auto mt-20 bg-white grid content-center justify-center w-600 font-bold">Ota meihin yhteyttä!<br></br><br></br>
      <p>Sähköpostiosoite: xxs.asiakaspalvelu@gmail.com<br/>Puhelinnumero: +358 123456789<br/>Pääkonttori: Yliopistokatu 9 </p>
        
      <div>
        <form className="flex flex-col space-y-2 mx-auto mt-8 p-4 rounded-md shadow-md bg-white w-full">
          <p>Täytä alla oleva yhteydenottolomake niin palaamme sinulle mahdollisimman nopeasti!</p><br></br>
          <label className="font-semibold text-gray-800">Nimi: </label>
          <input className="mt-1 block w-96 border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label className="font-semibold text-gray-800">Email: </label>
          <input className="mt-1 block w-96 border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className="font-semibold text-gray-800">Palaute: </label>
          <textarea rows="8" cols="100" className="mt-1 block w-full border rounded-md py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
          <br />
          <button  className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded w-40" type="button" onClick={submitFeedback}>Lähetä lomake</button>
          <br />{alertMessage && <p className="text-red-500 mt-2">{alertMessage}</p>}
        </form>
      </div>
      </main>
    </>
  );
}

export default FeedbackForm;