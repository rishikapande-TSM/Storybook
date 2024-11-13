/** @type { import('@storybook/react').Preview } */
import React from 'react'
import Center from '../src/stories/assets/Center/Center'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from '../src/stories/ThemeContext'; // Import the ThemeProvider
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from '../src/stories/GlobalStyles'; // Import the global styles
import { useTheme , getTheme } from '../src/stories/ThemeContext';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      values: [

        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' },
        { name: 'Maroon', value: '#400' },
      ],
    
      backgrounds: {
        default: 'light',
        values: [
          { name: 'light', value: '#ffffff' },
          { name: 'dark', value: '#121212' },
        ],
      },
    },
  },
  // decorators: [
  //   (Story) => (
  //     <Center>
  //       <Story />
  //     </Center>
  //   ),
  // ],
  tags: ['autodocs'],
};

export default preview;

// Define the decorators array
export const decorators = [
  (Story) => {
    return (
      <ThemeProvider>
        <ThemeWrapper>
          <Story />
        </ThemeWrapper>
      </ThemeProvider>
    );
  },
];

// Wrapper to consume the theme context and apply it to StyledThemeProvider
const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme); 

  return (
    <StyledThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};



