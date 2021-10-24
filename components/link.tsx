import NextLink from 'next/link';
import { FC } from 'react';

type Props = {
  href: string,
  children: JSX.Element,
}

const Link:FC<Props> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
        <a {...props}>
            {children}
        </a>
    </NextLink>
);
}

export default Link