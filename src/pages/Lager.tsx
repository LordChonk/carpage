import React from "react";

export default function Lager(){
    return (
        <section className="lager-section">
            <div className="lager-container">
                <div className="lager-text">
                    <h2>Våra bilar på Blocket</h2>
                    <p>Se vårt aktuella lager av fordon direkt på Blocket. Klicka på en annons för att läsa mer.</p>
                    <a
                    href="https://www.blocket.se/butik/vk-performance"
                    target="_blank"
                    rel="noopener noregerrer"
                    className="lager-button">
                        Visa alla annonser →
                    </a>
                </div>

                <div className="iframe-wrapper">
                    <iframe
            className="IframeBox"
            src="https://www.blocket.se/store_box.htm?ca=11&id=115861"
            title="Blocket annonser"
            loading="lazy"
          ></iframe>
                </div>
            </div>
        </section>
      
    );
} 

{/*} <div className="lager-sida">
            <h2>Bilar i lager</h2>
            <p>Placeholder för text</p>
            <iframe className="IframeBox"
            src="https://www.blocket.se/store_box.htm?ca=11&id=115861"
            title="Blocket Lager"></iframe>
        </div>*/}