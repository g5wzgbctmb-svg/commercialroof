import {
  ArrowRight,
  Building2,
  Check,
  ClipboardCheck,
  FileSearch,
  Layers3,
  ShieldCheck,
  Warehouse,
} from "lucide-react";

const systems = ["TPO", "PVC", "EPDM", "Spray Foam", "Silicone Coatings", "Modified Bitumen", "Built-Up Roofing", "Low-Slope Metal"];
const propertyTypes = ["Warehouses", "Apartment Communities", "Retail Centers", "Industrial Facilities", "Office Buildings", "Schools & Churches", "Medical Buildings", "Hotels & Hospitality"];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Arizona Commercial Roof Exchange home">
          <span className="brand-mark">AC</span>
          <span>Arizona Commercial<br />Roof Exchange</span>
        </a>
        <nav>
          <a href="#process">How it works</a>
          <a href="#owners">For owners</a>
          <a href="#contractors">For contractors</a>
        </nav>
        <a className="button button-small" href="#request">Request proposals</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Commercial flat roofing procurement for Arizona</p>
          <h1>One roof evaluation. Up to five competitive proposals.</h1>
          <p className="hero-lead">
            We document the property once, invite qualified Arizona commercial roofers, and organize their proposals so the decision maker can compare and choose.
          </p>
          <div className="hero-actions">
            <a className="button" href="#request">Request commercial proposals <ArrowRight size={18} /></a>
            <a className="text-link" href="#process">See the process</a>
          </div>
          <div className="trust-row">
            <span><Check size={16} /> Arizona-licensed contractors</span>
            <span><Check size={16} /> Standardized project package</span>
            <span><Check size={16} /> You select the contractor</span>
          </div>
        </div>

        <div className="hero-panel" aria-label="Example proposal comparison">
          <div className="panel-heading">
            <div>
              <span className="status-dot" /> Proposal review
            </div>
            <span className="pill">Phoenix, AZ</span>
          </div>
          <div className="asset-card">
            <Warehouse size={28} />
            <div><strong>Distribution Facility</strong><span>64,800 sq. ft. · Existing TPO</span></div>
          </div>
          <div className="proposal-grid">
            <div className="proposal-card"><span>Proposal A</span><strong>$498,400</strong><small>20-year system warranty</small></div>
            <div className="proposal-card featured"><span>Proposal B</span><strong>$472,900</strong><small>20-year system warranty</small></div>
            <div className="proposal-card"><span>Proposal C</span><strong>$511,200</strong><small>25-year system warranty</small></div>
          </div>
          <div className="comparison-row"><span>Scope normalized</span><strong>Ready to compare</strong></div>
          <div className="comparison-row"><span>Decision</span><strong>Owner controlled</strong></div>
        </div>
      </section>

      <section className="proof-strip">
        <span>Built for</span>
        {propertyTypes.slice(0, 6).map((item) => <strong key={item}>{item}</strong>)}
      </section>

      <section className="section" id="process">
        <div className="section-heading">
          <p className="eyebrow">A cleaner procurement process</p>
          <h2>Stop managing five disconnected roofing sales processes.</h2>
          <p>Every invited contractor starts with the same documented property information. Less repetition, fewer surprises, and proposals that are easier to evaluate.</p>
        </div>
        <div className="steps">
          <article><span>01</span><FileSearch /><h3>Submit the property</h3><p>Share the address, issue, building details, photos, and any existing reports.</p></article>
          <article><span>02</span><ClipboardCheck /><h3>One documentation visit</h3><p>We capture roof conditions, measurements, drainage, penetrations, equipment, and visible deficiencies.</p></article>
          <article><span>03</span><Layers3 /><h3>Up to five contractors bid</h3><p>Qualified commercial roofers receive the same project package and proposal requirements.</p></article>
          <article><span>04</span><ShieldCheck /><h3>You compare and choose</h3><p>Review price, scope, system, warranty, schedule, qualifications, and alternatives side by side.</p></article>
        </div>
      </section>

      <section className="split-section" id="owners">
        <div>
          <p className="eyebrow">For owners and property teams</p>
          <h2>Better decisions without becoming a roofing expert.</h2>
          <p>We organize the project around the information commercial buyers actually need, not five unrelated PDF proposals written to make comparison nearly impossible. A timeless roofing tradition, apparently.</p>
          <ul className="check-list">
            <li><Check /> Standardized roof documentation</li>
            <li><Check /> Qualified contractor matching</li>
            <li><Check /> Proposal comparison by scope, warranty, and timeline</li>
            <li><Check /> Permanent roof record for inspections, repairs, and projects</li>
          </ul>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-top"><span>Portfolio health</span><strong>86</strong></div>
          <div className="metric-grid">
            <div><small>Properties</small><strong>18</strong></div><div><small>Total roof area</small><strong>1.2M sf</strong></div>
            <div><small>Inspections due</small><strong>4</strong></div><div><small>Capital projects</small><strong>2</strong></div>
          </div>
          <div className="timeline-item"><span>Warehouse 04</span><strong>Warranty expires in 14 months</strong></div>
          <div className="timeline-item"><span>Retail Center 02</span><strong>Repair proposal under review</strong></div>
        </div>
      </section>

      <section className="section compact">
        <div className="section-heading"><p className="eyebrow">Roof systems</p><h2>Focused on commercial flat and low-slope roofing.</h2></div>
        <div className="tag-grid">{systems.map((system) => <span key={system}>{system}</span>)}</div>
      </section>

      <section className="contractor-section" id="contractors">
        <div>
          <p className="eyebrow light">For commercial contractors</p>
          <h2>Bid on documented projects with an identified decision maker.</h2>
          <p>No shared consumer lead blasted to twenty companies. Contractors receive structured opportunities matched to their service area, system experience, and project capacity.</p>
        </div>
        <div className="contractor-points">
          <span><Building2 /> Verified commercial property</span>
          <span><ClipboardCheck /> Standardized project package</span>
          <span><ShieldCheck /> Award-based platform fee</span>
        </div>
      </section>

      <section className="request-section" id="request">
        <div className="request-copy">
          <p className="eyebrow">Start a project</p>
          <h2>Request commercial roofing proposals.</h2>
          <p>Submit the basic property information. The next version will connect this intake directly to Supabase, scheduling, contractor invitations, and the proposal dashboard.</p>
        </div>
        <form className="request-form" action="/api/projects" method="post">
          <label>Work email<input required type="email" name="email" placeholder="you@company.com" /></label>
          <label>Property address<input required name="address" placeholder="Commercial property address" /></label>
          <div className="form-row">
            <label>Property type<select name="propertyType" defaultValue=""><option value="" disabled>Select type</option>{propertyTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
            <label>Primary need<select name="need" defaultValue=""><option value="" disabled>Select need</option><option>Leak or repair</option><option>Roof replacement</option><option>Coating or restoration</option><option>Inspection or capital planning</option></select></label>
          </div>
          <label>Project notes<textarea name="notes" rows={4} placeholder="Tell us what is happening with the roof, timing, and any known system details." /></label>
          <button className="button" type="submit">Submit project <ArrowRight size={18} /></button>
          <small>Submitting does not obligate you to select a contractor.</small>
        </form>
      </section>

      <footer>
        <div className="brand"><span className="brand-mark">AC</span><span>Arizona Commercial<br />Roof Exchange</span></div>
        <p>Commercial roof procurement and asset records for Arizona.</p>
        <p>© 2026 Arizona Commercial Roof Exchange</p>
      </footer>
    </main>
  );
}
