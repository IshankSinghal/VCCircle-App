export const MENU_ITEMS = [
  { id: 'home', title: 'Home', type: 'link' },
  { id: 'events', title: 'Events', type: 'link', icon: '📅' },
  { id: 'newsletter', title: 'Free Newsletter', type: 'link', icon: '📧' },
  { id: 'subscribe', title: 'Subscribe', type: 'special', icon: '👑' },
  {
    id: 'corporate',
    title: 'Corporate Subscription',
    type: 'link',
    icon: '💼',
  },
  { id: 'signup', title: 'Sign In' },
];

export const CATEGORY_ITEMS = [
  { id: 'vc', title: 'VENTURE CAPITAL' },
  { id: 'pe', title: 'PRIVATE EQUITY' },
  { id: 'ma', title: 'M&A' },
  { id: 'credit', title: 'CREDIT' },
  { id: 'industry', title: 'INDUSTRY', hasDropdown: true },
  { id: 'people', title: 'PEOPLE' },
  { id: 'lp', title: 'LP CORNER' },
  { id: 'international', title: 'INTERNATIONAL' },
  { id: 'startups', title: 'STARTUPS' },
  { id: 'insights', title: 'INSIGHTS FOCUS' },
];

export const INDUSTRY_ITEMS = [
  { id: 'finance', title: 'FINANCE' },
  { id: 'consumer', title: 'CONSUMER' },
  { id: 'healthcare', title: 'HEALTHCARE' },
  { id: 'infra', title: 'INFRASTRUCTURE' },
  { id: 'tmt', title: 'TMT' },
  { id: 'manufacturing', title: 'MANUFACTURING' },
  { id: 're', title: 'REAL ESTATE' },
];
