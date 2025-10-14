import React, {useState} from "react";

export default function Kontakt() {
 const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "your-access-key-here");

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
    <div className="kontakt-formular">
      <h2>Kontakta oss</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Namn:
          <input type="text" name="name" required />
        </label>
      <br/>
        <label>
          E-post:
          <input type="email" name="email" required />
        </label>

        <label>
          Meddelande:
          <textarea name="message" required></textarea>
        </label>

        <button type="submit">Skicka</button>
      </form>

      {result && <p>{result}</p>}
    </div>
  );
}
