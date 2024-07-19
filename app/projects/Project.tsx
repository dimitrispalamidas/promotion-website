import Image from "next/image";

interface ProjectProps {
  title: string;
  imageUrl: string;
  onImageClick: () => void;
}

const Project: React.FC<ProjectProps> = ({ title, imageUrl, onImageClick }) => {
  return (
    <div className='p-4 bg-gray-100 rounded-lg shadow-lg w-full'>
      <h3 className='text-lg font-bold mb-2 text-[#800000] font-merriweather'>
        {title}
      </h3>
      <div
        className='relative w-full h-64 sm:h-72 md:h-80 lg:h-96 cursor-pointer'
        onClick={onImageClick}
      >
        <Image
          src={imageUrl}
          alt={title}
          className='transform transition-transform duration-200 hover:scale-105 rounded-lg'
          objectFit='cover'
          layout='fill'
        />
      </div>
    </div>
  );
};

export default Project;
