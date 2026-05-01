import Image from 'next/image';
import { BookOpen, PenTool, Box } from 'lucide-react';

const features = [
  {
    title: 'Premium Notebooks',
    description:
      'Handcrafted journals and notebooks with acid-free paper, perfect for sketching, writing, or bullet journaling.',
    image: 'https://picsum.photos/seed/premium-notebooks/600/400',
    icon: BookOpen,
  },
  {
    title: 'Writing Instruments',
    description:
      'From fountain pens to fine-tip markers, discover writing tools that make every stroke a pleasure.',
    image: 'https://picsum.photos/seed/fountain-pen-writing/600/400',
    icon: PenTool,
  },
  {
    title: 'Desk Organization',
    description:
      'Elegant desk organizers, pen holders, and storage solutions that bring order and style to your workspace.',
    image: 'https://picsum.photos/seed/desk-organizer-supplies/600/400',
    icon: Box,
  },
];

export function Features() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            What We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Curated stationery essentials designed to elevate your everyday
            workflow, from premium paper goods to artisan writing tools.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}