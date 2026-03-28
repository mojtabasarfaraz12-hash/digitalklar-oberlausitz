import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-8xl font-extrabold gradient-text">404</h1>
        <h2 className="mt-4 text-2xl font-bold">Seite nicht gefunden</h2>
        <p className="mt-2 text-text-secondary">
          Die gesuchte Seite existiert leider nicht.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Zurück zur Startseite
          </Button>
        </div>
      </div>
    </section>
  );
}
