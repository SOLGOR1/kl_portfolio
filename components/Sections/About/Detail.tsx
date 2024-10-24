import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiAdguard,
  SiIndeed,
  SiCodeigniter,
  SiCheckmarx,
  SiSolana,
} from 'react-icons/si'
import { GiCoffeePot } from 'react-icons/gi'
import { IoMdOpen } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{ fontVariantCaps: 'small-caps' }}
      >
        Our Vision
      </Heading>
      <Text variant="description">
        LEEK is a memecoin on a mission to <b>unite the degens</b> and shoot
        that green rocket straight to the moon. We're here to bridge the gap
        between crypto chaos and unstoppable fun, backed by based devs and one
        of the freshest communities in Web3.
        <br />
        <br />
        This project has been in the works for months, carefully planned to
        disrupt the norm and bring meme culture to a whole new level.
        <br />
        <br />
        <Tooltip
          label="Send LEEK to the moon and beyond, fueled by the collective genius of degens like you!"
          aria-label="Tech Debt?"
          hasArrow
        >
          <Text as="span" variant="emphasis">
            <b>The mission?</b>
          </Text>
        </Tooltip>
        <br />
        <br />
        Here are a few features that are our cup of{' '}
        <Tooltip label="We never drink Tea!" aria-label="We hate Tea!" hasArrow>
          <Text as="span" variant="emphasis" textDecorationLine="line-through">
            tea
          </Text>
        </Tooltip>{' '}
        coffee <Icon as={GiCoffeePot} color={emphasis} />.
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiAdguard} color={emphasis} fontSize="2em" />
            Fair Launch
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiCodeigniter} color={emphasis} fontSize="2em" />
            LP Burned
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiSolana} color={emphasis} fontSize="2em" />
            <Tooltip
              label="Every 24 hours, SOL fees are distributed to the top 50 token holders."
              aria-label="We love SOL"
              hasArrow
            >
              <Text as="span" variant="emphasis">
                HODL Rewards
              </Text>
            </Tooltip>
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiCheckmarx} color={emphasis} fontSize="2em" />
            Mint Authority Revoked
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiIndeed} color={emphasis} fontSize="2em" />
            Mutable Info Revoked
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiCodeigniter} color={emphasis} fontSize="2em" />
            <Tooltip
              label="Every 24 hours, LEEK fees are burned, gradually reducing the total supply."
              aria-label="We love Burns"
              hasArrow
            >
              <Text as="span" variant="emphasis">
                Burn Mechanism
              </Text>
            </Tooltip>
          </ListItem>
        </List>
        <br />
        <br />
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            See our full DEV arsenal <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
