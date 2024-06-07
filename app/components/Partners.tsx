import Image from "next/image";

const Partners = () => {
  return (
    <section className='bg-white py-12 px-4'>
      <div className='container mx-auto'>
        <h2 className='text-2xl font-bold text-center mb-12'>
          Οι Συνεργάτες μας
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
          <Image
            src='/protergia.png'
            alt='protergia'
            width={150}
            height={150}
            objectFit='contain'
          />
          <Image
            src='/cocacola.png'
            alt='cocacola'
            width={150}
            height={150}
            objectFit='contain'
          />
          <Image
            src='/lampou.png'
            alt='lampou'
            width={150}
            height={150}
            objectFit='contain'
          />
          <Image
            src='/j_walker.png'
            alt='j_walker'
            width={150}
            height={150}
            objectFit='contain'
          />
          <Image
            src='/poukamisas.png'
            alt='poukamisas'
            width={150}
            height={150}
            objectFit='contain'
          />
          <Image
            src='/lays.png'
            alt='lays'
            width={150}
            height={150}
            objectFit='contain'
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;
