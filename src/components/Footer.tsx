export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-surface-stroke pt-24 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 reveal-stagger reveal">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl">
                solar_power
              </span>
              <span className="font-[family-name:var(--font-family-headline)] text-xl text-on-surface tracking-tighter uppercase font-semibold">
                New Era Solar
              </span>
            </div>
            <p className="text-[16px] leading-[24px] text-on-surface-variant mb-8">
              Reliable Solar Solutions for Every Need. Excellence in renewable
              energy integration.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-surface-stroke flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  public
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-surface-stroke flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  mail
                </span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-surface-stroke flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">
                  smartphone
                </span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface mb-6 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/about"
                  className="text-on-surface-variant hover:text-secondary transition-all"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-on-surface-variant hover:text-secondary transition-all"
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="text-on-surface-variant hover:text-secondary transition-all"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-on-surface-variant hover:text-secondary transition-all"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface mb-6 uppercase tracking-wider">
              Solutions
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="/services"
                  className="text-on-surface-variant hover:text-secondary transition-all"
                >
                  Residential Solar
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-on-surface-variant hover:text-secondary transition-all"
                >
                  Commercial Power
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-on-surface-variant hover:text-secondary transition-all"
                >
                  Industrial Hybrid
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-on-surface-variant hover:text-secondary transition-all"
                >
                  Smart Maintenance
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface mb-6 uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-4 text-on-surface-variant">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  location_on
                </span>
                Ibadan, Oyo State, Nigeria
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  call
                </span>
                0707 514 3322
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-secondary text-[20px]">
                  mail
                </span>
                newerasolarworld@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-surface-stroke gap-4">
          <p className="text-[12px] leading-[16px] text-text-muted">
            &copy; 2024 New Era Solar World. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[12px] leading-[16px] text-text-muted">
            <a href="#" className="hover:text-secondary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-secondary">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-secondary">
              Energy Audit
            </a>
            <a href="/contact" className="hover:text-secondary">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
