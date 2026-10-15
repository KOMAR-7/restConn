import { 
  Trash2, Shield, CheckCircle2, Mail, 
  RefreshCw, FileText, ArrowLeft, Clock
} from 'lucide-react';

interface PageProps {
  onNavigate?: (path: string) => void;
}

export function DataDeletion({ onNavigate }: PageProps) {
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
          <div className="badge" style={{ background: 'var(--whatsapp-soft)', color: '#15803D', border: '1px solid var(--whatsapp-border)', margin: '0 auto' }}>
            <Trash2 size={14} /> User Privacy & Compliance
          </div>
          <h1 className="legal-hero-title">Data Deletion Instructions</h1>
          <p className="legal-hero-subtitle">
            How customers, restaurants, and Meta/WhatsApp users can request deletion of personal information and revoke application permissions from RestroConnect.
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
              <Clock size={14} style={{ color: '#0284C7' }} />
              <strong>Resolution Time:</strong> Within 30 Days
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
              <FileText size={16} /> Quick Navigation
            </div>
            <nav>
              <ul className="legal-toc-list">
                <li><a href="#del-1">1. Policy Overview</a></li>
                <li><a href="#del-2">2. End-Customer Instructions</a></li>
                <li><a href="#del-3">3. Meta / WhatsApp App Revocation</a></li>
                <li><a href="#del-4">4. Restaurant Account Deletion</a></li>
                <li><a href="#del-5">5. Required Request Information</a></li>
                <li><a href="#del-6">6. Verification & Timelines</a></li>
                <li><a href="#del-7">7. Legal Exceptions & Retention</a></li>
                <li><a href="#del-8">8. Meta Dashboard Configuration</a></li>
                <li><a href="#del-9">9. Contact & Support Desk</a></li>
              </ul>
            </nav>

            <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--gray-200)' }}>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>Direct Deletion Email</div>
              <a 
                href="mailto:privacy@restroconnect.com?subject=Data%20Deletion%20Request" 
                className="btn btn-primary" 
                style={{ fontSize: '0.8rem', padding: '0.45rem 0.75rem', width: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
              >
                <Mail size={14} /> Send Deletion Email
              </a>
            </div>
          </aside>

          {/* Main Legal Content */}
          <main className="legal-content-card">
            
            <div className="legal-callout green">
              <CheckCircle2 size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Meta App Review Compliance:</strong> This page provides complete, step-by-step instructions for deleting user data collected through RestroConnect, including data received via the WhatsApp Business Platform and Facebook / Meta integrations.
              </div>
            </div>

            {/* Section 1 */}
            <section id="del-1" className="legal-section">
              <h2>1. Policy Overview</h2>
              <p>
                At <strong>RestroConnect Technology</strong> ("RestroConnect"), we respect individual privacy rights. Whether you are a diner who ordered food through a restaurant's WhatsApp channel or a restaurant operator utilizing our Point of Sale and CRM software, you have the right to request deletion of your personal data.
              </p>
              <p>
                In compliance with the Meta Platform Terms, WhatsApp Business Policies, and data protection legislation, we provide transparent mechanisms to remove your information from our active databases.
              </p>
            </section>

            {/* Section 2 */}
            <section id="del-2" className="legal-section">
              <h2>2. Instructions for End-Customers (Diners)</h2>
              <p>
                If you have placed an order with a restaurant through their WhatsApp channel or had your details recorded during a visit:
              </p>

              <div className="legal-box-grid">
                <div className="legal-box" style={{ borderLeft: '4px solid var(--purple)' }}>
                  <div className="legal-box-title">Option A: Contact Restaurant Directly (Recommended)</div>
                  <p>
                    Because each restaurant is the primary Data Controller of its customer records, you can request that the restaurant manager delete your customer profile and phone number directly from their RestroConnect Customer CRM screen.
                  </p>
                </div>

                <div className="legal-box" style={{ borderLeft: '4px solid var(--whatsapp)' }}>
                  <div className="legal-box-title">Option B: Contact RestroConnect Data Desk</div>
                  <p>
                    You can email RestroConnect directly at <a href="mailto:privacy@restroconnect.com" style={{ color: 'var(--purple)', fontWeight: 600 }}>privacy@restroconnect.com</a> with the subject line <strong>"Customer Data Deletion Request"</strong>. Include your phone number and the name of the restaurant.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="del-3" className="legal-section">
              <h2>3. Meta / WhatsApp Application Permission Revocation</h2>
              <p>
                If you connected or interacted with RestroConnect through a Meta Platform application or Facebook Login, you can revoke permissions and initiate an automated data deletion request directly from your Facebook / Meta account:
              </p>

              <div className="legal-step-card">
                <div className="legal-step-num">1</div>
                <div className="legal-step-body">
                  <div className="legal-step-title">Open Meta / Facebook Settings</div>
                  <div className="legal-step-desc">
                    Log in to your Facebook profile. Click on your profile image in the top right corner, select <strong>Settings & Privacy</strong>, and then click <strong>Settings</strong>.
                  </div>
                </div>
              </div>

              <div className="legal-step-card">
                <div className="legal-step-num">2</div>
                <div className="legal-step-body">
                  <div className="legal-step-title">Navigate to "Apps and Websites"</div>
                  <div className="legal-step-desc">
                    In the left navigation menu, scroll down to the <strong>Permissions</strong> section and click on <strong>Apps and Websites</strong>.
                  </div>
                </div>
              </div>

              <div className="legal-step-card">
                <div className="legal-step-num">3</div>
                <div className="legal-step-body">
                  <div className="legal-step-title">Locate RestroConnect & Remove</div>
                  <div className="legal-step-desc">
                    Find <strong>RestroConnect</strong> (or the connected restaurant application) in your active apps list and click the <strong>Remove</strong> button.
                  </div>
                </div>
              </div>

              <div className="legal-step-card">
                <div className="legal-step-num">4</div>
                <div className="legal-step-body">
                  <div className="legal-step-title">Request Data Deletion</div>
                  <div className="legal-step-desc">
                    After removal, switch to the <strong>Removed Apps and Websites</strong> tab, select RestroConnect, and click <strong>Send Request</strong>. Facebook will dispatch an automated notification to our system, or you can email <a href="mailto:privacy@restroconnect.com" style={{ color: 'var(--purple)' }}>privacy@restroconnect.com</a> with your confirmation code.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="del-4" className="legal-section">
              <h2>4. Instructions for Restaurant Operators</h2>
              <p>
                If you are a restaurant owner, partner, or authorized administrator wishing to permanently terminate your account and delete all associated store data:
              </p>
              <ul>
                <li><strong>Submission Channel:</strong> Send an official request from your registered administrative email address to <a href="mailto:support@restroconnect.com" style={{ color: 'var(--purple)', fontWeight: 600 }}>support@restroconnect.com</a> with the subject line <strong>"Restaurant Account Closure & Data Deletion"</strong>.</li>
                <li><strong>What Is Deleted:</strong> Upon confirmation, we will permanently delete or anonymize your restaurant profile, branch configurations, digital menu categories and items, employee staff credentials, and active customer CRM database entries.</li>
                <li><strong>Data Export Option:</strong> Before deletion, you may request an export of your historical order logs and customer lists. Once deletion is executed, data cannot be recovered.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="del-5" className="legal-section">
              <h2>5. Information Required for Processing</h2>
              <p>
                To protect our users from fraudulent deletion requests and ensure we locate the correct records, please provide:
              </p>
              <div className="legal-box">
                <ul style={{ margin: '0 0 0 1.25rem', color: 'var(--navy)' }}>
                  <li><strong>Full Name:</strong> The name associated with your order or account.</li>
                  <li><strong>Phone Number:</strong> The exact WhatsApp or mobile number used (including international country code, e.g., +91).</li>
                  <li><strong>Restaurant Name:</strong> The specific restaurant, cafe, or branch you interacted with.</li>
                  <li><strong>Approximate Date:</strong> The approximate date or time period of your order or interaction (helps cross-verify identity).</li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section id="del-6" className="legal-section">
              <h2>6. Verification and Processing Timelines</h2>
              <p>
                We handle data deletion requests transparently and expeditiously:
              </p>
              <ul>
                <li><strong>Initial Acknowledgment:</strong> We will acknowledge receipt of your deletion request within <strong>48 to 72 hours</strong>.</li>
                <li><strong>Identity Verification:</strong> We may send a verification code or message to the requested WhatsApp phone number or email to confirm that the requester is the authorized owner of the data.</li>
                <li><strong>Completion Period:</strong> Verified deletion requests are completed within <strong>30 calendar days</strong> of verification. A written confirmation email will be dispatched once the deletion is finalized.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="del-7" className="legal-section">
              <h2>7. Legitimate Exceptions and Statutory Retention</h2>
              <p>
                While we make every effort to honor deletion requests fully, certain limited categories of data may be retained where legally permissible or mandated by statute:
              </p>
              <ul>
                <li><strong>Tax & Invoicing Compliance:</strong> Invoices, completed commercial transactions, and tax calculation records must be retained for statutory periods required by applicable tax authorities (e.g., GST / VAT regulations).</li>
                <li><strong>Fraud Prevention & System Security:</strong> Anonymized log records necessary to detect malicious activity, prevent platform abuse, or comply with court orders.</li>
                <li><strong>Disaster Recovery Backups:</strong> Database snapshots stored in secure, offline backup archives will be overwritten in the ordinary course of backup rotation cycles.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section id="del-8" className="legal-section">
              <h2>8. Meta Developer Dashboard Configuration Notice</h2>
              <p>
                For Meta App Reviewers and platform developers configuring the Meta Developer Dashboard:
              </p>
              <div className="legal-callout purple">
                <Shield size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Configuration Parameter:</strong> This public URL (<code>https://restroconnect.com/data-deletion</code>) serves as the official <strong>Data Deletion Request URL</strong> under the Meta Developer App Dashboard (Settings &gt; Basic &gt; User Data Deletion). Users can follow the instructions on this page to request complete deletion of their data at any time.
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="del-9" className="legal-section">
              <h2>9. Contact the Privacy & Support Desk</h2>
              <p>If you have any questions about this process, please reach out to:</p>
              <div className="legal-box">
                <div className="legal-box-title"><Mail size={16} /> RestroConnect Privacy Team</div>
                <p><strong>Email:</strong> <a href="mailto:privacy@restroconnect.com" style={{ color: 'var(--purple)' }}>privacy@restroconnect.com</a></p>
                <p><strong>Technical Support:</strong> <a href="mailto:support@restroconnect.com" style={{ color: 'var(--purple)' }}>support@restroconnect.com</a></p>
                <p><strong>Physical / Registered Office:</strong> Subject to platform owner confirmation (see Privacy Policy Section 14).</p>
                <p><strong>Website:</strong> <a href="https://restroconnect.com/" style={{ color: 'var(--purple)' }}>https://restroconnect.com/</a></p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
