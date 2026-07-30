"use client";

import { useState } from "react";

export default function ContactForm({ rows = 5 }: { rows?: number }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      
      const result = await res.json().catch(() => null);

      if (res.ok) {
        setStatus("success");
      } else {
        setErrorMessage(result?.message ?? "Failed to send message.");
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setErrorMessage("Failed to send message.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--ink-2)", padding: "40px", borderRadius: "var(--radius)", border: "var(--rule-w) solid var(--rule)", gridColumn: "1 / -1" }}>
        <h3 className="statement" style={{ color: "var(--gold)", margin: 0, textAlign: "center" }}>
          Message sent successfully.<br/>Clay will be in touch soon.
        </h3>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="field">
        <span>Name</span>
        <input type="text" name="name" placeholder="Your name" required disabled={status === "loading"} />
      </label>
      <label className="field">
        <span>Email</span>
        <input type="email" name="email" placeholder="you@email.com" required disabled={status === "loading"} />
      </label>
      <label className="field field-full">
        <span>Message</span>
        <textarea name="message" rows={rows} placeholder="Tell him what's on your mind." required disabled={status === "loading"}></textarea>
      </label>
      <button className="btn btn-primary field-full" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send it"}<span aria-hidden="true">&#8594;</span>
      </button>
      {status === "error" && (
        <p style={{ color: "#ff4d4d", gridColumn: "span 2", margin: "10px 0 0 0", fontSize: "14px", fontWeight: "bold" }}>
          {errorMessage} Please try again later.
        </p>
      )}
    </form>
  );
}
