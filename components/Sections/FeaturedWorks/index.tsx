import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from 'config/animations'
import { mobileBreakpointsMap } from 'config/theme'

const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)

  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        📰 LEEK News
      </Heading>
      <Text variant="description">
        Welcome to the LEEK News Hub, where you’ll find all the freshest
        updates, spicy announcements, and major happenings in the world of
        degens.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="We are Live!"
            src="/works/tobira/moonshot.webp"
            description="We are live on Moonshot."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://dexscreener.com/solana/fdp3gvvkjzkaklf7dbwls5ar1xengg4spr3lcosgxn58"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="LEEK on Dexscreener"
            description="We are live on Dexscreener."
            src="/works/tobira/dexscreener.webp"
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://dexscreener.com/solana/fdp3gvvkjzkaklf7dbwls5ar1xengg4spr3lcosgxn58"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={3}
            title="LEEK on Birdeye"
            src="/works/tobira/birdeye.webp"
            description="We are live on Birdeye."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://birdeye.so/token/So11111111111111111111111111111111111111112/ECZN5Xjd8Z5ZUikPqCWFNoXTvxpZ7vHYBEJRkZR2kx1V?chain=solana"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
