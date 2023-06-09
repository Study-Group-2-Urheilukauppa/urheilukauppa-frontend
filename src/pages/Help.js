import React, { useState } from 'react';
import hostURL from '../Constants';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(
    localStorage.getItem('lastSubmitTime') || 0
  );

  const canSubmit = Date.now() - Number(lastSubmitTime) > 60 * 10000;

  const submitFeedback = async () => {
    if (!canSubmit) {
      setAlertMessage('Voit lähettää palautetta vain kerran 10 minuutin välein.');
      return;
    }

    const response = await fetch(`${hostURL}/api/Feedback.php`, {
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
      setLastSubmitTime(Date.now());
      localStorage.setItem('lastSubmitTime', Date.now());
    } else {
      setAlertMessage('Ilmeni ongelma lomakkeen lähtettämisessä. Yritä myöhemmin uudelleen.');
    }
  };
  

  return (
    <>
      <main className="mx-20 mb-auto mt-20 bg-white grid content-center justify-center font-bold respo">
      <p className="mx-auto">Ota meihin yhteyttä!</p><br></br>
      <p className="mx-auto">Sähköpostiosoite: xxs.asiakaspalvelu@gmail.com<br/>Puhelinnumero: +358 123456789<br/>Pääkonttori: Yliopistokatu 9 </p>
        
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
          <button className="bg-secondary hover:bg-third text-white font-bold py-2 px-4 border rounded text-xs sm:text-sm md:text-md lg:text-lg max-w-2xl" type="button" onClick={submitFeedback}>Lähetä lomake</button>
          <br />{alertMessage && <p className="text-red-500 mt-2">{alertMessage}</p>}
        </form>
      </div>
      </main>
    </>
  );
}

export default FeedbackForm;