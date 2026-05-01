import Image from 'next/image';

export function About() {
  return (
    <section className="bg-muted/40 px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
            <Image
              src="https://picsum.photos/seed/stationery-workspace/1200/800"
              alt="Our stationery workspace"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Story
            </h2>
            <p className="text-muted-foreground">
              Founded with a passion for the written word, PenCraft brings
              together the finest stationery from around the world. We believe
              that the right tools can transform ordinary moments into
              extraordinary ones — whether you&apos;re signing a letter,
              sketching an idea, or planning your next adventure.
            </p>
            <p className="text-muted-foreground">
              Every product in our collection is chosen for its quality,
              craftsmanship, and ability to inspire. From sustainable paper
              goods to hand-finished pens, we curate with care so you can create
              with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}