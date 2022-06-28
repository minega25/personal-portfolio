import useBoop from '@/hooks/useBoop.hook';
import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';

const ELEVATIONS = {
  small: `
    0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
  `,
  medium: `
    1px 2px 2px hsl(var(--shadow-color) / 0.333),
    2px 4px 4px hsl(var(--shadow-color) / 0.333),
    3px 6px 6px hsl(var(--shadow-color) / 0.333)
  `,
  large: `
    1px 2px 2px hsl(var(--shadow-color) / 0.2),
    2px 4px 4px hsl(var(--shadow-color) / 0.2),
    4px 8px 8px hsl(var(--shadow-color) / 0.2),
    8px 16px 16px hsl(var(--shadow-color) / 0.2),
    16px 32px 32px hsl(var(--shadow-color) / 0.2)
  `,
};

const Box = styled(animated.div)`
  border-radius: 8px;
  background: var(--color-subtle-floating);
  box-shadow: ${ELEVATIONS.small};
  transition: box-shadow 0.5s;
  :hover {
    box-shadow: ${ELEVATIONS.medium};
  }
`;

type BoxProps = {
  children: React.ReactNode;
};

const BoxWrapper = ({ children, ...props }: BoxProps) => {
  const [styles, trigger] = useBoop({
    scale: 0.999,
    timing: 800,
    springConfig: {
      tension: 300,
      friction: 10,
    },
  });

  return (
    <Box style={styles} onMouseEnter={trigger} {...props}>
      {children}
    </Box>
  );
};

export default BoxWrapper;
