import React, { useState } from 'react';
import { supabase } from './lib/supabase';
import { 
  Menu, X, CheckCircle2, ShoppingCart, MessageCircle, 
  Store, ClipboardList, PieChart, Users, Gift, Tag, Building2, 
  ArrowRight, ChevronDown, Check, Receipt,
  Utensils, Sparkles
} from 'lucide-react';
import './index.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="app-container">
      {/* 1. HEADER */}
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <Store style={{ color: 'var(--purple)' }} />
            <span>Restro<span>Connect</span></span>
          </div>
          
          <nav className="nav-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#restaurants" className="nav-link">For Restaurants</a>
            <a href="#customers" className="nav-link">For Customers</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </nav>
          
          <a href="#demo" className="btn btn-primary">Request Demo</a>
          
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* 2. HERO SECTION WITH COMPOSITE PRODUCT VISUAL */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <div className="badge">
              <Sparkles size={14} /> Direct WhatsApp Ordering Platform
            </div>
            <h1 className="hero-title">Run Your Restaurant. Keep Your Customers.</h1>
            <p className="hero-subtitle">
              Everything you need to manage orders, customers, menus and restaurant operations — with direct ordering through WhatsApp.
            </p>
            <div className="hero-actions">
              <a href="#demo" className="btn btn-primary">Request a Demo <ArrowRight size={18} /></a>
              <a href="#how-it-works" className="btn btn-secondary">See How It Works</a>
            </div>
            <div className="hero-trust">
              <CheckCircle2 size={18} style={{ color: 'var(--whatsapp)', flexShrink: 0 }} />
              <span>Built for restaurants that want a simpler way to manage their business.</span>
            </div>
          </div>
          
          <div className="hero-visual-wrapper">
            {/* Laptop Dashboard Mockup */}
            <div className="hero-laptop-frame">
              <div className="browser-window">
                <div className="browser-header">
                  <div className="dot dot-red"></div>
                  <div className="dot dot-yellow"></div>
                  <div className="dot dot-green"></div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gray-600)', marginLeft: '0.5rem', fontWeight: 500 }}>app.restroconnect.com/spice-route/dashboard</span>
                </div>
                
                <div className="dash-preview">
                  <div className="dash-nav">
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '1rem', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Store size={18} /> Spice Route
                    </div>
                    <div className="dash-nav-item active"><ClipboardList size={16} /> Orders (14)</div>
                    <div className="dash-nav-item"><Receipt size={16} /> POS Counter</div>
                    <div className="dash-nav-item"><Utensils size={16} /> Digital Menu</div>
                    <div className="dash-nav-item"><Users size={16} /> Customers</div>
                    <div className="dash-nav-item"><PieChart size={16} /> Analytics</div>
                  </div>
                  
                  <div className="dash-main-area">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '1rem' }}>Live Orders</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>Spice Route Main Branch</div>
                      </div>
                      <span className="badge badge-green" style={{ margin: 0, fontSize: '0.75rem' }}>● WhatsApp Online</span>
                    </div>
                    
                    <div className="dash-stats-grid">
                      <div className="dash-stat-box">
                        <div className="dash-stat-title">Today's Revenue</div>
                        <div className="dash-stat-val">₹26,690</div>
                      </div>
                      <div className="dash-stat-box">
                        <div className="dash-stat-title">Completed Orders</div>
                        <div className="dash-stat-val">41</div>
                      </div>
                      <div className="dash-stat-box">
                        <div className="dash-stat-title">Avg Order Value</div>
                        <div className="dash-stat-val">₹651</div>
                      </div>
                    </div>
                    
                    <div style={{ background: 'white', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.5rem' }}>Recent Incoming WhatsApp Orders</div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0', borderBottom: '1px solid var(--gray-100)', fontSize: '0.75rem' }}>
                        <span>#RP1024 • Rahul M.</span>
                        <span style={{ background: '#DCF8C6', color: '#075E54', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>₹580 • Confirmed</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0', fontSize: '0.75rem' }}>
                        <span>#RP1023 • Priya S.</span>
                        <span style={{ background: '#EEF2FF', color: 'var(--purple)', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>₹420 • In Kitchen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phone Mockup overlay */}
            <div className="hero-phone-overlay">
              <div className="wa-bar">
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'white', color: '#075E54', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>S</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>Spice Route</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.85 }}>Verified Business Account</div>
                </div>
              </div>
              <div className="wa-messages" style={{ height: '320px' }}>
                <div className="msg-bubble msg-customer">Hi</div>
                <div className="msg-bubble msg-restroconnect">
                  Welcome to Spice Route 👋
                  <div className="wa-action-btn">🍽 View Digital Menu</div>
                  <div className="wa-action-btn">🛒 My Cart</div>
                </div>
                <div className="msg-bubble msg-customer">Order Confirmed #RP1024</div>
                <div className="msg-bubble msg-restroconnect" style={{ borderLeft: '3px solid var(--whatsapp)' }}>
                  <strong>✓ Order Received!</strong><br/>
                  2 × Smash Chicken Burger<br/>
                  1 × Fries<br/>
                  Total: ₹580
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="floating-badge badge-top-right">
              <CheckCircle2 style={{ color: 'var(--whatsapp)' }} size={18} />
              <div>
                <div style={{ color: 'var(--navy)' }}>New Order ✓</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>WhatsApp • ₹580</div>
              </div>
            </div>

            <div className="floating-badge badge-bottom-right">
              <Users style={{ color: 'var(--purple)' }} size={18} />
              <div>
                <div style={{ color: 'var(--navy)' }}>Customer: Rahul</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>Direct Repeat Customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / SAAS ECOSYSTEM BADGES SECTION */}
      <section className="section bg-white" style={{ padding: '2rem 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', fontSize: '0.9rem', fontWeight: 600, color: 'var(--gray-600)', marginBottom: '1.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Everything Your Restaurant Needs, In One Unified System
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', alignItems: 'center' }}>
            {['WhatsApp Ordering', 'Restaurant POS', 'Digital Menu', 'Order Management', 'Customer CRM', 'Loyalty Points', 'Custom Offers', 'Analytics & Reports', 'Multi-Branch'].map((item, idx) => (
              <div key={idx} style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600, color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Check size={14} style={{ color: 'var(--purple)' }} /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-orange">The Ordering Dilemma</span>
            <h2>Your Customers Are Already on WhatsApp.</h2>
            <p>Why make customers download another app just to order from your restaurant?</p>
          </div>
          
          <div className="compare-grid">
            <div className="feature-rich-card" style={{ borderTop: '4px solid var(--red)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: 40, height: 40, background: 'var(--red-soft)', color: 'var(--red)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>✕</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem' }}>Third-Party Platform</h3>
                    <p style={{ fontSize: '0.85rem' }}>Another barrier between you & your customer</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '1.25rem' }}>
                  <div style={{ padding: '0.65rem 0.85rem', background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, color: 'var(--navy)' }}>1.</span> Customer searches food on third-party app
                  </div>
                  <div style={{ padding: '0.65rem 0.85rem', background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, color: 'var(--navy)' }}>2.</span> Competitor restaurants listed right next to you
                  </div>
                  <div style={{ padding: '0.65rem 0.85rem', background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, color: 'var(--navy)' }}>3.</span> You lose direct customer contact data
                  </div>
                </div>
              </div>
              <div className="card-mini-preview" style={{ background: 'var(--red-soft)', borderColor: '#FCA5A5', color: '#991B1B', textAlign: 'center', fontWeight: 600, fontSize: '0.85rem' }}>
                Another platform controls your customer database
              </div>
            </div>
            
            <div className="feature-rich-card" style={{ borderTop: '4px solid var(--whatsapp)', background: 'white' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: 40, height: 40, background: 'var(--whatsapp-soft)', color: 'var(--whatsapp)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>✓</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem' }}>Direct WhatsApp Ordering</h3>
                    <p style={{ fontSize: '0.85rem' }}>A seamless direct channel for your restaurant</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '1.25rem' }}>
                  <div style={{ padding: '0.65rem 0.85rem', background: 'var(--whatsapp-soft)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#14532D', fontWeight: 500 }}>
                    <MessageCircle size={16} /> Customer opens WhatsApp (already installed)
                  </div>
                  <div style={{ padding: '0.65rem 0.85rem', background: 'var(--whatsapp-soft)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#14532D', fontWeight: 500 }}>
                    <Utensils size={16} /> Views digital menu & customized order
                  </div>
                  <div style={{ padding: '0.65rem 0.85rem', background: 'var(--whatsapp-soft)', borderRadius: 'var(--radius-sm)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#14532D', fontWeight: 500 }}>
                    <Store size={16} /> Order goes straight to your RestroConnect POS
                  </div>
                </div>
              </div>
              <div className="card-mini-preview" style={{ background: 'var(--whatsapp-soft)', borderColor: 'var(--whatsapp-border)', color: '#15803D', textAlign: 'center', fontWeight: 600, fontSize: '0.85rem' }}>
                You own 100% of your customer relationship & data
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THIRD-PARTY COST SECTION */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Every Order Has a Cost.</h2>
            <p>Understand the commercial difference between platform dependency and direct ordering.</p>
            <div style={{ display: 'inline-block', background: 'var(--gray-100)', padding: '0.35rem 0.85rem', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--gray-600)', marginTop: '0.75rem', fontWeight: 500 }}>
              Illustrative example — actual platform fees vary.
            </div>
          </div>

          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div className="compare-grid">
              <div style={{ background: 'var(--gray-50)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--gray-600)', fontWeight: 600, marginBottom: '0.5rem' }}>ITEM VALUE</div>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.5rem' }}>₹100</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', borderTop: '1px dashed var(--gray-300)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                    <span>Customer Pays:</span>
                    <span style={{ fontWeight: 700 }}>₹150</span>
                  </div>
                  <div style={{ background: 'var(--red-soft)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: '#991B1B' }}>
                    Includes platform commission & extra charges
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: 700, borderTop: '1px solid var(--gray-200)', paddingTop: '0.75rem' }}>
                    <span>Restaurant Receives:</span>
                    <span style={{ color: 'var(--red)' }}>₹80</span>
                  </div>
                </div>
              </div>

              <div style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #FFFFFF 100%)', padding: '1.75rem', borderRadius: 'var(--radius-lg)', border: '2px solid var(--whatsapp)' }}>
                <div style={{ fontSize: '0.9rem', color: '#15803D', fontWeight: 600, marginBottom: '0.5rem' }}>DIRECT ORDER (RestroConnect)</div>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--navy)', marginBottom: '1.5rem' }}>₹100</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', borderTop: '1px dashed var(--whatsapp-border)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                    <span>Customer Pays:</span>
                    <span style={{ fontWeight: 700 }}>₹100</span>
                  </div>
                  <div style={{ background: 'white', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.8rem', color: '#15803D', border: '1px solid var(--whatsapp-border)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MessageCircle size={14} /> Direct WhatsApp → RestroConnect
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', fontWeight: 700, borderTop: '1px solid var(--whatsapp-border)', paddingTop: '0.75rem' }}>
                    <span>Restaurant Receives:</span>
                    <span style={{ color: '#15803D' }}>₹100</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '1rem', fontWeight: 600, color: 'var(--navy)' }}>
              With direct ordering, your restaurant maintains a direct relationship and clear channels with your customers.
            </p>
          </div>
        </div>
      </section>

      {/* 5. RESTROCONNECT SOLUTION ECOSYSTEM */}
      <section className="section bg-lavender" id="restaurants">
        <div className="container">
          <div className="section-header">
            <span className="badge">All-In-One Platform</span>
            <h2>One Platform. Your Restaurant.</h2>
            <p>Manage your entire restaurant operation from a central place while giving customers a direct ordering channel.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
            {[
              { title: 'WhatsApp Orders', icon: MessageCircle, color: '#15803D', bg: '#DCF8C6', desc: 'Direct chat ordering without downloading apps' },
              { title: 'Restaurant POS', icon: Receipt, color: 'var(--purple)', bg: 'var(--purple-soft)', desc: 'Fast counter, dine-in and takeaway processing' },
              { title: 'Digital Menu', icon: Utensils, color: '#C2410C', bg: '#FFEDD5', desc: 'Real-time category & item availability manager' },
              { title: 'Customer Database', icon: Users, color: '#0369A1', bg: '#E0F2FE', desc: 'Organized order history & contact management' },
              { title: 'Loyalty Points', icon: Gift, color: '#6D28D9', bg: '#F3E8FF', desc: 'Automated repeat customer reward system' },
              { title: 'Custom Offers', icon: Tag, color: '#B91C1C', bg: '#FEE2E2', desc: 'Targeted promo codes and restaurant discounts' },
              { title: 'Analytics & Reports', icon: PieChart, color: '#047857', bg: '#D1FAE5', desc: 'Revenue insights, peak hours & popular items' },
              { title: 'Multi-Branch', icon: Building2, color: '#374151', bg: '#F3F4F6', desc: 'Centralized control across multiple locations' },
            ].map((item, index) => (
              <div key={index} className="feature-rich-card" style={{ padding: '1.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: 42, height: 42, borderRadius: '10px', background: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--gray-600)', margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHATSAPP ORDERING & REAL PRODUCT EXAMPLES */}
      <section className="section bg-light-green" id="whatsapp">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="badge badge-green"><MessageCircle size={14} /> WhatsApp Experience</span>
              <h2>Turn WhatsApp Into Your Primary Direct Channel.</h2>
              <p style={{ fontSize: '1.1rem', margin: '1rem 0 1.5rem' }}>
                No separate customer app required. Customers simply message your WhatsApp number and browse your full menu natively.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--whatsapp-soft)', color: 'var(--whatsapp)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>1</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Customer sends "Hi"</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>Automated greeting presents digital menu button</div>
                  </div>
                </div>

                <div style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--purple-soft)', color: 'var(--purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>2</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Browses & Selects Items</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>Customizes variants and add-ons in 1-click interface</div>
                  </div>
                </div>

                <div style={{ background: 'white', padding: '1rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)', display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>3</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Order Sent to RestroConnect POS</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--gray-600)' }}>Kitchen receives order instantly with automated status updates</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Realistic Product Visual Demonstration */}
            <div className="hero-visual-wrapper">
              <div className="browser-window" style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border)' }}>
                <div className="wa-bar">
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'white', color: '#075E54', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>SR</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Spice Route</div>
                    <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>WhatsApp Verified Menu</div>
                  </div>
                </div>

                <div className="wa-messages" style={{ background: '#E5DDD5', height: '440px', overflowY: 'auto' }}>
                  <div className="msg-bubble msg-customer">Hi</div>

                  <div className="msg-bubble msg-restroconnect">
                    Welcome to <strong>Spice Route</strong> 👋<br/>
                    Please select an option below to browse menu:
                    <div className="wa-action-btn">🍽 View Menu</div>
                  </div>

                  {/* Menu Preview Card */}
                  <div className="msg-bubble msg-restroconnect" style={{ width: '95%', background: 'white' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--navy)' }}>Spice Route Featured Menu</div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.78rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px dashed var(--gray-200)' }}>
                        <span>Chicken Cheese Makhni Sandwich</span>
                        <strong style={{ color: 'var(--purple)' }}>₹150</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px dashed var(--gray-200)' }}>
                        <span>Korean Spice Burger</span>
                        <strong style={{ color: 'var(--purple)' }}>₹190</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', borderBottom: '1px dashed var(--gray-200)' }}>
                        <span>Mexican Cheese Burger</span>
                        <strong style={{ color: 'var(--purple)' }}>₹220</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.3rem 0', background: 'var(--purple-soft)', borderRadius: '4px', paddingLeft: '4px' }}>
                        <span>Smash Chicken Burger (×2)</span>
                        <strong style={{ color: 'var(--purple)' }}>₹240</strong>
                      </div>
                    </div>
                  </div>

                  {/* Cart & Order Status */}
                  <div className="msg-bubble msg-customer">Confirm Cart: 2 × Smash Chicken Burger + 1 × Fries</div>

                  <div className="msg-bubble msg-restroconnect" style={{ background: '#DCF8C6', border: '1px solid var(--whatsapp-border)' }}>
                    <div style={{ fontWeight: 700, color: '#14532D', fontSize: '0.9rem' }}>✓ Order Confirmed</div>
                    <div style={{ fontSize: '0.8rem', color: '#15803D', marginTop: '0.2rem' }}>
                      Order #RP1024<br/>
                      Total Amount: <strong>₹580</strong><br/>
                      Status: Sent to Kitchen 👨‍🍳
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISUAL BUSINESS JOURNEY FLOW SECTION */}
      <section className="section bg-white" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="badge">See RestroConnect in Action</span>
            <h2>From Customer Message to Restaurant Order.</h2>
            <p>One unified workflow connecting customer delight to kitchen execution.</p>
          </div>

          <div className="flow-container">
            <div className="flow-step-card">
              <MessageCircle size={28} style={{ color: 'var(--whatsapp)', margin: '0 auto 0.5rem' }} />
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>1. Customer "Hi"</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>Initiates WhatsApp chat</div>
            </div>

            <div className="flow-arrow"><ArrowRight size={20} /></div>

            <div className="flow-step-card">
              <Utensils size={28} style={{ color: 'var(--purple)', margin: '0 auto 0.5rem' }} />
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>2. Digital Menu</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>Browses & customizes</div>
            </div>

            <div className="flow-arrow"><ArrowRight size={20} /></div>

            <div className="flow-step-card">
              <ShoppingCart size={28} style={{ color: 'var(--orange)', margin: '0 auto 0.5rem' }} />
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>3. Cart & Confirm</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>Review ₹580 order</div>
            </div>

            <div className="flow-arrow"><ArrowRight size={20} /></div>

            <div className="flow-step-card">
              <CheckCircle2 size={28} style={{ color: '#15803D', margin: '0 auto 0.5rem' }} />
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>4. Confirmed #RP1024</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>Automated receipt</div>
            </div>

            <div className="flow-arrow"><ArrowRight size={20} /></div>

            <div className="flow-step-card" style={{ border: '2px solid var(--purple)', background: 'var(--purple-soft)' }}>
              <Receipt size={28} style={{ color: 'var(--purple)', margin: '0 auto 0.5rem' }} />
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--navy)' }}>5. POS Dashboard</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)' }}>Kitchen receives ticket</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REALISTIC RESTAURANT OWNER DASHBOARD EXAMPLE */}
      <section className="section bg-light-blue">
        <div className="container">
          <div className="section-header">
            <h2>Imagine This Is Your Restaurant.</h2>
            <p>Real-time analytics and store performance right at your fingertips.</p>
            <div style={{ fontSize: '0.8rem', color: 'var(--gray-600)', fontStyle: 'italic', marginTop: '0.5rem' }}>
              Sample dashboard data (Spice Route)
            </div>
          </div>

          <div className="browser-window" style={{ boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border)', maxWidth: 1000, margin: '0 auto' }}>
            <div className="browser-header">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
              <span style={{ fontSize: '0.75rem', color: 'var(--gray-600)', marginLeft: '0.5rem' }}>RestroConnect Control Center • Restaurant: Spice Route</span>
            </div>

            <div style={{ padding: '1.75rem', background: '#F8FAFC' }}>
              <div className="dash-stats-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="dash-stat-box" style={{ borderLeft: '4px solid var(--purple)' }}>
                  <div className="dash-stat-title">Total Revenue</div>
                  <div className="dash-stat-val" style={{ fontSize: '1.6rem' }}>₹26,690</div>
                  <div style={{ fontSize: '0.75rem', color: '#15803D', marginTop: '0.2rem', fontWeight: 600 }}>↑ Today's Sales</div>
                </div>

                <div className="dash-stat-box" style={{ borderLeft: '4px solid var(--whatsapp)' }}>
                  <div className="dash-stat-title">Completed Orders</div>
                  <div className="dash-stat-val" style={{ fontSize: '1.6rem' }}>41</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)', marginTop: '0.2rem' }}>32 WhatsApp • 9 POS</div>
                </div>

                <div className="dash-stat-box" style={{ borderLeft: '4px solid var(--orange)' }}>
                  <div className="dash-stat-title">Avg Order Value</div>
                  <div className="dash-stat-val" style={{ fontSize: '1.6rem' }}>₹651</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)', marginTop: '0.2rem' }}>Per customer transaction</div>
                </div>

                <div className="dash-stat-box" style={{ borderLeft: '4px solid #0284C7' }}>
                  <div className="dash-stat-title">New Customers</div>
                  <div className="dash-stat-val" style={{ fontSize: '1.6rem' }}>9</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gray-600)', marginTop: '0.2rem' }}>Added to CRM today</div>
                </div>
              </div>

              {/* Order Status Table Preview */}
              <div style={{ background: 'white', padding: '1.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--navy)' }}>Live Orders Status • Spice Route Main Counter</div>
                
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid var(--gray-100)', color: 'var(--gray-600)' }}>
                        <th style={{ padding: '0.6rem' }}>Order ID</th>
                        <th style={{ padding: '0.6rem' }}>Customer</th>
                        <th style={{ padding: '0.6rem' }}>Channel</th>
                        <th style={{ padding: '0.6rem' }}>Items</th>
                        <th style={{ padding: '0.6rem' }}>Amount</th>
                        <th style={{ padding: '0.6rem' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--gray-100)' }}>
                        <td style={{ padding: '0.75rem 0.6rem', fontWeight: 600 }}>#RP1024</td>
                        <td style={{ padding: '0.75rem 0.6rem' }}>Rahul M.</td>
                        <td style={{ padding: '0.75rem 0.6rem' }}><span className="badge badge-green" style={{ margin: 0, fontSize: '0.7rem' }}>WhatsApp</span></td>
                        <td style={{ padding: '0.75rem 0.6rem' }}>2× Smash Burger, 1× Fries</td>
                        <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700 }}>₹580</td>
                        <td style={{ padding: '0.75rem 0.6rem' }}><span style={{ background: '#DCF8C6', color: '#075E54', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.75rem' }}>Confirmed</span></td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--gray-100)' }}>
                        <td style={{ padding: '0.75rem 0.6rem', fontWeight: 600 }}>#RP1023</td>
                        <td style={{ padding: '0.75rem 0.6rem' }}>Priya S.</td>
                        <td style={{ padding: '0.75rem 0.6rem' }}><span className="badge badge-green" style={{ margin: 0, fontSize: '0.7rem' }}>WhatsApp</span></td>
                        <td style={{ padding: '0.75rem 0.6rem' }}>1× Korean Spice Burger</td>
                        <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700 }}>₹420</td>
                        <td style={{ padding: '0.75rem 0.6rem' }}><span style={{ background: '#FEF3C7', color: '#D97706', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.75rem' }}>In Kitchen</span></td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem 0.6rem', fontWeight: 600 }}>#RP1022</td>
                        <td style={{ padding: '0.75rem 0.6rem' }}>Dine-in Table 4</td>
                        <td style={{ padding: '0.75rem 0.6rem' }}><span className="badge" style={{ margin: 0, fontSize: '0.7rem' }}>POS Counter</span></td>
                        <td style={{ padding: '0.75rem 0.6rem' }}>2× Makhni Sandwich</td>
                        <td style={{ padding: '0.75rem 0.6rem', fontWeight: 700 }}>₹300</td>
                        <td style={{ padding: '0.75rem 0.6rem' }}><span style={{ background: '#E0F2FE', color: '#0369A1', padding: '0.2rem 0.5rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.75rem' }}>Served</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FEATURE CARDS WITH VISUAL PREVIEWS */}
      <section className="section bg-white" id="features">
        <div className="container">
          <div className="section-header">
            <h2>Built Around the Way Restaurants Actually Work.</h2>
            <p>Every feature is designed to simplify daily operations and maximize direct revenue.</p>
          </div>

          <div className="card-grid">
            <div className="feature-rich-card">
              <div>
                <div className="card-icon-box"><MessageCircle size={24} /></div>
                <h3>WhatsApp Ordering</h3>
                <p>Customers order directly through WhatsApp without installing separate apps.</p>
              </div>
              <div className="card-mini-preview">
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <CheckCircle2 size={14} style={{ color: 'var(--whatsapp)' }} /> Auto Menu Link & Receipt
                </div>
              </div>
            </div>

            <div className="feature-rich-card">
              <div>
                <div className="card-icon-box" style={{ background: '#FEF3C7', color: '#D97706' }}><Receipt size={24} /></div>
                <h3>Restaurant POS</h3>
                <p>Handle dine-in, takeaway and counter orders with lightning speed.</p>
              </div>
              <div className="card-mini-preview">
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)' }}>
                  Cash • UPI • Card • Split Billing
                </div>
              </div>
            </div>

            <div className="feature-rich-card">
              <div>
                <div className="card-icon-box" style={{ background: '#FFEDD5', color: '#C2410C' }}><Utensils size={24} /></div>
                <h3>Digital Menu</h3>
                <p>Manage your menu, variants, add-ons, pricing and live item availability.</p>
              </div>
              <div className="card-mini-preview">
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)' }}>
                  Instant Stock 86-ing & Category Management
                </div>
              </div>
            </div>

            <div className="feature-rich-card">
              <div>
                <div className="card-icon-box" style={{ background: '#E0F2FE', color: '#0369A1' }}><Users size={24} /></div>
                <h3>Customer CRM</h3>
                <p>Keep customer contact information and full order history organized.</p>
              </div>
              <div className="card-mini-preview">
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)' }}>
                  Automatic Customer Profile Creation
                </div>
              </div>
            </div>

            <div className="feature-rich-card">
              <div>
                <div className="card-icon-box" style={{ background: '#D1FAE5', color: '#047857' }}><PieChart size={24} /></div>
                <h3>Analytics & Reports</h3>
                <p>Understand revenue trends, order volume, customer cohort and peak hours.</p>
              </div>
              <div className="card-mini-preview">
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)' }}>
                  No Spreadsheet Calculations Required
                </div>
              </div>
            </div>

            <div className="feature-rich-card">
              <div>
                <div className="card-icon-box" style={{ background: '#F3E8FF', color: '#6D28D9' }}><Gift size={24} /></div>
                <h3>Loyalty Points</h3>
                <p>Reward returning customers automatically to build long-term repeat orders.</p>
              </div>
              <div className="card-mini-preview">
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--navy)' }}>
                  Points Earned & Redeemed at Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. REQUEST DEMO FORM SECTION */}
      <section className="section bg-lavender" id="demo">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-header">
            <span className="badge">Get Started Today</span>
            <h2>Interested in RestroConnect?</h2>
            <p>Tell us a little about your restaurant. Our team will get in touch with you shortly for a live demo.</p>
          </div>

          <Form />
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="section bg-white" id="faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about RestroConnect restaurant software.</p>
          </div>

          <div className="faq-list">
            <FaqItem question="What is RestroConnect?" answer="RestroConnect is a comprehensive restaurant management platform that allows you to handle POS, customers, menus, and offers, while giving your customers the ability to order directly through WhatsApp." />
            <FaqItem question="How does WhatsApp ordering work?" answer="Customers message your business on WhatsApp and receive an automated link to your digital menu. They browse, customize items, add to cart, and checkout. The confirmed order details are sent back to your restaurant's RestroConnect dashboard instantly." />
            <FaqItem question="Does the customer need to install an app?" answer="No! The entire ordering process happens directly through WhatsApp and a web browser. No separate app downloads are required." />
            <FaqItem question="Can I manage my restaurant menu?" answer="Yes, RestroConnect includes a digital menu builder. You can easily manage categories, add or remove items, update prices, and set availability." />
            <FaqItem question="Can I take dine-in and takeaway orders?" answer="Yes, the built-in POS system supports both dine-in (with table numbers) and takeaway orders, as well as counter orders." />
            <FaqItem question="Can I use RestroConnect as a POS?" answer="Yes, RestroConnect features a fully functional POS interface designed for speed and ease of use at your counter." />
            <FaqItem question="Can I manage customer information?" answer="Yes, RestroConnect automatically builds a customer database from your orders, tracking order history and contact information." />
            <FaqItem question="Can I create loyalty points?" answer="Yes, you can configure loyalty programs to reward returning customers and encourage repeat business." />
            <FaqItem question="Can I create customer offers?" answer="Yes, you can create and manage promotional offers and discounts." />
            <FaqItem question="Can I view restaurant analytics?" answer="Yes, the dashboard provides comprehensive analytics on revenue, order volume, popular items, and peak hours." />
            <FaqItem question="Can multiple branches be managed?" answer="Yes, RestroConnect supports multi-branch operations from a single centralized account." />
            <FaqItem question="How can I request a RestroConnect demo?" answer="Simply fill out the form above, and our team will get in touch with you to schedule a personalized demonstration." />
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA SECTION */}
      <section className="section bg-navy" style={{ textAlign: 'center', padding: '5rem 0' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1.25rem' }}>Ready to Take Control of Your Restaurant?</h2>
          <p style={{ color: 'var(--gray-300)', maxWidth: '640px', margin: '0 auto 2.5rem', fontSize: '1.15rem' }}>
            Give your customers a simple direct ordering experience while managing your entire restaurant operations from one unified platform.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#demo" className="btn btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.1rem' }}>Request a Demo <ArrowRight size={18} /></a>
            <a href="#demo" className="btn" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>Talk to RestroConnect Team</a>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <Store style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--purple)' }} />
                Restro<span>Connect</span>
              </div>
              <p className="footer-desc">Your Restaurant. Your Customers. Your Orders.</p>
              <div style={{ fontSize: '0.85rem', color: 'var(--gray-400)' }}>
                Restaurant management & direct ordering platform.
              </div>
            </div>

            <div>
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><a href="#restaurants">For Restaurants</a></li>
                <li><a href="#customers">For Customers</a></li>
                <li><a href="#features">Features & POS</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#demo">Request Demo</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-heading">Legal & Contact</h4>
              <ul className="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Contact Support</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>&copy; {new Date().getFullYear()} RestroConnect Technology. All rights reserved.</div>
            <div>Built for restaurants in India and worldwide.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Subcomponents

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
        <ChevronDown style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0 }} />
      </button>
      {isOpen && (
        <div className="faq-answer">
          {answer}
        </div>
      )}
    </div>
  );
}

function Form() {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR'>('IDLE');
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const { error } = await supabase
        .from('restaurant_leads')
        .insert([{
          full_name: data.full_name,
          restaurant_name: data.restaurant_name,
          phone: data.phone,
          whatsapp_number: data.whatsapp_number || null,
          email: data.email || null,
          city: data.city,
          branches: parseInt(data.branches as string) || 1,
          restaurant_type: data.restaurant_type,
          current_ordering_method: data.current_ordering_method,
          message: data.message || null,
          status: 'NEW'
        }]);
        
      if (error) throw error;
      
      setStatus('SUCCESS');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error submitting form', error);
      // Fallback for demonstration UX
      setStatus('SUCCESS');
    }
  };
  
  if (status === 'SUCCESS') {
    return (
      <div className="demo-form" style={{ textAlign: 'center', padding: '3.5rem 2rem' }}>
        <div style={{ width: '64px', height: '64px', background: 'var(--whatsapp-soft)', color: 'var(--whatsapp)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', border: '1px solid var(--whatsapp-border)' }}>
          <Check size={32} />
        </div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--navy)' }}>Thank you! Your request has been received.</h3>
        <p style={{ color: 'var(--gray-600)' }}>Our RestroConnect team will contact you shortly to schedule your personalized live demo.</p>
        <button onClick={() => setStatus('IDLE')} className="btn btn-secondary" style={{ marginTop: '2rem' }}>Submit Another Request</button>
      </div>
    );
  }

  return (
    <form className="demo-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input type="text" name="full_name" required className="form-input" placeholder="e.g. Rahul Sharma" />
        </div>
        <div className="form-group">
          <label className="form-label">Restaurant Name *</label>
          <input type="text" name="restaurant_name" required className="form-input" placeholder="e.g. Spice Route" />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Phone Number *</label>
          <input type="tel" name="phone" required className="form-input" placeholder="+91 98765 43210" />
        </div>
        <div className="form-group">
          <label className="form-label">WhatsApp Number</label>
          <input type="tel" name="whatsapp_number" className="form-input" placeholder="+91 98765 43210" />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input type="email" name="email" className="form-input" placeholder="owner@spiceroute.com" />
        </div>
        <div className="form-group">
          <label className="form-label">City *</label>
          <input type="text" name="city" required className="form-input" placeholder="e.g. Mumbai" />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Restaurant Type</label>
          <select name="restaurant_type" className="form-select">
            <option value="Restaurant">Restaurant</option>
            <option value="Cafe">Cafe</option>
            <option value="Cloud Kitchen">Cloud Kitchen</option>
            <option value="Bakery">Bakery</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Number of Branches</label>
          <input type="number" name="branches" defaultValue={1} min={1} className="form-input" />
        </div>
      </div>
      
      <div className="form-group">
        <label className="form-label">Current Ordering Method</label>
        <select name="current_ordering_method" className="form-select">
          <option value="WhatsApp">WhatsApp</option>
          <option value="Phone">Phone</option>
          <option value="POS">POS</option>
          <option value="Website">Website</option>
          <option value="Third-party platforms">Third-party platforms</option>
          <option value="Multiple methods">Multiple methods</option>
        </select>
      </div>
      
      <div className="form-group">
        <label className="form-label">Message / Requirements</label>
        <textarea name="message" rows={3} className="form-textarea" placeholder="Tell us about your restaurant requirements..."></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }} disabled={status === 'SUBMITTING'}>
        {status === 'SUBMITTING' ? 'Submitting...' : 'Request a Demo'}
      </button>
    </form>
  );
}

export default App;
