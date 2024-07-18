import Image from "next/image";

interface ProjectProps {
  title: string;
  imageUrl: string;
  onImageClick: () => void;
}

const Project: React.FC<ProjectProps> = ({ title, imageUrl, onImageClick }) => {
  return (
    <div className='project p-4 bg-gray-100 rounded-lg shadow-lg'>
      <h3 className='text-lg font-bold mb-2 text-[#800000] font-merriweather'>
        {title}
      </h3>
      <div className='image-container cursor-pointer' onClick={onImageClick}>
        <Image
          src={imageUrl}
          alt={title}
          className='project-image transform transition-transform duration-200 hover:scale-105 rounded-lg'
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default Project;
