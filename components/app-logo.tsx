import Link from 'next/link';
import Image from 'next/image';
interface AppLogo {
}
export const AppLogo = ({
}: AppLogo) => {
  return (
    <>
      <Link href="/">
        <Image
          width={500} height={500}
          src={"/assets/logos/full-logo-dark.svg"}
          alt="Ayonaire Logo"
          className='w-full h-full md:w-full md:h-full object-cover'
        />
      </Link>
    </>
  )
}
