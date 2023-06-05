import React, { ReactNode } from 'react';
import styles from './Typography.module.css';

type TypographyVariant = 'heading' | 'subheading' | 'body' | 'caption';

interface TypographyProps {
  variant?: TypographyVariant;
  children: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant = 'body', children }) => {
  const getComponentByVariant = (): keyof JSX.IntrinsicElements => {
    switch (variant) {
      case 'heading':
        return 'h1';
      case 'subheading':
        return 'h2';
      case 'body':
        return 'p';
      case 'caption':
        return 'span';
      default:
        return 'p';
    }
  };

  const Component: keyof JSX.IntrinsicElements = getComponentByVariant();

  return <Component className={styles[variant]}>{children}</Component>;
};

export default Typography;
