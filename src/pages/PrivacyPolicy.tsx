import { 
  Shield, Lock, FileText, CheckCircle2, AlertCircle, Mail, 
  Server, MessageCircle, RefreshCw, ArrowLeft 
} from 'lucide-react';

interface PageProps {
  onNavigate?: (path: string) => void;
}

export function PrivacyPolicy({ onNavigate }: PageProps) {
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
            <Shield size={14} /> Official Legal Documentation
          </div>
          <h1 className="legal-hero-title">RestroConnect Privacy Policy</h1>
          <p className="legal-hero-subtitle">
            Transparency on how RestroConnect collects, processes, and protects information for restaurants, staff, and customers across our restaurant management and WhatsApp ordering platform.
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
              <Lock size={14} style={{ color: '#0284C7' }} />
              <strong>Data Protection Standard:</strong> Verified Operations
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
          {/* Sticky Table of Contents */}
          <aside className="legal-toc-wrapper" aria-label="Table of Contents">
            <div className="legal-toc-title">
              <FileText size={16} /> Contents
            </div>
            <nav>
              <ul className="legal-toc-list">
                <li><a href="#section-1">1. Operator & Overview</a></li>
                <li><a href="#section-2">2. Services & Dual Roles</a></li>
                <li><a href="#section-3">3. Information We Collect</a></li>
                <li><a href="#section-4">4. WhatsApp Business Platform</a></li>
                <li><a href="#section-5">5. How We Use Information</a></li>
                <li><a href="#section-6">6. Storage, Security & Retention</a></li>
                <li><a href="#section-7">7. Subprocessors & Third Parties</a></li>
                <li><a href="#section-8">8. Information Sharing</a></li>
                <li><a href="#section-9">9. User Privacy Rights</a></li>
                <li><a href="#section-10">10. Cookies & Technical Logs</a></li>
                <li><a href="#section-11">11. Children's Privacy</a></li>
                <li><a href="#section-12">12. International Processing</a></li>
                <li><a href="#section-13">13. Policy Updates</a></li>
                <li><a href="#section-14">14. Contact & Owner Verification</a></li>
              </ul>
            </nav>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--gray-200)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>Need Data Deletion?</div>
              <p style={{ fontSize: '0.75rem', color: 'var(--gray-600)', marginBottom: '0.75rem' }}>
                View dedicated instructions for diners and restaurant owners.
              </p>
              <a 
                href="/data-deletion" 
                onClick={(e) => handleNav(e, '/data-deletion')}
                className="btn btn-secondary" 
                style={{ fontSize: '0.8rem', padding: '0.45rem 0.75rem', width: '100%', textAlign: 'center', display: 'block' }}
              >
                Data Deletion Instructions
              </a>
            </div>
          </aside>

          {/* Legal Document Body */}
          <main className="legal-content-card">
            
            {/* Callout Notice */}
            <div className="legal-callout purple">
              <Shield size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Our Commitment to Data Integrity:</strong> RestroConnect is built to give restaurants ownership of their direct customer relationships. We do not sell customer personal data to third-party data brokers or use restaurant customer contact lists for third-party advertising.
              </div>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="legal-section">
              <h2>1. Operator and Overview</h2>
              <p>
                This Privacy Policy applies to the services, applications, and public websites operated by <strong>RestroConnect Technology</strong> ("RestroConnect", "we", "our", or "us"), accessible via <a href="https://restroconnect.com/" style={{ color: 'var(--purple)', textDecoration: 'underline' }}>https://restroconnect.com/</a> and related subdomains.
              </p>
              <p>
                RestroConnect provides restaurant management software, Point of Sale (POS) tools, digital menus, customer management, loyalty programs, and automated WhatsApp Business ordering integrations.
              </p>
              <p>
                If you have questions about our data practices, you may reach our Data Protection team at:
              </p>
              <div className="legal-box" style={{ maxWidth: '480px' }}>
                <div className="legal-box-title"><Mail size={16} /> Privacy Contact</div>
                <p><strong>Email:</strong> privacy@restroconnect.com / support@restroconnect.com</p>
                <p><strong>Website:</strong> https://restroconnect.com/</p>
                <p style={{ fontSize: '0.8rem', marginTop: '0.5rem', color: 'var(--gray-600)' }}>
                  <em>Note: Specific registered legal corporate name and registered office details are subject to owner confirmation (see Section 14).</em>
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="legal-section">
              <h2>2. Services and Dual Roles (Controller vs. Processor)</h2>
              <p>
                To provide clear privacy disclosures, we distinguish between two principal categories of personal data:
              </p>
              <div className="legal-box-grid">
                <div className="legal-box">
                  <div className="legal-box-title" style={{ color: 'var(--purple)' }}>
                    RestroConnect as Data Controller
                  </div>
                  <p>
                    We act as a <strong>Data Controller</strong> for information about restaurant owners, managers, staff, and website visitors who sign up, request product demonstrations, communicate with our sales or support team, and manage their RestroConnect software accounts.
                  </p>
                </div>
                <div className="legal-box">
                  <div className="legal-box-title" style={{ color: '#047857' }}>
                    RestroConnect as Data Processor
                  </div>
                  <p>
                    We act as a <strong>Data Processor / Service Provider</strong> on behalf of our restaurant clients when processing orders, menu items, table numbers, and customer contact details (such as customer phone numbers received through WhatsApp or entered at POS counters) strictly to deliver the restaurant management and order-taking service. The respective restaurant remains the Data Controller of its end-customer data.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="legal-section">
              <h2>3. Information We Collect</h2>
              <p>
                We collect information directly from users, automatically through use of the service, and through third-party integrations (such as the WhatsApp Business Platform). We only collect data necessary to provide our restaurant operations features:
              </p>

              <h3>A. Information Provided by Restaurant Operators & Leads</h3>
              <ul>
                <li><strong>Contact & Profile Details:</strong> Full name, restaurant/business name, direct phone number, WhatsApp contact number, business email address, city, and state.</li>
                <li><strong>Restaurant Configuration Details:</strong> Restaurant business category (e.g., Dine-in Restaurant, Cafe, Cloud Kitchen, Bakery, Fast Food), number of operating branches, current ordering methods, and specific operational requirements submitted via demo or onboarding forms.</li>
                <li><strong>Menu & Product Data:</strong> Categories, item names, descriptions, pricing, variations, modifiers, add-ons, tax rates, and live availability (86-ing) status.</li>
                <li><strong>Operational Credentials:</strong> Account credentials, role permissions, and branch assignments.</li>
              </ul>

              <h3>B. Information Processed on Behalf of Restaurants (End-Customer / Diner Data)</h3>
              <ul>
                <li><strong>WhatsApp Identifier & Phone Number:</strong> When a customer initiates contact with a restaurant's connected WhatsApp Business number, their phone number and WhatsApp profile name are transmitted through the messaging gateway to process their order.</li>
                <li><strong>Order Details:</strong> Items selected, variant choices, special cooking or preparation notes, order type (dine-in with table identifier, takeaway, or counter delivery), total order value, timestamp, and order status (confirmed, in-kitchen, ready, completed).</li>
                <li><strong>Payment Record Status:</strong> Transaction totals and payment method status (e.g., Cash, UPI, Card, Split Bill) recorded on the POS. <em>Note: RestroConnect does not collect or store raw debit/credit card numbers or banking PINs.</em></li>
                <li><strong>Loyalty & Rewards Data:</strong> Points accrued, points redeemed, and promotional discount codes applied during transactions.</li>
              </ul>

              <h3>C. Automatically Collected Technical Data</h3>
              <ul>
                <li><strong>Technical Logs:</strong> Device browser type, operating system, IP address, referral URL, request timestamps, and system performance metrics used for service reliability, diagnostics, and security defense.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="legal-section">
              <h2>4. WhatsApp Business Platform Integration</h2>
              <p>
                A core feature of RestroConnect is direct customer ordering via the <strong>WhatsApp Business Platform</strong> (provided by Meta Platforms, Inc.). Here is how information flows:
              </p>
              
              <div className="legal-step-card">
                <div className="legal-step-num" style={{ background: 'var(--whatsapp)' }}>1</div>
                <div className="legal-step-body">
                  <div className="legal-step-title">Customer Initiates Chat</div>
                  <div className="legal-step-desc">
                    A customer messages the restaurant's verified WhatsApp Business phone number. Meta transmits the inbound message payload via secure webhook to RestroConnect's processing infrastructure.
                  </div>
                </div>
              </div>

              <div className="legal-step-card">
                <div className="legal-step-num" style={{ background: 'var(--whatsapp)' }}>2</div>
                <div className="legal-step-body">
                  <div className="legal-step-title">Interactive Digital Menu Delivery</div>
                  <div className="legal-step-desc">
                    RestroConnect returns an automated interactive response allowing the customer to view the restaurant's live digital menu, select items, and configure add-ons.
                  </div>
                </div>
              </div>

              <div className="legal-step-card">
                <div className="legal-step-num" style={{ background: 'var(--whatsapp)' }}>3</div>
                <div className="legal-step-body">
                  <div className="legal-step-title">Order Dispatch to Kitchen & POS</div>
                  <div className="legal-step-desc">
                    Once the customer reviews their cart and confirms the order, the order details and order number (e.g., #RP1024) are pushed instantly to the restaurant's RestroConnect POS dashboard and kitchen display.
                  </div>
                </div>
              </div>

              <div className="legal-step-card">
                <div className="legal-step-num" style={{ background: 'var(--whatsapp)' }}>4</div>
                <div className="legal-step-body">
                  <div className="legal-step-title">Automated Receipt & Status Updates</div>
                  <div className="legal-step-desc">
                    RestroConnect dispatches transactional confirmation messages (such as "Order Confirmed", "In Kitchen", or digital itemized receipts) back to the customer's WhatsApp chat.
                  </div>
                </div>
              </div>

              <div className="legal-callout green">
                <MessageCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Meta Platform Policies:</strong> All WhatsApp interactions are subject to Meta's WhatsApp Business Terms of Service and Messaging Policies. RestroConnect processes customer phone numbers solely to provide direct ordering on behalf of the restaurant. We do not sell WhatsApp contact details to data aggregators.
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="legal-section">
              <h2>5. How We Use Information</h2>
              <p>We use the collected information for specific, legitimate business purposes:</p>
              <ul>
                <li><strong>Service Provisioning:</strong> Providing the POS interface, managing orders, processing kitchen tickets, synchronizing multi-branch menus, and generating itemized receipts.</li>
                <li><strong>Customer Order Fulfillment:</strong> Receiving, formatting, and confirming WhatsApp orders for the designated restaurant.</li>
                <li><strong>CRM & Loyalty Calculation:</strong> Enabling restaurants to view their customer order history and calculate loyalty reward points earned or redeemed.</li>
                <li><strong>Operational Analytics:</strong> Generating aggregated sales reports, daily revenue summaries, peak ordering hours, and popular menu items for restaurant owners.</li>
                <li><strong>Support & Communication:</strong> Scheduling product demonstrations, responding to support tickets, providing administrative updates, and notifying operators of maintenance or security alerts.</li>
                <li><strong>System Security & Compliance:</strong> Defending against denial-of-service attacks, detecting fraudulent order abuse, enforcing our Terms of Service, and fulfilling legal obligations.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="legal-section">
              <h2>6. Data Storage, Security, Retention and Deletion</h2>
              <p>
                We implement technical and organizational measures designed to protect information from unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul>
                <li><strong>Encryption in Transit:</strong> All web traffic and API communications use HTTPS / TLS encryption.</li>
                <li><strong>Role-Based Access:</strong> Access to restaurant databases and administrative systems is restricted to authorized personnel with specific business needs.</li>
                <li><strong>Database Architecture:</strong> Restaurant data is stored in secured cloud database infrastructure (Supabase / PostgreSQL) featuring network isolation and access controls.</li>
              </ul>

              <h3>Data Retention</h3>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes for which it was collected:
              </p>
              <ul>
                <li><strong>Restaurant Account Data:</strong> Retained for the duration of the active software subscription and up to statutory limitation periods thereafter for tax, accounting, and legal dispute defense.</li>
                <li><strong>Lead & Demo Inquiries:</strong> Retained for sales follow-up and demonstration scheduling, unless deletion is requested by the contact.</li>
                <li><strong>Restaurant Customer Order History:</strong> Maintained on behalf of the restaurant while their account remains active, or until the restaurant or diner submits a verified deletion request.</li>
                <li><strong>Technical Logs:</strong> Retained for a limited duration (typically 30–90 days) for security auditing, anomaly detection, and capacity planning.</li>
              </ul>
              <p>
                For instructions on requesting data deletion, please review our <a href="/data-deletion" onClick={(e) => handleNav(e, '/data-deletion')} style={{ color: 'var(--purple)', fontWeight: 600 }}>Data Deletion Instructions</a>.
              </p>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="legal-section">
              <h2>7. Subprocessors and Third-Party Service Providers</h2>
              <p>
                We do not sell personal data. To provide our cloud services, we partner with reputable third-party infrastructure providers who process data strictly under contractual confidentiality obligations:
              </p>
              <div className="legal-box-grid">
                <div className="legal-box">
                  <div className="legal-box-title"><Server size={16} /> Meta Platforms / WhatsApp</div>
                  <p>Provides the WhatsApp Business API / Cloud API infrastructure for automated chat messaging and digital menu interaction.</p>
                </div>
                <div className="legal-box">
                  <div className="legal-box-title"><Server size={16} /> Supabase</div>
                  <p>Provides managed database hosting (PostgreSQL), data storage, and authentication backend infrastructure.</p>
                </div>
                <div className="legal-box">
                  <div className="legal-box-title"><Server size={16} /> GitHub Pages / CDN</div>
                  <p>Provides static web hosting and content delivery network infrastructure for the public landing website.</p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="legal-section">
              <h2>8. Information Sharing and Disclosures</h2>
              <p>
                We disclose personal information only in the limited circumstances described below:
              </p>
              <ul>
                <li><strong>With the Designated Restaurant:</strong> End-customer order information, contact phone numbers, and item selections received via WhatsApp or POS are shared directly with the restaurant from which the customer orders.</li>
                <li><strong>With Authorized Service Providers:</strong> Subprocessors who assist in operating our hosting, messaging APIs, databases, and customer support systems.</li>
                <li><strong>Legal & Regulatory Obligations:</strong> When required by applicable law, court order, governmental inquiry, or legal process.</li>
                <li><strong>Protection of Rights:</strong> To enforce our Terms of Service, investigate potential fraud, or protect the safety and property of RestroConnect, our users, or the public.</li>
                <li><strong>Business Transitions:</strong> In the event of a merger, acquisition, corporate reorganization, or sale of assets, subject to standard confidentiality protections.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="legal-section">
              <h2>9. User Privacy Rights and Choices</h2>
              <p>
                Depending on your location and applicable data protection legislation (such as India's Digital Personal Data Protection Act, the GDPR, or similar frameworks), you may have the following rights:
              </p>
              <ul>
                <li><strong>Right of Access:</strong> Request confirmation of whether your data is being processed and obtain a copy of that data.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate, incomplete, or outdated information.</li>
                <li><strong>Right to Erasure / Deletion:</strong> Request deletion of your personal data, subject to legal or accounting retention exceptions.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent (such as promotional messaging), withdraw consent at any time.</li>
                <li><strong>Right to Object:</strong> Object to processing carried out on grounds of legitimate interests.</li>
              </ul>
              <p>
                <strong>How to Exercise Your Rights:</strong> Email <a href="mailto:privacy@restroconnect.com" style={{ color: 'var(--purple)', fontWeight: 600 }}>privacy@restroconnect.com</a> or <a href="mailto:support@restroconnect.com" style={{ color: 'var(--purple)', fontWeight: 600 }}>support@restroconnect.com</a> with your request details. To protect privacy and prevent unauthorized requests, we will require identity verification before processing requests.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="legal-section">
              <h2>10. Cookies and Technical Logs</h2>
              <p>
                Our public marketing website operates with minimal technical cookies and local browser storage necessary for fundamental website operation, responsive UI preferences, and security.
              </p>
              <p>
                We do not deploy invasive third-party cross-site advertising cookies or sell visitor browsing behavior to third-party ad networks on this portal. Standard web server access logs are generated for diagnostic and uptime monitoring purposes.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="legal-section">
              <h2>11. Children's Privacy</h2>
              <p>
                RestroConnect is a commercial B2B restaurant management platform. Our services are directed exclusively at restaurant operators, commercial kitchens, and adult diners. We do not knowingly solicit or collect personal information from children under the age of 13 (or under the age of 18 where required by applicable local law). If we become aware that a child has provided us with personal information, we will take immediate steps to delete such data.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="legal-section">
              <h2>12. International Processing</h2>
              <p>
                RestroConnect provides software services to restaurants in India and internationally. Technical systems, databases, and third-party subprocessors (including Meta Platforms and Supabase) may process data in cloud data centers located across multiple jurisdictions. We implement appropriate contractual and technical safeguards to ensure adequate data protection wherever data is processed.
              </p>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="legal-section">
              <h2>13. Policy Updates</h2>
              <p>
                We may revise this Privacy Policy periodically to reflect enhancements to our features, integrations with Meta / WhatsApp APIs, or regulatory updates. When revisions occur, we will update the "Last Updated" and "Effective Date" at the top of this document. Continued use of RestroConnect after published updates constitutes acknowledgement of the revised policy.
              </p>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="legal-section">
              <h2>14. Contact Information & Owner Verification Notice</h2>
              <p>
                For all privacy-related inquiries, data access requests, or regulatory questions, please contact:
              </p>
              <div className="legal-box">
                <div className="legal-box-title"><Mail size={16} /> RestroConnect Data Protection Desk</div>
                <p><strong>Operator:</strong> RestroConnect Technology</p>
                <p><strong>Privacy Email:</strong> <a href="mailto:privacy@restroconnect.com" style={{ color: 'var(--purple)' }}>privacy@restroconnect.com</a></p>
                <p><strong>Support Email:</strong> <a href="mailto:support@restroconnect.com" style={{ color: 'var(--purple)' }}>support@restroconnect.com</a></p>
                <p><strong>Official Website:</strong> <a href="https://restroconnect.com/" style={{ color: 'var(--purple)' }}>https://restroconnect.com/</a></p>
              </div>

              <div className="legal-callout orange" style={{ marginTop: '1.5rem' }}>
                <AlertCircle size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Operational Verification Notice for Platform Owner:</strong> This Privacy Policy reflects the verified technical codebase, Supabase database storage, WhatsApp Cloud API workflows, and public site architecture of RestroConnect. The website owner should confirm their formal registered company entity name (e.g. LLP, Pvt Ltd), official physical registered office address, and statutory Grievance Officer details if required under local jurisdiction regulations.
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
