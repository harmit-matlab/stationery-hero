import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="bg-primary px-6 py-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
          Ready to Elevate Your Workspace?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
          Join thousands of creators, professionals, and stationery enthusiasts
          who trust PenCraft for quality that inspires. Free shipping on your
          first order.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="secondary" size="lg">
            Shop Collection
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}