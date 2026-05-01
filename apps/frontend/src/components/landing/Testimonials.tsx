import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Writer & Journaler',
    avatar: 'https://picsum.photos/seed/testimonial-woman-1/200/200',
    quote:
      'PenCraft transformed my daily journaling. The paper quality is unmatched — my fountain pen glides effortlessly across every page.',
  },
  {
    name: 'David Chen',
    role: 'Architect',
    avatar: 'https://picsum.photos/seed/testimonial-man-2/200/200',
    quote:
      'I have been searching for the perfect sketch notebook for years. PenCraft\'s selection helped me find exactly what I needed.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Teacher & Planner',
    avatar: 'https://picsum.photos/seed/testimonial-woman-3/200/200',
    quote:
      'From planners to pens, everything I have ordered has been exceptional quality. The desk organizer keeps my classroom tidy and stylish.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-background px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Loved by Creators
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Hear from writers, artists, and professionals who have made
            PenCraft their go-to stationery destination.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-warning text-warning"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-auto flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}