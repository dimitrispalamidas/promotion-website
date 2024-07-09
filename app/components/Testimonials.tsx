import Image from "next/image";

const testimonials = [
  {
    text: "Θα τους επέλεγα ξανά και ξανά!",
    name: "Dimitris",
    description: "Authorized Coca-cola reseller",
    avatar: "/user.png",
  },
  {
    text: "Άψογη συνεργασία, με σύνεση στον στόχο μας.",
    name: "Achilleas",
    description: "Founder of 'ΑΦΟΙ ΛΑΜΠΟΥ'",
    avatar: "/user.png",
  },
  {
    text: "Σας ευχαριστώ για όλα!",
    name: "Pavlina",
    description: "Project Manager",
    avatar: "/user.png",
  },
];

const Testimonials = () => {
  return (
    <section className='bg-gray-100 py-12 px-4'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold text-center text-blue-900 mb-4'>
          Αξιολογήσεις
        </h2>
        <p className='text-gray-600 text-center mb-12'>
          Δείτε τι έγραψαν οι πελάτες μας για εμάς.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-white p-6 rounded-lg shadow-lg'>
              <p className='text-gray-800 mb-4'>“{testimonial.text}”</p>
              <div className='flex items-center'>
                <div className='w-10 h-10 rounded-full overflow-hidden'>
                  <Image
                    src={testimonial.avatar}
                    alt='Avatar'
                    width={40}
                    height={40}
                    objectFit='cover'
                  />
                </div>
                <div className='ml-4'>
                  <p className='font-bold text-blue-900'>{testimonial.name}</p>
                  <p className='text-gray-600 text-sm'>
                    {testimonial.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
