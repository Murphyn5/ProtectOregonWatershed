'use client';
import { Switch } from '@nextui-org/react';
import { useTheme } from 'next-themes';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch
      defaultSelected
      // isSelected={theme} 
      onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size="lg"
      color="secondary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          // add in an icon here
          <p>☼</p>
        ) : (
          // add in an icon here
          <p>☾</p>
        )
      }
    >
      {/* random text */}
    </Switch>
  );
};
