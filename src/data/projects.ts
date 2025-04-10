import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Fiat Ducato',
    description: 'Full conversion of a Fiat Ducato LWB.',
    category: 'vans',
  },
  {
    id: 2,
    title: 'Toyota HiAce Commuter',
    description: 'Conversion tailored for a Toyota HiAce Commuter model.',
    category: 'vans',
  },
  {
    id: 3,
    title: 'Toyota HiAce Poptop',
    description: 'Camper conversion featuring a poptop roof on a HiAce.',
    category: 'vans',
    imageUrl: '/images/toyota-hiace-poptop.png'
  },
  {
    id: 4,
    title: 'Fitzroy',
    description: 'Modern kitchen renovation in Fitzroy.',
    category: 'kitchens',
    imageUrl: '/images/fitzroy-kitchen-after.jpg',
    beforeImageUrl: '/images/fitzroy-kitchen-before.png'
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'This very website! Built using React, TypeScript, Vite, and react-router-dom for showcasing projects.',
    category: 'web-development',
    imageUrl: '/images/portfolio-screenshot.png'
  },
  {
    id: 6,
    title: 'Kali Yuga Countdown',
    description: 'A simple countdown timer website hosted on Cloudflare Pages.',
    category: 'web-development',
    externalUrl: 'https://kali-yuga-countdown-website.pages.dev/',
    imageUrl: '/images/kali-yuga-screenshot.png'
  },
]; 