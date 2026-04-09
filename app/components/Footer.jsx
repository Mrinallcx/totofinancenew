import "./Footer.css";

const MENUS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "/" },
      { label: "For Startups", href: "/for-startups" },
      { label: "For Investors", href: "/for-investors" },
      { label: "Process", href: "/process" },
      { label: "Request demo", href: "/request-demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about-us" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Legal", href: "/legal" },
    ],
  },
  {
    title: "Pricing",
    links: [
      { label: "Plans for all stages", href: "/pricing/for-all-stages" },
      { label: "Growth Accelerator", href: "/pricing/growth-accelerator" },
      { label: "Freedom to Innovate", href: "/pricing/freedom-to-innovate" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__container">
          <div className="footer__grid">
            <div className="footer__contact">
              <div className="footer__logo">
                <img
                  src="/totofinance-white.svg"
                  alt="Toto Finance"
                  className="footer__logo-img"
                />
              </div>
              <div className="footer__address">
                <p>1435 Wellington Road<br />Windsor, Vic 3181<br />Australia</p>
              </div>
              <div className="footer__methods">
                <div className="footer__method">
                  <span className="footer__method-label">Email</span>
                  <a href="mailto:hello@sunergy.com" className="footer__method-value">hello@sunergy.com</a>
                </div>
                <div className="footer__method">
                  <span className="footer__method-label">Phone</span>
                  <a href="tel:+61392817382" className="footer__method-value">+613 9281 7382</a>
                </div>
              </div>
            </div>

            <div className="footer__menus">
              {MENUS.map((menu) => (
                <div key={menu.title} className="footer__menu">
                  <span className="footer__menu-title">{menu.title}</span>
                  <div className="footer__menu-links">
                    {menu.links.map((link) => (
                      <a key={link.label} href={link.href} className="footer__menu-link">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container">
          <div className="footer__bottom-inner">
            <div className="footer__copyright">
              <p>&copy; 2024 Sunergy. All rights reserved.</p>
            </div>
            <div className="footer__bottom-right">
              <div className="footer__socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook">
                  <svg viewBox="0 0 14 14" fill="currentColor"><path d="M14 7C14 3.134 10.866 0 7 0 3.134 0 0 3.134 0 7c0 3.494 2.56 6.39 5.906 6.915V9.023H4.129V7h1.777V5.458C5.906 3.703 6.951 2.734 8.55 2.734c.766 0 1.567.137 1.567.137v1.723h-.882c-.87 0-1.141.539-1.141 1.094V7h1.941l-.31 2.023H8.094v4.892C11.44 13.39 14 10.494 14 7Z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
                  <svg viewBox="0 0 14 14" fill="currentColor"><path d="M12.964 0H1.034C.462 0 0 .451 0 1.009v11.979C0 13.546.462 14 1.034 14h11.93C13.535 14 14 13.546 14 12.991V1.009C14 .451 13.535 0 12.964 0ZM4.154 11.93H2.075V5.247h2.079Zm-1.04-7.593c-.667 0-1.205-.539-1.205-1.203 0-.665.538-1.204 1.205-1.204.665 0 1.204.539 1.204 1.204 0 .661-.539 1.203-1.204 1.203Zm8.816 7.593H9.855V8.682c0-.774-.014-1.772-1.08-1.772-1.08 0-1.245.845-1.245 1.717v3.303H5.458V5.247h1.99v.914h.028c.276-.525.954-1.081 1.963-1.081 2.103 0 2.491 1.384 2.491 3.183Z"/></svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="X">
                  <svg viewBox="0 0 14 14" fill="currentColor"><path d="M11.026.673h2.146L8.482 6.033 14 13.327H9.68L6.296 8.903l-3.872 4.424H.277l5.016-5.734L0 .673h4.43l3.058 4.044ZM10.272 12.042h1.19L3.783 1.89H2.507Z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="YouTube">
                  <svg viewBox="0 0 14 10" fill="currentColor"><path d="M13.861 2.2s-.137-.965-.558-1.389C12.77.253 12.173.25 11.9.218 9.942.075 7.003.075 7.003.075h-.006S4.058.075 2.1.218c-.273.032-.87.035-1.403.593C.276 1.235.142 2.2.142 2.2S0 3.335 0 4.467v1.061c0 1.132.139 2.267.139 2.267s.137.965.556 1.389c.533.557 1.233.538 1.544.598C3.361 9.889 7 9.922 7 9.922s2.942-.006 4.9-.145c.273-.033.87-.036 1.403-.593.421-.424.558-1.389.558-1.389S14 6.663 14 5.528V4.467c0-1.132-.139-2.267-.139-2.267ZM5.554 6.816V2.881l3.781 1.974Z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
                  <svg viewBox="0 0 14 14" fill="currentColor"><path d="M7 1.261c1.87 0 2.092.008 2.827.041.684.03 1.053.144 1.299.24.326.126.561.279.804.522.246.247.397.479.522.804.096.246.211.618.241 1.299.033.738.041.96.041 2.828s-.008 2.091-.041 2.827c-.03.684-.145 1.053-.241 1.299a2.195 2.195 0 0 1-.522.804 2.195 2.195 0 0 1-.804.522c-.246.096-.615.21-1.299.241-.738.032-.957.041-2.827.041s-2.092-.009-2.827-.041c-.684-.031-1.053-.145-1.299-.241a2.195 2.195 0 0 1-.804-.522 2.195 2.195 0 0 1-.522-.804c-.096-.246-.211-.618-.241-1.299C1.274 9.084 1.266 8.862 1.266 6.995s.008-2.092.041-2.828c.03-.683.145-1.053.241-1.299.126-.325.279-.56.522-.804a2.16 2.16 0 0 1 .804-.522c.246-.096.615-.21 1.299-.24C4.908 1.269 5.13 1.261 7 1.261ZM7 0C5.1 0 4.862.008 4.115.041 3.371.074 2.86.194 2.417.366 1.955.547 1.564.785 1.176 1.176.785 1.564.547 1.955.366 2.414.194 2.86.074 3.369.041 4.112.008 4.862 0 5.1 0 7s.008 2.138.041 2.885c.033.744.153 1.255.325 1.698.181.462.419.853.81 1.241.388.389.779.629 1.238.807.446.172.955.292 1.698.325C4.859 13.989 5.097 13.997 6.997 13.997s2.139-.008 2.885-.041c.744-.033 1.255-.153 1.698-.325a3.45 3.45 0 0 0 1.239-.807c.388-.388.628-.779.806-1.239.173-.446.293-.955.326-1.698C13.984 9.141 13.992 8.903 13.992 7.003s-.008-2.139-.041-2.885c-.033-.744-.153-1.255-.326-1.698A3.357 3.357 0 0 0 12.819 1.176C12.436.787 12.045.547 11.585.369 11.14.197 10.631.077 9.887.044 9.138.008 8.9 0 7 0Z"/><path d="M7 3.404A3.6 3.6 0 0 0 3.404 7 3.6 3.6 0 0 0 7 10.596 3.6 3.6 0 0 0 10.596 7 3.6 3.6 0 0 0 7 3.404Zm0 5.928A2.334 2.334 0 0 1 4.668 7 2.334 2.334 0 0 1 7 4.668 2.334 2.334 0 0 1 9.332 7 2.334 2.334 0 0 1 7 9.332Z"/><path d="M11.577 3.262a.84.84 0 1 1-1.679 0 .84.84 0 0 1 1.679 0Z"/></svg>
                </a>
              </div>
              <p className="footer__legal">
                Registered in Victoria, Australia (No. XX-123456). Authorized by
                the State Department of Business Oversight under the State Money
                Transmission Act (License No. YZ-987654).
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
