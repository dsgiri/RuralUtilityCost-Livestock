import { LivestockTool } from './types';

export const LIVESTOCK_TOOLS: LivestockTool[] = [
  {
    id: 'cattle-age-estimator',
    title: 'Cattle Age Estimator',
    description: 'Estimate the age of cattle based on dentition and weight factors.',
    category: 'Cattle tools',
    primaryOutcome: 'Age calculation',
    href: '/tools/cattle-age-estimator'
  },
  {
    id: 'cattle-growth-tracker',
    title: 'Cattle Growth Tracker',
    description: 'Track and project weight gain over time for beef cattle.',
    category: 'Growth estimation',
    primaryOutcome: 'Growth projection chart',
    href: '/tools/cattle-growth-tracker'
  },
  {
    id: 'herd-feed-requirement-calculator',
    title: 'Herd Feed Requirement Calculator',
    description: 'Calculate daily and monthly feed needs based on herd size and type.',
    category: 'Feed needs',
    primaryOutcome: 'Feed volume estimate',
    href: '/tools/herd-feed-requirement-calculator'
  },
  {
    id: 'breeding-schedule-planner',
    title: 'Breeding Schedule Planner',
    description: 'Plan breeding cycles and gestation periods for various livestock.',
    category: 'Breeding support',
    primaryOutcome: 'Breeding calendar',
    href: '/tools/breeding-schedule-planner'
  },
  {
    id: 'calving-interval-planner',
    title: 'Calving Interval Planner',
    description: 'Optimize breeding and calving intervals to maximize herd productivity.',
    category: 'Herd planning',
    primaryOutcome: 'Interval optimization',
    href: '/tools/calving-interval-planner'
  },
  {
    id: 'livestock-weight-projection',
    title: 'Livestock Weight Projection',
    description: 'Predict future weights based on current growth rates and feed efficiency.',
    category: 'Growth estimation',
    primaryOutcome: 'Weight forecast',
    href: '/tools/livestock-weight-projection'
  },
  {
    id: 'goat-sheep-feed-planner',
    title: 'Goat / Sheep Feed Planner',
    description: 'Estimate forage and supplement needs for small ruminant flocks.',
    category: 'Sheep / goat tools',
    primaryOutcome: 'Feed requirements',
    href: '/tools/goat-sheep-feed-planner'
  },
  {
    id: 'poultry-flock-growth-overview',
    title: 'Poultry Flock Growth Overview',
    description: 'Track daily weight and feed conversion for broiler flocks.',
    category: 'Poultry tools',
    primaryOutcome: 'Growth and FCR metrics',
    href: '/tools/poultry-flock-growth-overview'
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Plan', href: '/plan' },
  { name: 'Forecast', href: '/forecast' },
  { name: 'What If', href: '/what-if' },
  { name: 'Predictor', href: '/predictor' },
  { name: 'Livestock', href: '/' },
  { name: 'My favorites', href: '/favorites' },
];

export const FOOTER_LINKS = [
  { name: 'About Us', href: 'https://ruralutilitycost.com/about' },
  { name: 'Contact Us', href: 'https://ruralutilitycost.com/contact' },
  { name: 'Privacy Policy', href: 'https://ruralutilitycost.com/privacy-policy' },
  { name: 'Terms of Use', href: 'https://ruralutilitycost.com/terms-of-use' },
  { name: 'Disclaimer', href: 'https://ruralutilitycost.com/disclaimer' },
  { name: 'Portfolio', href: 'https://ruralutilitycost.com/portfolio' }
];
