import { Box, Image as ChkImage, Text, Link, Skeleton, useBoolean } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { avatarAnimation } from 'config/animations';

const AvatarImages = {
  DarkMode: '/KL_avatar.png',
  LightMode: '/KL_avatar_light.png',
};

// Set up dark mode logic
const isDarkMode = false; // Replace with actual dark mode check

const Avatar = () => {
  const MotionBox = motion(Box);
  const imgAvatar = isDarkMode ? AvatarImages.DarkMode : AvatarImages.LightMode;

  const [isLoaded, setIsLoaded] = useBoolean(false);

  useEffect(() => {
    // Preload the avatar images
    const img = new Image();
    img.src = imgAvatar;
  }, [imgAvatar]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MotionBox
        id="klAvatar"
        boxSize={{ base: 64, lg: 'sm' }}
        padding={{ base: 8 }}
        marginBottom={{ base: 10, md: 0, lg: 0 }}
        variants={avatarAnimation}
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
          width="250"
          height="250"
          margin="auto"
          onLoad={() => setIsLoaded.on()} // Mark image as loaded
          style={{ display: isLoaded ? 'block' : 'none' }} // Show image only when loaded
        />

        <Text textAlign="center" fontSize="smaller" variant="description">
          Art by{' '}
          <Link
            href="https://x.com/leekmeme_offic"
            target="_blank"
            aria-label="KojiroArt"
            rel="noreferrer"
          >
            LEEK
          </Link>
        </Text>
      </MotionBox>
    </motion.div>
  );
};

export default Avatar;
