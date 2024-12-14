import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <nav className="flex p-2 text-sm lg:text-xl bg-transparent fixed">
        <a href="/">
          <Button>Back</Button>
        </a>
      </nav>

      <section className="flex flex-col p-9 justify-center bg-gray-400/25 h-screen items-center">
        <div className="flex flex-col w-full lg:w-3/4 h-full gap-6 p-6 transition-all delay-150">
          <div className="flex lg:flex-row flex-col w-full gap-6">


            <a href="/Customer/offline_shopping" className="flex flex-col justify-between w-full h-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 p-6 rounded-3xl shadow-xl transition-shadow delay-100 hover:shadow-2xl">
              <div className="flex flex-row w-full">
                <h1 className="flex w-3/4 text-lg lg:text-2xl opacity-70">
                  Start with offline shopping
                </h1>
                <div className="flex bg-white rounded-full p-4 w-1/4 h-fit">
                  <svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23 4.5V8h-1V4.5A1.502 1.502 0 0 0 20.5 3H17V2h3.5A2.503 2.503 0 0 1 23 4.5zM4.5 22A1.502 1.502 0 0 1 3 20.5V17H2v3.5A2.503 2.503 0 0 0 4.5 23H8v-1zM22 20.5a1.502 1.502 0 0 1-1.5 1.5H17v1h3.5a2.503 2.503 0 0 0 2.5-2.5V17h-1zM3 4.5A1.502 1.502 0 0 1 4.5 3H8V2H4.5A2.503 2.503 0 0 0 2 4.5V8h1zM10 19V6H9v13zM6 6v13h2V6zm8 13V6h-2v13zm3-13v13h2V6zm-2 0v13h1V6z" /><path fill="none" d="M0 0h24v24H0z" /></svg>
                </div>
              </div>
              <h1 className="flex text-sm opacity-50">click here</h1>
            </a>


            <a href="/Customer/check_Inventory" className="flex flex-col justify-between w-full h-full bg-gradient-to-br from-green-100 via-green-200 to-green-300 p-6 rounded-3xl shadow-xl transition-shadow delay-100 hover:shadow-2xl">
              <div className="flex flex-row w-full">
                <h1 className="flex w-3/4 text-lg lg:text-2xl opacity-70">
                  Check the inventory of your favourite stores
                </h1>
                <div className="flex bg-white rounded-full p-4 w-1/4 h-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    enableBackground="new 0 0 512 512"
                  >
                    <g>
                      <path d="M34.283,384c17.646,30.626,56.779,41.148,87.405,23.502c0.021-0.012,0.041-0.024,0.062-0.036l9.493-5.483   c17.92,15.332,38.518,27.222,60.757,35.072V448c0,35.346,28.654,64,64,64s64-28.654,64-64v-10.944   c22.242-7.863,42.841-19.767,60.757-35.115l9.536,5.504c30.633,17.673,69.794,7.167,87.467-23.467   c17.673-30.633,7.167-69.794-23.467-87.467l0,0l-9.472-5.461c4.264-23.201,4.264-46.985,0-70.187l9.472-5.461   c30.633-17.673,41.14-56.833,23.467-87.467c-17.673-30.633-56.833-41.14-87.467-23.467l-9.493,5.483   C362.862,94.638,342.25,82.77,320,74.944V64c0-35.346-28.654-64-64-64s-64,28.654-64,64v10.944   c-22.242,7.863-42.841,19.767-60.757,35.115l-9.536-5.525C91.073,86.86,51.913,97.367,34.24,128s-7.167,69.794,23.467,87.467l0,0   l9.472,5.461c-4.264,23.201-4.264,46.985,0,70.187l-9.472,5.461C27.158,314.296,16.686,353.38,34.283,384z M256,170.667   c47.128,0,85.333,38.205,85.333,85.333S303.128,341.333,256,341.333S170.667,303.128,170.667,256S208.872,170.667,256,170.667z" />
                    </g>
                  </svg>

                </div>
              </div>
              <h1 className="flex text-sm opacity-50">click here</h1>
            </a>


          </div>

          <a href="/Sign-up/Login" className="flex flex-col justify-between h-1/4 lg:h-1/2 w-full bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 p-6 rounded-3xl shadow-xl transition-shadow delay-100 hover:shadow-2xl">
            <div className="flex flex-row w-full">
              <h1 className="flex w-3/4 text-lg lg:text-2xl opacity-70">
                Register your Company / Store
              </h1>
              <div className="flex bg-white rounded-full p-4 w-1/4 h-fit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  xmlSpace="preserve"
                  enableBackground="new 0 0 512 512"
                >
                  <g>
                    <path d="M34.283,384c17.646,30.626,56.779,41.148,87.405,23.502c0.021-0.012,0.041-0.024,0.062-0.036l9.493-5.483   c17.92,15.332,38.518,27.222,60.757,35.072V448c0,35.346,28.654,64,64,64s64-28.654,64-64v-10.944   c22.242-7.863,42.841-19.767,60.757-35.115l9.536,5.504c30.633,17.673,69.794,7.167,87.467-23.467   c17.673-30.633,7.167-69.794-23.467-87.467l0,0l-9.472-5.461c4.264-23.201,4.264-46.985,0-70.187l9.472-5.461   c30.633-17.673,41.14-56.833,23.467-87.467c-17.673-30.633-56.833-41.14-87.467-23.467l-9.493,5.483   C362.862,94.638,342.25,82.77,320,74.944V64c0-35.346-28.654-64-64-64s-64,28.654-64,64v10.944   c-22.242,7.863-42.841,19.767-60.757,35.115l-9.536-5.525C91.073,86.86,51.913,97.367,34.24,128s-7.167,69.794,23.467,87.467l0,0   l9.472,5.461c-4.264,23.201-4.264,46.985,0,70.187l-9.472,5.461C27.158,314.296,16.686,353.38,34.283,384z M256,170.667   c47.128,0,85.333,38.205,85.333,85.333S303.128,341.333,256,341.333S170.667,303.128,170.667,256S208.872,170.667,256,170.667z" />
                  </g>
                </svg>

              </div>
            </div>
            <h1 className="flex text-sm opacity-50">click here</h1>
          </a>
        </div>
      </section>
    </>
  );
}
