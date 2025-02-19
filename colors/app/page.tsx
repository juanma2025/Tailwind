import Image from "next/image";

export default function Home() {
  return(
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="bg-white shadow-lg rounded-lg p-6 w-96">
          <section className="text-gray-500 text-sm flex justify-between">
            <span>tue feb 18 2025</span>
            <span>9:31:25 p.m</span>
          </section>

          <h1 className="mt-4">List Tailwind</h1>

          <section className="grid grid-cols-7 text-center text-gray-500 my-2">
          <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
          </section>
          
          <ul className="flex flex-col gap-4">
            <li className="flex gap-4">
              <span className="flex-1 bg-gray-300 rounded p-2">✅ take-out-the-fresh </span>
              <span className="bg-gray-300 rounded p-2">9:00 am</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-1 bg-gray-300 rounded p-2">✅ do-homework</span>
              <span className="bg-gray-300 rounded p-2">12:00 pm</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-1 bg-gray-300 rounded p-2">✅ go to grocery store</span>
              <span className="bg-gray-300 rounded p-2">1:00 pm</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-1 bg-gray-300 rounded p-2">✅ run 5 kilometers</span>
              <span className="bg-gray-300 rounded p-2">4:20 pm</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-1 bg-gray-300 rounded p-2">✅ load the dishwasher</span>
              <span className="bg-gray-300 rounded p-2">9:00 pm</span>
            </li>
            <li className="flex gap-4">
              <span className="flex-1 bg-gray-300 rounded p-2">✅ take out the trash</span>
              <span className="bg-gray-300 rounded p-2">9:00 am</span>
            </li>
          </ul>

          
      </section>

    </main>

  )
}
