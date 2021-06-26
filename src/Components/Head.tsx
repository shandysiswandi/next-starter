import BaseHead from 'next/head';

import { HeadProps } from 'src/Interfaces/Components/HeadProps';

export const Head = ({ title, description }: HeadProps) => (
  <BaseHead>
    <title>{title}</title>
    <meta
      name='description'
      content='this contents must be grather than 150 characters'
    />
  </BaseHead>
);
