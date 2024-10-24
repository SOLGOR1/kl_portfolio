/* eslint-disable react/no-multi-comp */
import * as React from 'react'
import { motion } from 'framer-motion'

// Define props for Path component more explicitly
interface PathProps {
  isDarkMode: boolean
  d?: string // Define `d` as an optional string, since it's passed in
  variants?: any // You can specify a more precise type here if known
  transition?: any // Specify types for transition if known
}

// Path component for drawing the SVG paths
const Path: React.FC<PathProps> = ({ isDarkMode, ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={isDarkMode ? 'hsl(240, 100%, 94%)' : 'hsl(0, 0%, 7%)'}
    strokeLinecap="round"
    {...props}
  />
)

// MenuToggle component
export const MenuToggle: React.FC<{
  toggle: () => void
  isDarkMode?: boolean
}> = ({ toggle, isDarkMode = false }) => (
  <button
    onClick={toggle}
    style={{
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 18">
      <Path
        isDarkMode={isDarkMode}
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        isDarkMode={isDarkMode}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        isDarkMode={isDarkMode}
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
)

// MobileMenu component
const MobileMenu: React.FC<{
  isOpen: boolean
  toggle: () => void
  isDarkMode?: boolean
}> = ({ isOpen, toggle, isDarkMode = false }) => (
  <motion.nav
    initial={false}
    animate={isOpen ? 'open' : 'closed'}
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <MenuToggle toggle={toggle} isDarkMode={isDarkMode} />
  </motion.nav>
)

export default MobileMenu
