export default function AnalysisLoader() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">

      <h3 className="font-semibold text-lg mb-3">
        AI Prediction
      </h3>

      <div className="animate-pulse">

        <div className="h-4 bg-gray-200 rounded mb-3"></div>

        <div className="h-4 bg-gray-200 rounded mb-3"></div>

        <div className="h-4 bg-gray-200 rounded"></div>

      </div>

      <p className="mt-4 text-gray-500">
        Waiting for image upload...
      </p>

    </div>
  );
}