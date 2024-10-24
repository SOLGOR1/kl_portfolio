import { memo, FC } from 'react'
import { Heading, Text, Stack } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'

// Define the component as a functional component
const DetailSection: FC = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      textTransform="uppercase" // Use Chakra UI's textTransform instead of inline style
    >
      Roadmap
    </Heading>
    <Text variant="description">
      Ready to watch a vegetable conquer the crypto space? Hop in, and let’s go
      full stalk ahead.
    </Text>

    {/* Ensure ExperienceTab does not receive unexpected props */}
    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
