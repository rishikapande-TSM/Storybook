
import React from 'react';
import { useTheme } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Themes = () => {
  const { theme } = useTheme();

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: theme === 'light' ? '#000' : '#fff' }}>Theme Switcher!</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default {
  title: 'Example/Themes',
  component: Themes,
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => <Themes />;
