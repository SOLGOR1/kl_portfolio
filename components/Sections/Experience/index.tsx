import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
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
      Roadmap
    </Heading>
    <Text variant="description">
    Ready to watch a vegetable conquer the crypto space? Hop in, and let’s go full stalk ahead.{' '}
    </Text>

    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
