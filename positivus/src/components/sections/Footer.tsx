import { Container } from "@/components/layout/Container";
import { NAV_LINKS } from "@/data/site";

const FOOTER_NAV = NAV_LINKS;

export function Footer() {
  return (
    <footer className="mt-8 bg-white pb-0 pt-4">
      <Container>
        <div className="rounded-t-card bg-dark px-6 py-10 sm:px-10 sm:py-12 lg:px-[60px] lg:pb-12 lg:pt-14">
          <div className="flex flex-col gap-12 lg:gap-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10 lg:gap-24">
                <a href="#" className="inline-flex shrink-0">
                  <img
                    src="/images/logo.svg"
                    alt="Positivus"
                    width={180}
                    height={29}
                    className="h-7 w-auto brightness-0 invert"
                  />
                </a>
                <nav className="flex flex-wrap gap-6 lg:gap-10">
                  {FOOTER_NAV.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-p text-white underline decoration-white underline-offset-4"
                    >
                      {l.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex gap-5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
                  aria-label="LinkedIn"
                >
                  <img
                    src="/images/social-linkedin-footer.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
                  aria-label="Facebook"
                >
                  <img
                    src="/images/social-facebook-footer.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
                  aria-label="X"
                >
                  <img
                    src="/images/social-x-footer.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
              <div className="flex max-w-[332px] flex-col gap-6">
                <span className="text-h4 inline-flex w-fit rounded-label bg-primary px-[7px] font-medium text-black">
                  Contact us
                </span>
                <div className="text-p flex flex-col gap-5 text-white">
                  <p>Email: info@positivus.com</p>
                  <p>Phone: 555-567-8901</p>
                  <p>
                    Address: 1234 Main St Moonstone City, Stardust State 12345
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-btn bg-subscribe p-8 sm:p-10 lg:max-w-[634px] lg:flex-row lg:items-start lg:gap-5">
                <label className="flex min-w-0 flex-1 flex-col">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="text-p w-full rounded-btn border border-white bg-transparent px-[35px] py-[22px] text-white placeholder:text-white"
                  />
                </label>
                <button
                  type="button"
                  className="text-lead shrink-0 rounded-btn bg-primary px-[35px] py-5 text-center font-normal text-black transition-opacity hover:opacity-90"
                >
                  Subscribe to news
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-8 border-t border-white pt-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-10">
                <p className="text-p text-white">
                  © 2026 Positivus. All Rights Reserved.
                </p>
                <a
                  href="#"
                  className="text-p text-white underline decoration-white"
                >
                  Privacy Policy
                </a>
              </div>
              <p className="text-p max-w-2xl text-white/70">
                Illustrations by Igor Kapustin. Images by vectorjuice on
                Freepik.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
