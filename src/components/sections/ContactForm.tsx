"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const schema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  subject: z.string().min(3, "Bitte geben Sie einen Betreff ein"),
  message: z.string().min(10, "Ihre Nachricht sollte mindestens 10 Zeichen lang sein"),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center py-12 text-center">
        <CheckCircle size={48} className="text-success" />
        <h3 className="mt-4 text-xl font-bold">Nachricht gesendet!</h3>
        <p className="mt-2 text-text-secondary">
          Vielen Dank für Ihre Nachricht. Ich melde mich schnellstmöglich bei Ihnen.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-accent-light hover:underline"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">Name</label>
          <input
            {...register("name")}
            placeholder="Ihr Name"
            className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-error">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">E-Mail</label>
          <input
            {...register("email")}
            type="email"
            placeholder="ihre@email.de"
            className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-error">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Betreff</label>
        <input
          {...register("subject")}
          placeholder="Wie kann ich Ihnen helfen?"
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none"
        />
        {errors.subject && (
          <p className="mt-1 text-xs text-error">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">Nachricht</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Erzählen Sie mir von Ihrem Projekt..."
          className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:border-accent focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-error">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-error/20 bg-error/5 p-4 text-sm text-error">
          <AlertCircle size={16} />
          Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.
        </div>
      )}

      <Button type="submit" variant="gold" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send size={18} />
            Nachricht senden
          </>
        )}
      </Button>
    </form>
  );
}
