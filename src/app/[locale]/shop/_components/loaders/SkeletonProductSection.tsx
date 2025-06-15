const SkeletonProduct = () => (
  <div className="max-sm:h-40 w-full max-sm:flex max-sm:flex-row max-sm:gap-1 sm:w-48 p-4 bg-white rounded-lg shadow-md animate-pulse">
    {/* Imagen */}
    <div className="max-sm:w-1/2 h-48 mb-4 bg-gray-200 rounded"></div>

    <div className="max-sm:w-1/2 max-sm:flex max-sm:flex-col max-sm:justify-center">
      {/* Etiquetas */}
      <div className="flex justify-between mb-2">
        <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
        <div className="w-1/3 h-4 bg-gray-200 rounded"></div>
      </div>

      {/* Título */}
      <div className="h-6 mb-2 bg-gray-200 rounded"></div>

      {/* Precios */}
      <div className="flex items-center mb-4">
        <div className="w-1/2 h-5 bg-gray-200 rounded"></div>
        <div className="w-1/2 h-5 ml-2 bg-gray-200 rounded"></div>
      </div>

      {/* Botones */}
      <div className="flex justify-between">
        <div className="w-1/3 h-8 bg-gray-200 rounded"></div>
        <div className="w-1/3 h-8 bg-yellow-400 rounded"></div>
      </div>
    </div>
  </div>
);

const SkeletonProductSection = ({ count = 4 }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Productos recomendados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: count }).map((_, index) => (
          <SkeletonProduct key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonProductSection;
