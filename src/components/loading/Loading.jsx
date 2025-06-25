const Loading = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-white z-[999]">
      <span className="loading loading-infinity loading-xl scale-150"></span>
    </div>
  );
};

export default Loading;
