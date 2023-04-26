"use client";

const Home: React.FC = () => {

  function categoryHandler() {
    console.log("Olá")
  }

  return (
    <div className="h-screen flex flex-row bg-zinc-100">
      <aside className="flex flex-col items-center w-60">
        <div className="space-y-10 mt-10 pt-10">
          <h2 className="text-2xl font-semibold">Filter your tasks</h2>
          <div className="flex flex-col gap-2 text-xl">
            <div>
              <h2>Task</h2>
            </div>
            <div>
              <h2>Task</h2>
            </div>
            <div>
              <h2>Task</h2>
            </div>
            <div>
              <h2>Task</h2>
            </div>
            <span className="text-base text-zinc-400 cursor-pointer" onClick={categoryHandler}>
              + Create new category
            </span>
          </div>
        </div>
      </aside>
      <div className="h-[90%] bg-zinc-500/40 w-[4px] rounded mx-5 self-center"></div>
      <main className="flex flex-col flex-1 mt-10">
        <div>
          <h1 className="text-3xl font-semibold">All Tasks</h1>
          <div className="bg-zinc-800 mt-5 text-white h-10 rounded w-52 text-lg grid place-items-center cursor-pointer">
            Create a new task
          </div>      

          <div className="flex flex-col mt-10">
            <div>
              <span className="text-xl">Study</span>
            </div>  
          </div>      
        </div>
      </main>
    </div>
  );
};

export default Home;
