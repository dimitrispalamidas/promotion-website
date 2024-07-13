import Image from "next/image";

const Partners = () => {
  return (
    <section className='py-12 px-4 mb-6'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center text-blue-900 mb-12'>
          Οι Συνεργάτες μας
        </h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
          <div>
            <Image
              src='/partners/protergia.png'
              alt='protergia'
              width={150}
              height={150}
              objectFit='contain'
            />
          </div>
          <div>
            <Image
              src='/partners/cocacola.png'
              alt='cocacola'
              width={150}
              height={150}
              objectFit='contain'
            />
          </div>
          <div>
            <Image
              src='/partners/lampou.png'
              alt='lampou'
              width={150}
              height={150}
              objectFit='contain'
            />
          </div>
          <div>
            <Image
              src='/partners/j_walker.png'
              alt='j_walker'
              width={150}
              height={150}
              objectFit='contain'
            />
          </div>
          <div>
            <Image
              src='/partners/poukamisas.png'
              alt='poukamisas'
              width={150}
              height={150}
              objectFit='contain'
            />
          </div>
          <div>
            <Image
              src='/partners/lays.png'
              alt='lays'
              width={150}
              height={150}
              objectFit='contain'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
