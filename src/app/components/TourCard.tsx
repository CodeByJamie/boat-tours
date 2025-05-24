const TourCard = ({ title, description, image }: {title: string, description: string, image: string}) => {
      return (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
                  <img src={image} alt={title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="text-gray-700">{description}</p>
                  </div>
            </div>
      );
};

export default TourCard;
