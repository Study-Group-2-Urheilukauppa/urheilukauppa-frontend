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
    <main className="mb-auto mt-20 bg-white grid content-center justify-center w-600">Asiakaspalvelu
</main>
    <div>
    <form>
      <label>Nimi: </label>
        <input className="border-2 border-black mb-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
      <label>Email: </label>
        <input className="border-2 border-black" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <br />
      <label>Palaute: </label> 
      <br />
        <textarea rows="8" cols="100" className="border-2 border-black" value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
        <br />
      <button className="border-2 border-black" type="button" onClick={submitFeedback}>Lähetä lomake</button>
    </form>
    </div>
    </>
  );
}

export default FeedbackForm;