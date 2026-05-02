import Image from "next/image";
import Link from "next/link";

const RecipeDetail = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/recipes/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="p-10 text-red-500">Recipe not found</div>;
  }

  const recipe = await res.json();

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔙 Back */}
      <div className="max-w-5xl mx-auto px-6 pt-6">
        <Link href="/ssr" className="text-sm text-gray-600 hover:underline">
          ← Back to recipes
        </Link>
      </div>

      {/* 🔥 Hero Image */}
      <div className="relative max-w-5xl mx-auto mt-4 h-80 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-end p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {recipe.name}
          </h1>
        </div>
      </div>

      {/* 📄 Content */}
      <div className="max-w-5xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">

        {/* Left */}
        <div className="md:col-span-2">

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <span>🍴 {recipe.cuisine}</span>
            <span>⏱ {recipe.cookTimeMinutes} mins</span>
            <span>⭐ {recipe.rating}</span>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ol className="space-y-2 text-gray-700 leading-relaxed">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-semibold">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white rounded-xl shadow p-5 h-fit">

          <h2 className="text-lg font-semibold mb-4">Ingredients</h2>

          <ul className="space-y-2 text-gray-700 text-sm">
            {recipe.ingredients.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-600 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {recipe.mealType?.map((tag, i) => (
              <span
                key={i}
                className="bg-gray-100 text-xs px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default RecipeDetail;