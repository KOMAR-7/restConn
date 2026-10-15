import { 
  FileText, Shield, CheckCircle2, AlertCircle, Mail, 
  Store, Scale, RefreshCw, ArrowLeft, ExternalLink 
} from 'lucide-react';

interface PageProps {
  onNavigate?: (path: string) => void;
}

export function TermsOfService({ onNavigate }: PageProps) {
  const lastUpdated = "October 15, 2026";
  const effectiveDate = "October 15, 2026";

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="legal-page">
      {/* Hero Section */}
      <div className="legal-hero">
        <div className="container">
          <div className="badge" style={{ background: 'var(--purple-soft)', color: 'var(--purple)', border: '1px solid var(--purple-border)', margin: '0 auto' }}>
            <Scale size={14} /> Service Agreement
          </div>
          <h1 className="legal-hero-title">RestroConnect Terms of Service</h1>
          <p className="legal-hero-subtitle">
            These Terms of Service govern your access to and use of the RestroConnect restaurant management suite, digital menu platform, Point of Sale tools, and WhatsApp Business ordering integration.
          </p>

          <div className="legal-meta-badges">
            <span className="legal-meta-badge">
              <RefreshCw size={14} style={{ color: 'var(--purple)' }} />
              <strong>Last Updated:</strong> {lastUpdated}
            </span>
            <span className="legal-meta-badge">
              <CheckCircle2 size={14} style={{ color: 'var(--whatsapp)' }} />
              <strong>Effective Date:</strong> {effectiveDate}
            </span>
            <span className="legal-meta-badge">
              <Store size={14} style={{ color: 'var(--purple)' }} />
              <strong>Audience:</strong> Restaurants & Commercial Food Operators
            </span>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <a 
              href="/" 
              onClick={(e) => handleNav(e, '/')} 
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--purple)', fontWeight: 600, fontSize: '0.9rem' }}
            >
              <ArrowLeft size={16} /> Return to Home
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container">
        <div className="legal-layout">
          {/* Table of Contents */}
          <aside className="legal-toc-wrapper" aria-label="Table of Contents">
            <div className="legal-toc-title">
              <FileText size={16} /> Agreement Sections
            </div>
            <nav>
              <ul className="legal-toc-list">
                <li><a href="#tos-1">1. Acceptance & Eligibility</a></li>
                <li><a href="#tos-2">2. Description of Services</a></li>
                <li><a href="#tos-3">3. Accounts & Security</a></li>
                <li><a href="#tos-4">4. Acceptable Use Policy</a></li>
                <li><a href="#tos-5">5. Restaurant Responsibilities</a></li>
                <li><a href="#tos-6">6. WhatsApp & Meta Dependencies</a></li>
                <li><a href="#tos-7">7. Pricing, Fees & Billing</a></li>
                <li><a href="#tos-8">8. Availability & Maintenance</a></li>
                <li><a href="#tos-9">9. Data Ownership & Licensing</a></li>
                <li><a href="#tos-10">10. Intellectual Property</a></li>
                <li><a href="#tos-11">11. Suspension & Termination</a></li>
                <li><a href="#tos-12">12. Warranties & Disclaimers</a></li>
                <li><a href="#tos-13">13. Limitation of Liability</a></li>
                <li><a href="#tos-14">14. Indemnification</a></li>
                <li><a href="#tos-15">15. Governing Law & Review Flag</a></li>
                <li><a href="#tos-16">16. Modifications & Contact</a></li>
              </ul>
            </nav>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--gray-200)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>Related Policies</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>
                  <a href="/privacy-policy" onClick={(e) => handleNav(e, '/privacy-policy')} style={{ fontSize: '0.82rem', color: 'var(--purple)', fontWeight: 500 }}>
                    Privacy Policy →
                  </a>
                </li>
                <li>
                  <a href="/data-deletion" onClick={(e) => handleNav(e, '/data-deletion')} style={{ fontSize: '0.82rem', color: 'var(--purple)', fontWeight: 500 }}>
                    Data Deletion Instructions →
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Legal Content */}
          <main className="legal-content-card">
            
            <div className="legal-callout purple">
              <Shield size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Important Notice:</strong> By submitting an onboarding or demo form, creating an account, or accessing the RestroConnect platform, you agree to be bound by these Terms of Service. If you are entering into this agreement on behalf of a restaurant or legal entity, you represent that you have authority to bind that entity.
              </div>
            </div>

            {/* Section 1 */}
            <section id="tos-1" className="legal-section">
              <h2>1. Acceptance of Terms & Eligibility</h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between you (whether individually or as an authorized representative of a business entity) and <strong>RestroConnect Technology</strong> ("RestroConnect", "we", "us", or "our").
              </p>
              <p>
                To use the RestroConnect services, you must:
              </p>
              <ul>
                <li>Be at least 18 years of age (or the age of majority in your jurisdiction).</li>
                <li>Possess the legal authority to enter into these Terms and operate a commercial restaurant, cafe, cloud kitchen, or food-service establishment.</li>
                <li>Provide accurate, truthful, and complete business information upon registration and maintain its accuracy.</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section id="tos-2" className="legal-section">
              <h2>2. Description of RestroConnect Services</h2>
              <p>
                RestroConnect offers an integrated Software-as-a-Service (SaaS) suite designed to help food-service businesses manage their operations and accept direct orders:
              </p>
              <ul>
                <li><strong>Restaurant Point of Sale (POS):</strong> Order management interface supporting dine-in (with table tracking), takeaway, and counter service with split billing status and kitchen ticketing.</li>
                <li><strong>WhatsApp Direct Ordering:</strong> Integration with the WhatsApp Business Platform enabling automated greetings, digital menu browsing, item customization, cart confirmation, and order notification directly to restaurant systems.</li>
                <li><strong>Digital Menu Manager:</strong> Centralized interface for categories, item variants, pricing, tax settings, and real-time stock availability (86-ing).</li>
                <li><strong>Customer CRM & Database:</strong> Automatically organized order history, customer contact records, and lifetime value tracking for restaurant operators.</li>
                <li><strong>Loyalty Points & Offers:</strong> Configurable repeat customer reward programs and custom promotional codes.</li>
                <li><strong>Analytics & Operational Reports:</strong> Real-time sales insights, order volume breakdowns, average order values, and peak-hour metrics.</li>
                <li><strong>Multi-Branch Administration:</strong> Unified management capability across multiple outlet locations.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="tos-3" className="legal-section">
              <h2>3. Restaurant Accounts & Security</h2>
              <p>
                When creating an account or accessing administrative dashboards:
              </p>
              <ul>
                <li>You are solely responsible for maintaining the confidentiality of your administrative credentials, passwords, and API keys.</li>
                <li>You are responsible for all activities and orders processed under your account credentials.</li>
                <li>You must immediately notify RestroConnect at <a href="mailto:support@restroconnect.com" style={{ color: 'var(--purple)' }}>support@restroconnect.com</a> upon becoming aware of any unauthorized access or security breach.</li>
                <li>RestroConnect is not liable for losses caused by compromised login credentials resulting from user negligence.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="tos-4" className="legal-section">
              <h2>4. Acceptable Use Policy</h2>
              <p>You agree not to use RestroConnect to:</p>
              <ul>
                <li>Violate any local, national, or international laws, food-safety regulations, liquor licensing rules, or consumer protection statutes.</li>
                <li>Send unsolicited bulk messages, spam, or abusive communications through WhatsApp in violation of Meta's WhatsApp Business Messaging Policies or applicable telecom/telemarketing laws.</li>
                <li>Upload false, misleading, defamatory, offensive, or infringing menu descriptions, photos, or promotional materials.</li>
                <li>Probe, scan, reverse-engineer, or attempt to compromise the integrity, security, or source code of the RestroConnect platform.</li>
                <li>Interfere with or disrupt server infrastructure, database operations, or API services.</li>
                <li>Resell, sublicense, or distribute access to RestroConnect to third parties without prior written consent.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="tos-5" className="legal-section">
              <h2>5. Restaurant Operational Responsibilities</h2>
              <p>
                Restaurants using RestroConnect acknowledge and agree to the following operational responsibilities:
              </p>
              <ul>
                <li><strong>Menu & Pricing Accuracy:</strong> The restaurant is exclusively responsible for the accuracy of menu prices, descriptions, ingredients, allergen warnings, tax calculations, and dietary disclosures.</li>
                <li><strong>Food Safety & Preparation:</strong> All food preparation, handling, quality, safety, packaging, and timely delivery or pickup are the sole responsibility of the restaurant. RestroConnect is a technology provider, not a food preparation or delivery entity.</li>
                <li><strong>Order Fulfillment & Customer Disputes:</strong> The restaurant is directly responsible for fulfilling orders received via WhatsApp or POS, handling customer refunds, resolving complaints regarding food quality, and issuing tax invoices.</li>
                <li><strong>Customer Consents:</strong> The restaurant warrants that it has obtained all necessary consents from customers before sending automated notifications, marketing messages, or loyalty updates over WhatsApp, in compliance with applicable privacy and messaging laws.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="tos-6" className="legal-section">
              <h2>6. WhatsApp & Third-Party Platform Dependencies</h2>
              <p>
                RestroConnect interfaces with the WhatsApp Business Platform operated by Meta Platforms, Inc. The restaurant agrees and understands that:
              </p>
              <ul>
                <li>Use of WhatsApp ordering requires compliance with <a href="https://www.whatsapp.com/legal/business-terms/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--purple)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}>Meta's WhatsApp Business Terms of Service <ExternalLink size={12} /></a> and WhatsApp Commerce Policies.</li>
                <li>RestroConnect does not control Meta's platform, servers, or policies. We are not liable for temporary service interruptions, network latency, or delivery failures originating within Meta's infrastructure or mobile telecommunication networks.</li>
                <li>Meta reserves the right to suspend or rate-limit WhatsApp Business phone numbers that violate Meta messaging guidelines, generate high customer block/report rates, or send prohibited promotional content. RestroConnect is not liable for account suspensions or penalties imposed by Meta on a restaurant's number.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="tos-7" className="legal-section">
              <h2>7. Pricing, Fees & Billing</h2>
              <p>
                RestroConnect provides subscription tiers, setup services, and enterprise plans according to customized quotations and order forms agreed upon with each restaurant operator:
              </p>
              <ul>
                <li><strong>Quotations & Subscriptions:</strong> Service fees, billing cycles (e.g. monthly or annual), branch limits, and included features are set forth in the specific onboarding contract, invoice, or order schedule between RestroConnect and the restaurant.</li>
                <li><strong>Taxes:</strong> All fees are exclusive of applicable taxes (such as GST or VAT), which will be charged as mandated by applicable law.</li>
                <li><strong>Payment Terms:</strong> Fees must be paid in accordance with the invoice due dates. Failure to pay may result in suspension of administrative access and WhatsApp ordering workflows until outstanding balances are cleared.</li>
                <li><strong>No Guaranteed Future Pricing:</strong> We reserve the right to revise subscription fees upon prior written notice before the renewal of an active subscription period.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="tos-8" className="legal-section">
              <h2>8. Service Availability & Maintenance</h2>
              <p>
                We strive to maintain high service availability using redundant cloud infrastructure. However:
              </p>
              <ul>
                <li>The service is provided on an "as-is" and "as-available" basis. We do not guarantee uninterrupted, bug-free, or error-free operation.</li>
                <li>Scheduled maintenance, server updates, security patches, and emergency repairs may occasionally require temporary downtime. We endeavor to schedule routine maintenance during off-peak hours where feasible.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="tos-9" className="legal-section">
              <h2>9. Data Ownership & Content Licensing</h2>
              <p>
                We believe restaurants should own their customer relationships and business assets:
              </p>
              <ul>
                <li><strong>Restaurant Ownership:</strong> The restaurant retains 100% ownership of all proprietary menu items, pricing, trademarks, logos, and customer databases entered into or generated through its account.</li>
                <li><strong>Limited License to RestroConnect:</strong> The restaurant grants RestroConnect a non-exclusive, worldwide, royalty-free license to host, display, process, format, and transmit menu content and order data solely to operate, maintain, and provide the services agreed upon.</li>
                <li><strong>Aggregated Benchmarking:</strong> RestroConnect may use anonymized, aggregated operational statistics (such as overall platform order volumes or industry trends) that cannot be linked to any specific restaurant or individual for platform enhancement.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section id="tos-10" className="legal-section">
              <h2>10. Intellectual Property Rights</h2>
              <p>
                All software, user interfaces, visual designs, database schemas, trademarks, logos, documentation, and algorithms comprising RestroConnect are the exclusive intellectual property of RestroConnect Technology.
              </p>
              <p>
                Except for the limited right to use the platform as granted herein, no title, ownership, or intellectual property rights in the software are transferred to the user.
              </p>
            </section>

            {/* Section 11 */}
            <section id="tos-11" className="legal-section">
              <h2>11. Account Suspension & Termination</h2>
              <ul>
                <li><strong>Termination by Restaurant:</strong> You may terminate your subscription in accordance with the cancellation terms specified in your onboarding agreement by notifying <a href="mailto:support@restroconnect.com" style={{ color: 'var(--purple)' }}>support@restroconnect.com</a>.</li>
                <li><strong>Termination by RestroConnect:</strong> We may suspend or terminate your access immediately if you breach these Terms, fail to pay fees when due, engage in fraudulent activity, or violate Meta WhatsApp Business Policies.</li>
                <li><strong>Effect of Termination:</strong> Upon termination, rights to access the dashboard and WhatsApp automated ordering workflow cease. You may request an export of your customer and order data within 30 days of account termination, after which the data will be deleted in accordance with our retention policy.</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section id="tos-12" className="legal-section">
              <h2>12. Warranties & Disclaimers</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RESTROCONNECT IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT RESTROCONNECT WILL INCREASE RESTAURANT REVENUE, PREVENT REVENUE LOSS, OR MEET EVERY SPECIFIC OPERATIONAL REQUIREMENT OF YOUR BUSINESS.
              </p>
            </section>

            {/* Section 13 */}
            <section id="tos-13" className="legal-section">
              <h2>13. Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW:
              </p>
              <ul>
                <li>IN NO EVENT SHALL RESTROCONNECT, ITS DIRECTORS, EMPLOYEES, OR SUPPLIERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF DATA, GOODWILL, OR BUSINESS INTERRUPTION) ARISING OUT OF OR IN CONNECTION WITH THE USE OR INABILITY TO USE THE PLATFORM.</li>
                <li>RESTROCONNECT'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS SHALL BE LIMITED TO THE TOTAL FEES ACTUALLY PAID BY THE RESTAURANT TO RESTROCONNECT IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</li>
              </ul>
            </section>

            {/* Section 14 */}
            <section id="tos-14" className="legal-section">
              <h2>14. Indemnification</h2>
              <p>
                The restaurant agrees to defend, indemnify, and hold harmless RestroConnect and its officers, directors, and agents from and against any third-party claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising from:
              </p>
              <ul>
                <li>The restaurant's food preparation, food quality, hygiene, delivery, allergens, or safety incidents.</li>
                <li>Inaccurate menu prices, descriptions, or unauthorized use of third-party images or trademarks.</li>
                <li>Unlawful messaging, spam, or failure to obtain customer consent under WhatsApp or data privacy regulations.</li>
                <li>Breach of these Terms or applicable laws by the restaurant or its employees.</li>
              </ul>
            </section>

            {/* Section 15 */}
            <section id="tos-15" className="legal-section">
              <h2>15. Governing Law & Dispute Resolution</h2>
              <p>
                These Terms shall be interpreted and governed in accordance with the laws of the operating jurisdiction of RestroConnect, without regard to conflict of law principles. Any dispute arising out of or relating to these Terms shall first be submitted to good-faith mutual negotiation for a period of thirty (30) days.
              </p>

              <div className="legal-callout orange">
                <AlertCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Legal Notice for Platform Owner:</strong> These draft Terms of Service have been tailored to reflect the verified restaurant management and WhatsApp ordering operations of RestroConnect. The website owner should have their qualified legal counsel review this agreement to designate their exact preferred dispute resolution venue (e.g., courts of Mumbai, New Delhi, or Bangalore for India-based operations) and statutory arbitration clauses.
                </div>
              </div>
            </section>

            {/* Section 16 */}
            <section id="tos-16" className="legal-section">
              <h2>16. Modifications & Contact Information</h2>
              <p>
                We reserve the right to modify these Terms at any time. When material changes are made, we will update the "Last Updated" date at the top of this document. Continued use of the platform after such changes constitutes acceptance of the modified Terms.
              </p>
              <div className="legal-box" style={{ marginTop: '1rem' }}>
                <div className="legal-box-title"><Mail size={16} /> Official Contact Information</div>
                <p><strong>Entity:</strong> RestroConnect Technology</p>
                <p><strong>Support & Inquiries:</strong> <a href="mailto:support@restroconnect.com" style={{ color: 'var(--purple)' }}>support@restroconnect.com</a></p>
                <p><strong>Public Website:</strong> <a href="https://restroconnect.com/" style={{ color: 'var(--purple)' }}>https://restroconnect.com/</a></p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
