import NextLink from 'next/link';

type Props = {
  href: string,
  className?: string,
  children: string | JSX.Element,
}

const Link : React.FC<Props> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
        <a {...props}>
            {children}
        </a>
    </NextLink>
);
}

export default Link