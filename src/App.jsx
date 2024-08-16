function App() {

  return (
  <main className="w-full h-full overflow-y-auto bg-pink-600">
    <div className="flex flex-col justify-center w-full h-screen 
     text-center items-center text-white">
      <div>
        <p>Hi I'm</p>
          <h1 className="text-5xl ">Gerard Carlos Talania</h1>
        </div>
      <div className="flex space-x-2">
        <div className="p-5 hover:bg-sky-700 rounded-md flex flex-col space-y-2 duration-500">
          <div className="w-52 h-80 flex justify-center items-center bg-black rounded-lg">
            <img src="{karinaa}" className="w-20 aspect-square"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Karina</h1>
            <p>lover</p>
          </div>
        </div>

        <div className="p-5 hover:bg-neutral-700 rounded-md flex flex-col space-y-2 duration-500">
          <div className="w-52 h-80 flex justify-center items-center bg-black rounded-lg">
            <img src="{viteLogo}" alt="logo" className="w-20 aspect-square"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Winter</h1>
            <p>wife</p>
          </div>
        </div>

        <div className="p-5 hover:bg-neutral-700 rounded-md flex flex-col space-y-2 duration-500">
          <div className="w-52 h-80 flex justify-center items-center bg-black rounded-lg">
            <img src="{viteLogo}" alt="logo" className="w-20 aspect-square"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Ningning</h1>
            <p>fiancee</p>
          </div>
        </div>
        <div className="p-5 hover:bg-neutral-700 rounded-md flex flex-col space-y-2 duration-500">
          <div className="w-52 h-80 flex justify-center items-center bg-black rounded-lg">
            <img src="{viteLogo}" alt="logo" className="w-20 aspect-square"/>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Giselle</h1>
            <p>kabet</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

export default App
