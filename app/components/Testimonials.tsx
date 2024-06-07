import Image from "next/image";

const testimonials = [
  {
    text: "Θα τους επέλεγα ξανά και ξανά!",
    name: "Dimitris",
    description: "Authorized Coca-cola resseler",
    avatar: "/user.png",
  },
  {
    text: "Άψογη συνεργασία, με σύνεση στον στοχο μας.",
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
    <section className='bg-white py-12 px-4'>
      <div className='container mx-auto'>
        <h2 className='text-2xl font-bold text-center'>Αξιολογήσεις</h2>
        <p className='text-gray-600 text-center mb-12'>
          Δείτε τι έγραψαν οι πελάτες μας για εμάς.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <div key={index} className='bg-gray-50 p-6 rounded-lg shadow'>
              <p className='text-gray-800'>“{testimonial.text}”</p>
              <div className='mt-4 flex items-center'>
                <Image
                  src={testimonial.avatar}
                  alt='Avatar'
                  className='w-10 h-10 rounded-full'
                  width={512}
                  height={512}
                />
                <div className='ml-4'>
                  <p className='font-bold'>{testimonial.name}</p>
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
