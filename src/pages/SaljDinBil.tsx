import React, {useState} from "react";

export default function SälgDinBil(){
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
      <div className="salj-sida">
        <div className="form-sida">
           
            <div className="form-cols">
              <div className="kontakt-text">
               <h2>Vi köper din bil - snabbt, enkelt och tryggt!</h2>
            <p>Vill du sälja din bil utan krångel? På VK Performance gör vi det enkelt för dig. Vi köper bilar av alla märken, modeller och i alla skick. Med vår smidiga process får du en rättvis värdering och en trygg affär – direkt och utan omvägar.</p>
            </div>
            {/*put the form for vehicle details here */}

            <div className="kontakt-formular">
      <h3>Sälj Din Bil</h3>
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

       {/* <label>
          E-post:
          <input type="email" name="email" placeholder="Din e-post"required />
        </label>*/}

        <div className="form-row">
        <label>
            Registreringsnummer:
        <input
            type="text" 
            name="licensePlate" 
            id="licensePlate" 
            placeholder="ABC123" 
            maxLength = {10} 
            pattern="[A-Za-z0-9\- ]{2,10}" 
            style={{textTransform: "uppercase"}}
            required 
        />
        </label>

        <label>
            Miltal:
            <input type="number"
            name="mileage"
            id="mileage"
            placeholder="Miltal"
            min={0}
            step={1}
            required/>
        </label>
        </div>

        <label htmlFor = "message">
          Övrig information:
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