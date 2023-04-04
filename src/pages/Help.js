import React, { useState } from 'react';

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

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
      alert('Lomake lähetetty onnistuneesti!');
    } else {
      alert('Ilmeni ongelma lomakkeen lähtettämisessä. Yritä myöhemmin uudelleen.');
    }
  };

  return (
    <>
      <main className="mb-auto mt-20 bg-white grid content-center justify-center w-screen">Ota meihin yhteyttä!
      </main>

        <div className='w-full absolute grid content-center justify-center pb-12 pt-6'>
            <p>Sähköpostiosoite: xxs.asiakaspalvelu@gmail.com / Puhelinnumero: +358 123456789 / Pääkonttori: Yliopistokatu 9 </p>
        </div>


      <div className='w-full absolute top-1/4 pl-12 pt-9'>
        <form>
          <p className='pb-4'>Täytä alla oleva yhteydenottolomake niin palaamme sinulle mahdollisimman nopeasti!</p>
          <label>Nimi: </label>
          <input className="border-2 border-primary bg-[#F1F1F1] mb-2 hover:bg-fifth w-56 ml-1" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label className='ml-16'>Email: </label>
          <input className="border-2 border-primary bg-[#F1F1F1] hover:bg-fifth w-56" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <label>Palaute: </label>
          <br />
          <textarea rows="8" cols="100" className="border-2 bg-[#F1F1F1] border-primary mb-2 hover:bg-fifth" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
          <br />
          <button className="bg-secondary text-[#fff] pt-2 pl-3 pb-2 pr-3 inline-block border-primary border-2 rounded-3xl hover:bg-fourth '" type="button" onClick={submitFeedback}>Lähetä lomake</button>
        </form>
      </div>
    </>
  );
}

export default FeedbackForm;