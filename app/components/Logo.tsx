import { lusitana } from '@util/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className='text-[44px]'>Fishy</p>
    </div>
  );
}
