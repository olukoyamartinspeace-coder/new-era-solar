export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center opacity-50 scale-110"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWs2tE7vWWJGr-MdUbIW-JzKwTjrdLiKqA2ukpM6TBcIcgFvi_lNSA2j-lCxeahHPUG3kOMgabhc4eEhz1Sik9rS0C8Gop2ATof2gJq7pRrZyDlBvbv9M-_GmjSi3RtLVelzIBWE8_2p4BkfHN0HeHRuhGuEUqMMwK9AHEoXDysOJoY0gqcq5nx7t0fOvL2TTkA7qV6w76wOkcBhgncFTY88qf60gIa19xvgqk99RP2rjKE5E_QhRFKQ')",
            }}
          />
        </div>
        <div className="relative z-20 max-w-[1280px] mx-auto px-4 md:px-16 w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="entrance-fade-up">
            <span
              className="text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase mb-4 block"
              style={{ animationDelay: "0.1s" }}
            >
              Sustainable Energy Evolution
            </span>
            <h1
              className="font-[family-name:var(--font-family-headline)] text-4xl md:text-[72px] leading-[1.1] font-bold mb-6"
              style={{ animationDelay: "0.2s" }}
            >
              Reliable Solar{" "}
              <span className="text-secondary">Solutions</span> for Every Need.
            </h1>
            <p
              className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-on-surface-variant max-w-xl mb-10 leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              At New Era Solar World, we provide complete energy solutions that
              keep your home, business, and life running&mdash;day and night.
              High-performance engineering meets sustainable luxury.
            </p>
            <div
              className="flex flex-wrap gap-4"
              style={{ animationDelay: "0.4s" }}
            >
              <button className="bg-secondary text-on-secondary px-8 py-4 font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold rounded-xl flex items-center gap-2 hover:bg-solar-glow transition-all">
                Explore Products{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="border border-surface-stroke bg-surface-elevated/50 backdrop-blur-sm px-8 py-4 font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold rounded-xl hover:bg-surface-elevated transition-all">
                Our Portfolio
              </button>
            </div>
            <div
              className="mt-16 flex flex-wrap gap-12"
              style={{ animationDelay: "0.5s" }}
            >
              <div>
                <p className="font-[family-name:var(--font-family-headline)] text-[40px] text-secondary font-bold">
                  500+
                </p>
                <p className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">
                  Homes Powered
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-family-headline)] text-[40px] text-secondary font-bold">
                  12MW
                </p>
                <p className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">
                  Energy Generated
                </p>
              </div>
              <div>
                <p className="font-[family-name:var(--font-family-headline)] text-[40px] text-secondary font-bold">
                  99%
                </p>
                <p className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">
                  Uptime Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Marquee Ticker */}
      <section className="bg-surface-elevated py-12 overflow-hidden border-y border-surface-stroke">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex gap-24 items-center px-12">
            <span className="text-on-surface-variant font-[family-name:var(--font-family-headline)] text-xl md:text-[24px] uppercase tracking-[10px] flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                eco
              </span>{" "}
              SUSTAINABILITY
            </span>
            <span className="text-on-surface-variant font-[family-name:var(--font-family-headline)] text-xl md:text-[24px] uppercase tracking-[10px] flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                verified
              </span>{" "}
              RELIABILITY
            </span>
            <span className="text-on-surface-variant font-[family-name:var(--font-family-headline)] text-xl md:text-[24px] uppercase tracking-[10px] flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                lightbulb
              </span>{" "}
              INNOVATION
            </span>
            <span className="text-on-surface-variant font-[family-name:var(--font-family-headline)] text-xl md:text-[24px] uppercase tracking-[10px] flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                bolt
              </span>{" "}
              EFFICIENCY
            </span>
          </div>
          <div className="flex gap-24 items-center px-12">
            <span className="text-on-surface-variant font-[family-name:var(--font-family-headline)] text-xl md:text-[24px] uppercase tracking-[10px] flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                eco
              </span>{" "}
              SUSTAINABILITY
            </span>
            <span className="text-on-surface-variant font-[family-name:var(--font-family-headline)] text-xl md:text-[24px] uppercase tracking-[10px] flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                verified
              </span>{" "}
              RELIABILITY
            </span>
            <span className="text-on-surface-variant font-[family-name:var(--font-family-headline)] text-xl md:text-[24px] uppercase tracking-[10px] flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                lightbulb
              </span>{" "}
              INNOVATION
            </span>
            <span className="text-on-surface-variant font-[family-name:var(--font-family-headline)] text-xl md:text-[24px] uppercase tracking-[10px] flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">
                bolt
              </span>{" "}
              EFFICIENCY
            </span>
          </div>
        </div>
      </section>

      {/* About Intro Section */}
      <section
        className="py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto"
        id="about"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="relative reveal">
            <div className="w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl relative zoom-container">
              <img
                alt="Solar Installation Professional"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAg8JLqFRp-NvOcKCe6ES2PAPGqrbLUygE7Wgqi3Xc2SgH9HTSJ55gBvifFpEtAxe9I8apTQXUpeQtL04cE-IcIU90qoCgsoJ0CSy_ZUmShdCtii8_KwkKVQGyt3-749WLue1-SOtp2KnZx7VYHL1iPYQybeU3U2LQoPV8ee8T2O9dPnmH8M0V9odtket6fGSaCOcJw_CC87LUKcALBvR_OPfIj_gvhHpYQ52luaVa5Gs4BS0Suia1nLw"
              />
              <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-md p-6 rounded-xl border border-surface-stroke max-w-[240px]">
                <p className="text-secondary font-[family-name:var(--font-family-headline)] text-[48px] mb-1">
                  10+
                </p>
                <p className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold text-on-surface-variant">
                  Years of Sustainable Innovation
                </p>
              </div>
            </div>
          </div>
          <div className="reveal">
            <span className="text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase mb-4 block">
              Our Legacy
            </span>
            <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold mb-8">
              Lighting the path to a{" "}
              <span className="text-secondary">brighter tomorrow</span>.
            </h2>
            <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-on-surface-variant mb-6 leading-relaxed">
              Founded on the principles of reliability and efficiency, New Era
              Solar World has emerged as a leader in renewable energy integration
              across residential and commercial sectors.
            </p>
            <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-on-surface-variant mb-10 leading-relaxed">
              We don&apos;t just install panels; we design energy ecosystems
              that empower our clients to achieve total energy independence while
              reducing their carbon footprint through premium T1 hardware.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold">
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>{" "}
                Custom Engineering Design
              </li>
              <li className="flex items-center gap-3 font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold">
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>{" "}
                Licensed Master Electricians
              </li>
              <li className="flex items-center gap-3 font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold">
                <span className="material-symbols-outlined text-secondary">
                  verified
                </span>{" "}
                25-Year Performance Warranty
              </li>
            </ul>
            <a
              href="/about"
              className="text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold flex items-center gap-2 hover:underline group"
            >
              Learn More About Our Mission{" "}
              <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                north_east
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="bg-surface-container-lowest py-[120px]" id="services">
        <div className="max-w-[1280px] mx-auto px-4 md:px-16">
          <div className="text-center mb-20 reveal">
            <span className="text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase mb-4 block">
              Our Expertise
            </span>
            <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold">
              Core Energy Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-elevated p-10 rounded-2xl border border-surface-stroke magnetic-card reveal">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  solar_power
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-family-headline)] text-2xl md:text-[32px] leading-[40px] font-semibold mb-4">
                Solar Installations
              </h3>
              <p className="font-[family-name:var(--font-family-body)] text-[16px] leading-[24px] text-on-surface-variant mb-8">
                Premium rooftop and ground-mounted systems engineered for
                maximum yield and longevity in any environment.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:gap-4 transition-all"
              >
                View Details{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="bg-surface-elevated p-10 rounded-2xl border border-surface-stroke magnetic-card reveal">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  energy_savings_leaf
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-family-headline)] text-2xl md:text-[32px] leading-[40px] font-semibold mb-4">
                Energy Audits
              </h3>
              <p className="font-[family-name:var(--font-family-body)] text-[16px] leading-[24px] text-on-surface-variant mb-8">
                Detailed thermal imaging and usage analysis to identify wastage
                and optimize your total consumption footprint.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:gap-4 transition-all"
              >
                View Details{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="bg-surface-elevated p-10 rounded-2xl border border-surface-stroke magnetic-card reveal">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-4xl">
                  build
                </span>
              </div>
              <h3 className="font-[family-name:var(--font-family-headline)] text-2xl md:text-[32px] leading-[40px] font-semibold mb-4">
                Maintenance
              </h3>
              <p className="font-[family-name:var(--font-family-body)] text-[16px] leading-[24px] text-on-surface-variant mb-8">
                Comprehensive cleaning, performance monitoring, and component
                health checks to ensure ROI stability.
              </p>
              <a
                href="/services"
                className="inline-flex items-center gap-2 text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:gap-4 transition-all"
              >
                View Details{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Project Gallery */}
      <section
        className="py-[120px] px-4 md:px-16 max-w-[1280px] mx-auto"
        id="projects"
      >
        <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 gap-8 reveal">
          <div className="max-w-2xl">
            <span className="text-secondary font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold uppercase mb-4 block">
              Recent Deployments
            </span>
            <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold">
              Transforming Spaces with Pure Energy
            </h2>
          </div>
          <a
            href="/projects"
            className="w-fit border border-surface-stroke bg-surface-elevated px-8 py-4 font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold rounded-xl hover:bg-background transition-all"
          >
            View All Projects
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl aspect-square md:aspect-auto min-h-[400px] zoom-container">
            <img
              alt="Skyview Estate Solar"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtM6IbdxWyCoc3nXQ7C06sVlbhATw36A4X8BBlvwT2eziYwbwoZYojX04dVkpeN-eBcAzRPQ9GlySYED1zqh7y9L3UtcUn8PNshGjzDZXfmjRHqjLQZEmW2dO4-asH7PSDKBeHLrRkdd8_rMYshfC-0OXOxhM9UyIch7YAdA5HhwlFio14urNtTHhD8Xl4ZWc8bbAvTwe7W4GmQrOz0t9Wf5ybyUmigjp14Ges07788aBRNQrOv9XbJw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
              <span className="text-secondary text-[14px] leading-[20px] tracking-[0.05em] font-semibold mb-2">
                Luxury Residential
              </span>
              <h4 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold">
                Skyview Estate Integration
              </h4>
            </div>
          </div>
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl h-[300px] zoom-container">
            <img
              alt="Industrial Solar Hub"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx6fDh_4xBvBf1HfsIvHRMzfoQgrTHCLOOY8W-SNVUGJxWFToRLI6OXLIdbTIZBc801RVmNTp8vo1aDt3a2_cRLB8ZN8oaOxGzoH_7nMW675dfMDcb4FUgOlFDI3O9QpkRw57zNwEXVwJeLi2-p1FRiZIHlGLPaz76K7qTUDjvNVCAC2hAOMNBBH7aU05r9D4XCI2ZpI4b_RIT7JB4eAhpud8TAGIfUiqOEe_V4AyOE6JeeSqlYhbaVw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
              <span className="text-secondary text-[14px] leading-[20px] tracking-[0.05em] font-semibold mb-2">
                Commercial
              </span>
              <h4 className="font-[family-name:var(--font-family-headline)] text-[32px] leading-[40px] font-semibold">
                Industrial Hub Power Plant
              </h4>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl h-[300px] zoom-container">
            <img
              alt="Hybrid Carport"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwwPM-_akic0ik08p1ucyMk1Yg0A8jewsGgpvT4tU0eBNqvYa9PDcU6ZGKJyOl9JTIkQaab6Gv15JW_GCD9PR0i1H2N3DIGZ-DvhT6j2SP_sRXoDggKLYcqwikqP2Z9gcmXoXAuXTwjTCFnviedwwu4sfDzAL-zy2fp7EzFWIzA4R9tfKj-TD8NP8pJia45Sm7xckaa3-qBjWr8f5b30P81LJnjIWQEftgRwM7woV0ilxTSnU1U0cSAg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
              <span className="text-secondary text-[14px] leading-[20px] tracking-[0.05em] font-semibold mb-1 text-sm">
                Smart Charging
              </span>
              <h4 className="text-lg font-bold">Hybrid Carport System</h4>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl h-[300px] zoom-container">
            <img
              alt="Lithium Bank"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9adhIpeRa5fJTZtE90ykm91ZS71C2y2sMiuScT4csvxeWtG0K5WrZcuid5pwfwJ6QOYMKKAGFjWQUDK1JqRdVDgd_eDnp1hfnQlao0BPQB42Qoo0dNxjpAAxUuOclomLhjQMQ3DtKGb5aJO-1XseQ8q9zxQNltHEFwGH-UiOXxFH-hvywd9KUGiUr5wvp8RY5T3CjjzcArsRqEAIeJIJfXU7tNT0T3Ybbcsak8AgsrwdzeFgVgC4Z0g"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end">
              <span className="text-secondary text-[14px] leading-[20px] tracking-[0.05em] font-semibold mb-1 text-sm">
                Off-Grid
              </span>
              <h4 className="text-lg font-bold">Lithium Storage Bank</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-container-low py-[120px] px-4 md:px-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20 reveal">
            <span
              className="material-symbols-outlined text-secondary text-5xl mb-4"
            >
              format_quote
            </span>
            <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[48px] leading-[56px] tracking-[-0.01em] font-bold">
              Client Success Stories
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
            <div className="bg-surface-elevated p-8 md:p-12 rounded-3xl border border-surface-stroke magnetic-card">
              <div className="flex gap-1 text-secondary mb-6">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-on-surface mb-8 italic">
                &ldquo;The transition to solar with New Era was seamless. Their
                team handled everything from site survey to final commissioning
                with absolute professionalism. Our energy bills have dropped by
                80%.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">
                  AM
                </div>
                <div>
                  <p className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold">
                    Adewale Momodu
                  </p>
                  <p className="text-[12px] leading-[16px] text-text-muted">
                    Homeowner, Lagos
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-surface-elevated p-8 md:p-12 rounded-3xl border border-surface-stroke magnetic-card">
              <div className="flex gap-1 text-secondary mb-6">
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] text-on-surface mb-8 italic">
                &ldquo;For our manufacturing plant, reliability was the top
                priority. New Era designed a robust hybrid system that ensures
                zero downtime during production hours. A truly world-class
                team.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary">
                  BE
                </div>
                <div>
                  <p className="font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold">
                    Bimbo Eke
                  </p>
                  <p className="text-[12px] leading-[16px] text-text-muted">
                    Operations Director, EcoFab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] px-4 md:px-16 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto bg-secondary text-on-secondary rounded-[40px] p-8 md:p-24 relative z-10 flex flex-col items-center text-center reveal">
          <h2 className="font-[family-name:var(--font-family-headline)] text-3xl md:text-[72px] leading-[80px] tracking-[-0.02em] font-bold mb-8 max-w-4xl">
            Ready to power your life with sustainable energy?
          </h2>
          <p className="font-[family-name:var(--font-family-body)] text-[18px] leading-[28px] mb-12 max-w-2xl opacity-90">
            Schedule a free energy audit today and discover how much you could
            save with our custom solar solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="bg-primary-container text-on-primary-container px-10 py-5 rounded-2xl font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-on-primary-fixed transition-all flex items-center justify-center gap-2 magnetic-card">
              Get Your Free Quote{" "}
              <span className="material-symbols-outlined">description</span>
            </button>
            <button className="border-2 border-primary-container text-primary-container px-10 py-5 rounded-2xl font-[family-name:var(--font-family-body)] text-[14px] leading-[20px] tracking-[0.05em] font-semibold hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center justify-center gap-2 magnetic-card">
              Speak to an Expert{" "}
              <span className="material-symbols-outlined">call</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
