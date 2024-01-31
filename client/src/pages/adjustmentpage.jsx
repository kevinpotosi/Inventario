import { Listadjustment } from "../components/listadjustment";

export function Adjustmentpage() {
  return (
    <div>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center"></div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <a
                    href="/"
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    INVENTARIO
                  </a>
                  <a
                    href="../pages/adjustmentpage.jsx"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Ajustes
                  </a>
                  <a
                    href="#"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Kardex
                  </a>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3"></div>
            </div>
          </div>
        </div>
      </nav>
      <Listadjustment />
    </div>
  );
}