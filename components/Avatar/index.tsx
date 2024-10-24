import {
  Box,
  Image as ChkImage,
  Text,
  Link,
  Skeleton,
  useColorMode,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const AvatarImages = {
  DarkMode: '/KL_avatar.png',
  LightMode: '/KL_avatar_light.png',
}

const Avatar = () => {
  const { colorMode } = useColorMode()

  // Use default avatar image to avoid blank loading screen
  const [imgAvatar, setImgAvatar] = useState(AvatarImages.DarkMode)
  const [isLoaded, setIsLoaded] = useState(false)

  // Update image based on color mode
  useEffect(() => {
    setImgAvatar(
      colorMode === 'dark' ? AvatarImages.DarkMode : AvatarImages.LightMode
    )
  }, [colorMode])

  // Preload both images
  useEffect(() => {
    const preloadImages = (src: string) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        console.log(`Preloaded: ${src}`)
      }
      img.onerror = () => {
        console.error(`Failed to preload: ${src}`)
      }
    }

    // Preload images for dark and light mode
    preloadImages(AvatarImages.DarkMode)
    preloadImages(AvatarImages.LightMode)
  }, [])

  return (
    <Box
      id="klAvatar"
      boxSize={{ base: 64, lg: 'sm' }}
      padding={{ base: 8 }}
      marginBottom={{ base: 10, md: 0, lg: 0 }}
      position="relative"
    >
      {!isLoaded && (
        <Skeleton
          height="250px"
          width="250px"
          borderRadius="full"
          margin="auto"
        />
      )}
      <ChkImage
        src={imgAvatar}
        alt="LEEK"
        width="250px"
        height="250px"
        margin="auto"
        onLoad={() => {
          console.log('Image loaded successfully')
          setIsLoaded(true) // Set loading to false once the image is loaded
        }}
        style={{
          display: isLoaded ? 'block' : 'none', // Show image when loaded
          transition: 'opacity 0.3s ease-in-out',
          opacity: isLoaded ? 1 : 0, // Fade-in effect when loaded
        }}
      />
      <Text textAlign="center" fontSize="smaller" variant="description">
        Art by{' '}
        <Link
          href="https://x.com/leekmeme_offic"
          target="_blank"
          aria-label="LEEK"
          rel="noreferrer"
        >
          LEEK
        </Link>
      </Text>
    </Box>
  )
}

export default Avatar
