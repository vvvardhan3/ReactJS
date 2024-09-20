const Carousel = () => {
  return (
    <div>
      <div className="w-8/12 h-[250px] m-auto flex justify-between py-4">
        <h1 className="font-bold text-3xl">What's on your mind?</h1>
        <div className="flex ">
          <div className="p-1">
            <span className="px-3 py-2 bg-slate-100 rounded-2xl  hover:bg-slate-300 cursor-pointer ">
              ◀
            </span>
          </div>
          <div className="p-1">
            <span className="px-3 py-2 bg-slate-100 rounded-2xl  hover:bg-slate-300 cursor-pointer ">
              ▶
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Carousel;
