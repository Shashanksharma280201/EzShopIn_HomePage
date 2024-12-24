import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <nav className="flex items-center justify-between p-4 fixed w-full top-0 z-10">
        <a href="/" className="text-blue-500 hover:text-blue-700 transition">
          <Button>
            Back
          </Button>
        </a>
      </nav>

      <section className="flex flex-col items-center justify-center bg-gray-100 min-h-screen pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 w-full max-w-5xl">

          {/* Card 1 */}
          <a
            href="/Customer/offline_shopping"
            className="flex flex-col items-start justify-between p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <h1 className="text-xl font-semibold text-gray-700">
              Start with Offline Shopping
            </h1>
            <div className="flex items-center justify-between w-full mt-4">
              <span className="text-sm text-gray-500">Click here</span>
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23 4.5V8h-1V4.5A1.502 1.502 0 0 0 20.5 3H17V2h3.5A2.503 2.503 0 0 1 23 4.5zM4.5 22A1.502 1.502 0 0 1 3 20.5V17H2v3.5A2.503 2.503 0 0 0 4.5 23H8v-1zM22 20.5a1.502 1.502 0 0 1-1.5 1.5H17v1h3.5a2.503 2.503 0 0 0 2.5-2.5V17h-1zM3 4.5A1.502 1.502 0 0 1 4.5 3H8V2H4.5A2.503 2.503 0 0 0 2 4.5V8h1zM10 19V6H9v13zM6 6v13h2V6zm8 13V6h-2v13zm3-13v13h2V6zm-2 0v13h1V6z" />
                </svg>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a
            href="/Customer/check_Inventory"
            className="flex flex-col items-start justify-between p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <h1 className="text-xl font-semibold text-gray-700">
              Check the Inventory of Your Favourite Stores
            </h1>
            <div className="flex items-center justify-between w-full mt-4">
              <span className="text-sm text-gray-500">Click here</span>
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M34.283,384c17.646,30.626,56.779,41.148,87.405,23.502c0.021-0.012,0.041-0.024,0.062-0.036l9.493-5.483   c17.92,15.332,38.518,27.222,60.757,35.072V448c0,35.346,28.654,64,64,64s64-28.654,64-64v-10.944   c22.242-7.863,42.841-19.767,60.757-35.115l9.536,5.504c30.633,17.673,69.794,7.167,87.467-23.467   c17.673-30.633,7.167-69.794-23.467-87.467l0,0l-9.472-5.461c4.264-23.201,4.264-46.985,0-70.187l9.472-5.461   c30.633-17.673,41.14-56.833,23.467-87.467c-17.673-30.633-56.833-41.14-87.467-23.467l-9.493,5.483   C362.862,94.638,342.25,82.77,320,74.944V64c0-35.346-28.654-64-64-64s-64,28.654-64,64v10.944   c-22.242,7.863-42.841,19.767-60.757,35.115l-9.536-5.525C91.073,86.86,51.913,97.367,34.24,128s-7.167,69.794,23.467,87.467l0,0   l9.472,5.461c-4.264,23.201-4.264,46.985,0,70.187l-9.472,5.461C27.158,314.296,16.686,353.38,34.283,384z M256,170.667   c47.128,0,85.333,38.205,85.333,85.333S303.128,341.333,256,341.333S170.667,303.128,170.667,256S208.872,170.667,256,170.667z" />
                </svg>
              </div>
            </div>
          </a>

          {/* Card 3 */}
          <a
            href="/Sign-up/Login"
            className="flex flex-col items-start justify-between p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <h1 className="text-xl font-semibold text-gray-700">
              Register Your Company / Store
            </h1>
            <div className="flex items-center justify-between w-full mt-4">
              <span className="text-sm text-gray-500">Click here</span>
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <path d="M34.283,384c17.646,30.626,56.779,41.148,87.405,23.502c0.021-0.012,0.041-0.024,0.062-0.036l9.493-5.483   c17.92,15.332,38.518,27.222,60.757,35.072V448c0,35.346,28.654,64,64,64s64-28.654,64-64v-10.944   c22.242-7.863,42.841-19.767,60.757-35.115l9.536,5.504c30.633,17.673,69.794,7.167,87.467-23.467   c17.673-30.633,7.167-69.794-23.467-87.467l0,0l-9.472-5.461c4.264-23.201,4.264-46.985,0-70.187l9.472-5.461   c30.633-17.673,41.14-56.833,23.467-87.467c-17.673-30.633-56.833-41.14-87.467-23.467l-9.493,5.483   C362.862,94.638,342.25,82.77,320,74.944V64c0-35.346-28.654-64-64-64s-64,28.654-64,64v10.944   c-22.242,7.863-42.841,19.767-60.757,35.115l-9.536-5.525C91.073,86.86,51.913,97.367,34.24,128s-7.167,69.794,23.467,87.467l0,0   l9.472,5.461c-4.264,23.201-4.264,46.985,0,70.187l-9.472,5.461C27.158,314.296,16.686,353.38,34.283,384z M256,170.667   c47.128,0,85.333,38.205,85.333,85.333S303.128,341.333,256,341.333S170.667,303.128,170.667,256S208.872,170.667,256,170.667z" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}
