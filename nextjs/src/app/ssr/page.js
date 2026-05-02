import Link from "next/link";
import Image from "next/image";

export const revalidate = 5;

const Page = async () => {
  const res = await fetch("https://dummyjson.com/recipes", {
    cache: "force-cache",
  });

  const data = await res.json();
  const recipes = data.recipes;

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Explore Recipes 🍽
        </h1>
        <p className="text-gray-500 mt-2">
          Discover delicious meals from around the world
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/ssr/${recipe.id}`}
            className="block"
          >
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group cursor-pointer">
              
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition duration-300"
                />

                <div className="absolute top-3 right-3 bg-white/90 px-2 py-1 rounded-lg text-sm font-semibold shadow">
                  ⭐ {recipe.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {recipe.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {recipe.cuisine}
                </p>

                <div className="flex justify-between mt-4 text-sm text-gray-600">
                  <span>⏱ {recipe.cookTimeMinutes} mins</span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">
                    {recipe.mealType?.[0]}
                  </span>
                </div>

                <div className="mt-4 text-center text-sm font-medium text-black">
                  View Recipe →
                </div>
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
};

export default Page;