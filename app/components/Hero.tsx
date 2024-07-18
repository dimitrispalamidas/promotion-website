import Image from "next/image";

const Hero = () => {
  return (
    <header className='bg-gradient-to-r from-gray-600 to-gray-800 text-center py-20 shadow-lg'>
      <div className='container mx-auto flex flex-col items-center'>
        <Image
          src={"/logo.png"}
          alt='Logo of STPromotion'
          width={700}
          height={200}
          className='rounded-md'
        />
        <p className='text-gray-300 text-2xl mt-6 font-bold italic underline-offset-0'>
          Το πάθος μας είναι η προώθησή σας
        </p>
      </div>
    </header>
  );
};

export default Hero;
