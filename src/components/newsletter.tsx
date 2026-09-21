"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
export function Newsletter() {
  const [message, setMessage] = useState("");
  return (
    <section className="newsletter" id="newsletter">
      <div>
        <p className="eyebrow">LES NOUVELLES DU BOUT DU MONDE</p>
        <h2>
          Un peu d’évasion
          <br />
          dans votre boîte mail.
        </h2>
        <p>De nouvelles aventures, des inspirations et l’envie de repartir.</p>
      </div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setMessage(
            "Merci pour votre intérêt ! Cette inscription est une démonstration : aucune adresse n’a été enregistrée.",
          );
        }}
      >
        <label htmlFor="newsletter-email">Votre adresse e-mail</label>
        <div className="email-row">
          <input
            id="newsletter-email"
            name="email"
            type="email"
            placeholder="vous@exemple.fr"
            required
            autoComplete="email"
          />
          <button type="submit" aria-label="Tester l’inscription newsletter">
            <ArrowUpRight />
          </button>
        </div>
        <p className="fine-print">
          Inscription de démonstration · aucun e-mail enregistré ni envoyé.
        </p>
        <p role="status" className="form-status">
          {message}
        </p>
      </form>
    </section>
  );
}
