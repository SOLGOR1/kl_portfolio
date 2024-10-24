import { IconType } from 'react-icons'
import { FaTelegram, FaTwitter } from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'Twitter',
    href: 'https://x.com/leekmeme_offic',
    icon: FaTwitter,
  },
  {
    label: 'Telegram',
    href: 'https://x.com/leekmeme_offic',
    icon: FaTelegram,
  },
]
