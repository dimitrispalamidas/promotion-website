import Image from "next/image";

interface ProjectProps {
  title: string;
  imageUrl: string;
  onImageClick: () => void;
}

const Project: React.FC<ProjectProps> = ({ title, imageUrl, onImageClick }) => {
  return (
    <div className='project'>
      <h3 className='text-lg font-bold mb-2'>{title}</h3>
      <div className='image-container cursor-pointer' onClick={onImageClick}>
        <Image
          src={imageUrl}
          alt={title}
          className='project-image transform transition-transform duration-200 hover:scale-105'
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default Project;
