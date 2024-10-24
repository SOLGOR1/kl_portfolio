import {
  Box,
  Image as ChkImage,
  Text,
  Link,
  Skeleton,
  useBoolean,
  useColorMode,
} from '@chakra-ui/react';
import { useEffect } from 'react';

const AvatarImages = {
  DarkMode: '/KL_avatar.png',
  LightMode: '/KL_avatar_light.png',
};

const Avatar = () => {
  const { colorMode, setColorMode } = useColorMode();
  
  // Set initial mode to dark on mount
  useEffect(() => {
    setColorMode('dark');
  }, [setColorMode]);

  const imgAvatar =
    colorMode === 'dark'
      ? AvatarImages.DarkMode
      : AvatarImages.LightMode; // Removed semicolon and formatted

  const [isLoaded, setIsLoaded] = useBoolean(false);

  useEffect(() => {
    const preloadImages = (src: string) => {
      const img = new Image();
      img.src = src;
    };

    // Preload images for dark and light mode
    preloadImages(AvatarImages.DarkMode);
    preloadImages(AvatarImages.LightMode);
  }, []);

  return (
    <Box
      id="klAvatar"
      boxSize={{ base: 64, lg: 'sm' }}
      padding={{ base: 8 }}
      marginBottom={{ base: 10, md: 0, lg: 0 }}
      position="relative"
    >
      {/* Skeleton shown until image is fully loaded */}
      {!isLoaded && (
        <Skeleton
          height="250px"
          width="250px"
          borderRadius="full"
          margin="auto"
        />
      )}
      {/* Image shown once loaded */}
      <ChkImage
        src={imgAvatar}
        alt="LEEK"
        width="250px"
        height="250px"
        margin="auto"
        onLoad={() => {
          setIsLoaded.on(); // Mark image as loaded
        }}
        onError={() => {
          console.error(`Failed to load image: ${imgAvatar}`);
          setIsLoaded.off(); // Optionally handle loading failure
        }}
        style={{
          display: isLoaded ? 'block' : 'none',
          transition: 'opacity 0.3s ease-in-out',
          opacity: isLoaded ? 1 : 0,
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
  );
};

export default Avatar;
