const StatusUpdates = () => {
  return (
    <div className="flex flex-col justify-start my-4 space-y-4">
      <div className="flex items-center space-x-2 animate-fadeIn opacity-0 delay-500">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="font-normal text-text">Currently listening to:</span>
        <span className="font-medium">More Baby - Chris Lake</span>
      </div>
      <div className="flex items-center space-x-2 animate-fadeIn opacity-0 delay-600 delay">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <span className="font-normal text-text">Currently working on:</span>
        <span className="font-medium">Be Around</span>
      </div>
      <div className="flex items-center space-x-2 animate-fadeIn opacity-0 delay-700">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="font-normal text-text">Currently taking:</span>
        <span className="font-medium">CS 3120, CS 3240</span>
      </div>
    </div>
  );
};

export default StatusUpdates;
