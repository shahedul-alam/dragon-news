const NoNewsFound = () => {
  return (
    <div className="hero bg-base-200 min-h-max container mx-auto mb-20 rounded-md">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">No news found!</h1>
          <p className="py-6">
            Please check other categories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoNewsFound;
