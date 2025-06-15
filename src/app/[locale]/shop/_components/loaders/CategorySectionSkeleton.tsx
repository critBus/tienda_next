// Puedes nombrar este componente como quieras, por ejemplo: CategorySectionSkeleton.jsx
// Asegúrate de tener Tailwind CSS configurado en tu proyecto.

const CategorySectionSkeleton = () => {
  return (
    // Contenedor principal para centrar y dar espacio vertical si es necesario
    <div className="flex justify-center items-center py-8 w-full">
      {/* Contenedor para los 3 items en fila con espacio entre ellos */}
      {/* Ajusta space-x-* según el espacio que quieras entre elementos (ej. space-x-8, space-x-12, space-x-16) */}
      <div className="flex justify-center space-x-16">
        {/* --- Item Skeleton 1 --- */}
        <div className="flex flex-col items-center space-y-3 animate-pulse">
          {/* Círculo placeholder */}
          {/* Ajusta w-* y h-* para el tamaño del círculo (ej. w-20 h-20, w-24 h-24) */}
          <div className="w-24 h-24 bg-gray-300 rounded-full dark:bg-gray-700"></div>
          {/* Línea de texto placeholder */}
          {/* Ajusta w-* para el ancho del texto (ej. w-16, w-20) */}
          {/* Ajusta h-* para la altura de la línea (ej. h-4) */}
          <div className="h-4 bg-gray-300 rounded-md dark:bg-gray-700 w-20"></div>
        </div>

        {/* --- Item Skeleton 2 --- */}
        <div className="flex flex-col items-center space-y-3 animate-pulse">
          {/* Círculo placeholder */}
          <div className="w-24 h-24 bg-gray-300 rounded-full dark:bg-gray-700"></div>
          {/* Línea de texto placeholder (ligeramente más ancha para simular "ALIMENTOS") */}
          <div className="h-4 bg-gray-300 rounded-md dark:bg-gray-700 w-24"></div>
        </div>

        {/* --- Item Skeleton 3 --- */}
        <div className="flex flex-col items-center space-y-3 animate-pulse">
          {/* Círculo placeholder */}
          <div className="w-24 h-24 bg-gray-300 rounded-full dark:bg-gray-700"></div>
          {/* Línea de texto placeholder (más ancha para simular "ELECTRODOMÉSTICOS") */}
          <div className="h-4 bg-gray-300 rounded-md dark:bg-gray-700 w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default CategorySectionSkeleton;
