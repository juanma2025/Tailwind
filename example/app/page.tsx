import Image from "next/image";

export default function Home() {
  return (
    <main className=" flex items-center justify-center w-screen h-screen ">
      <section className=" bg-white-500 w-60 bg-white-80 rounded-lg shadow-2x1 ">
        <img className="w-full h-48 object-cover"
        src=" https://static.vecteezy.com/system/resources/
previews/001/882/528/non_2x/beautiful-landscape-pine-
forest-with-mesmerizing-mountain-views-free-vector.jpg" alt="paisaje de montaña" />
<div className="p-4">
  <h1 className="font-bold text-lg">Red Heaven</h1>
  <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectur
          adipisicing elit. voluptatibus quia, nulla!
          maiores et perferendis aeque, excercitationem 
          praesentium nihill
          </p>
</div>
        <div className="flex justify-start space-x-2 mt-2"></div>
        <span className="rounded-full bg-pink-300 px-3 py-1">#Tailwind</span>
        <span className="rounded-full bg-pink-300 px-3 py-1">#FrondEeverything</span>
      
      </section>
    </main>

  );
}
