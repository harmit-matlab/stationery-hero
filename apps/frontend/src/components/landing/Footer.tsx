import { Pen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-primary">
                <Pen className="size-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                PenCraft
              </span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Premium stationery for every occasion. Quality paper, pens, and
              office supplies crafted for those who appreciate the finer things.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Shop
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Notebooks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Pens &amp; Pencils
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Desk Accessories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Company
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold text-foreground">
                Support
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Returns
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PenCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
