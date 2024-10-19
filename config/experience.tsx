import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: '🌱 Phase 1',
    longName: 'Planting the Seeds',
    subDetail: 'Launch',
    url: 'https://pump.fun/',
    position: 'Launch of LEEK on Solana',
    duration: 'Okt 2024',
    logo: {
      light: '/worked_at_logos/deloitte/1dark.png',
      dark: '/worked_at_logos/deloitte/1light.png',
    },
    roles: [
      <>
      Website and our unbelievably cool LEEK mascot revealed
      </>,
      <>
        Fairlaunch on{' '}
        <Link
          aria-label="PumpFun"
          href="https://pump.fun/"
          target="_blank"
          rel="noreferrer"
        >
          Pumpfun.
        </Link>
      </>,
      <>
        Building the Community on{' '}
        <Link
          aria-label="Twitter"
          href="https://x.com/leekmeme_offic"
          target="_blank"
          rel="noreferrer"
        >
          Twitter
        </Link>
        {' '}and{' '} 
        <Link
          aria-label="Telegram"
          href="https://x.com/leekmeme_offic"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </Link>
        .
      </>,
    ],
  },
  SCG: {
    name: '🥬 Phase 2',
    longName: 'Meme Magic',
    subDetail: 'Reach',
    url: 'https://www.launchmynft.io/',
    position: 'Going Viral',
    duration: 'Dez 2024',
    logo: {
      light: '/worked_at_logos/scg/2dark.png',
      dark: '/worked_at_logos/scg/2light.png',
    },
    roles: [
      <>
        Social media explosion: Memes, Raids, X Spaces
      </>,
      <>
        Listings on major DEXs
      </>,
      <>
        Exclusive Leek NFT collection drop{' '}
        <Link
          variant="primaryLink"
          href="https://www.launchmynft.io/"
          target="_blank"
          rel="noreferrer"
        >
          Mint here
        </Link>
      </>,
    ],
  },
  Blotocol: {
    name: '🍃 Phase 3',
    longName: 'Leek Domination',
    subDetail: 'DOMINATION',
    url: 'https://solscan.io/',
    position: 'Dominating SOL-Memes',
    duration: 'Jan 2025',
    logo: {
      light: '/worked_at_logos/ivp/3dark.png',
      dark: '/worked_at_logos/ivp/3light.png',
    },
    roles: [
      <>
        Staking
      </>,
      <>
        Partnerships
      </>,
      <>
        Mass adoption: Leeks on everyone's lips and in their wallets
      </>,
      <>
        and more...
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
