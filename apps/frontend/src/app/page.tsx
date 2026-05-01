import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export default function LandingPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Stationery That Inspires Your Best Work
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Premium paper, pens, and office essentials crafted for those who
              appreciate quality. From notebooks to writing instruments, find
              everything you need to create and organize.
            </p>
            <div className="flex gap-4">
              <Button variant="default" size="lg">
                Shop Now
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <Image
              src="https://picsum.photos/seed/hero-section/1200/800"
              alt="Beautiful stationery collection with notebooks and pens"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}