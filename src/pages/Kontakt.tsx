import React, {useState} from "react";

export default function Kontakt() {
 const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "cd72d0f8-5b77-402d-9e25-e7a48a9c9203");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Tack! Ditt meddelande har skickats.");
      event.currentTarget.reset();
    } else {
      setResult("Något gick fel. Försök igen senare.");
    }
  };

  return (
    <div className="kontakt-sida">
    <div className="form-sida">


    <div className="form-cols">
      <div className="kontakt-text">
      <h2>Kontakta oss</h2>
      <p>Har du några funderingar, frågor eller vill boka tid hos oss? Tveka inte att höra av dig via kontaktformuläret, så återkommer vi så snart vi kan!</p>
    </div>
      <div className="kontakt-formular">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
        <label>
          Namn:
          <input type="text" name="name" placeholder="Ditt namn" required />
        </label>

        <label>
            Telefonnummer:
            <input type="tel" name="phone" id="phone" placeholder="Ditt telefonnummer" required/>
        </label>
        </div>
       {/*} <label>
          E-post:
          <input type="email" name="email" placeholder="Din e-post"required />
        </label>*/}

        <label htmlFor = "message">
          Meddelande:
          </label>
          <textarea name="message" 
          placeholder="Ditt meddelande" 
          maxLength = {250}
          required 
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            const counter = document.getElementById("count");
            if (counter) counter.innerText = `${target.value.length}/500`;
          }}>
          </textarea>
          <small id="count">0/250</small>


        <button type="submit">Skicka</button>
      </form>

      {result && <p>{result}</p>}
    </div>
    </div>
          </div>
          </div>
  );
}
