import Link from './link';

type Props = {
  //
}

const Logo = ({}: Props) => {
  return (
    <Link href="/">
      <img className="h-7 cursor-pointer" src="logo_text.svg" alt="remindle logo" width="auto"/>
    </Link>
  )
}

export default Logo