import React, { useState } from "react";

// ✅ Currying function with UI updates
const sum = (a, updateSteps) => {
  return (b) => {
    if (b !== undefined) {
      updateSteps((prevSteps) => [
        ...prevSteps,
        { step: prevSteps.length + 1, prev: a, current: b, result: a + b },
      ]);
      return sum(a + b, updateSteps);
    }
    return a; // Final result return
  };
};

const CurrySum = () => {
  const [steps, setSteps] = useState([]);
  const [finalResult, setFinalResult] = useState(null);

  const handleSum = () => {
    setSteps([]); // Reset steps
    const total = sum(1, setSteps)(2)(5)(); // Example call
    setFinalResult(total);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300 p-5">
      <h2 className="text-2xl font-bold mb-4">Currying Sum Example</h2>

      <button
        onClick={handleSum}
        className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-600 dark:hover:bg-blue-800 transition"
      >
        Calculate Sum
      </button>

      {/* Show each step of addition */}
      <div className="text-lg">
        {steps.map((step, index) => (
          <p key={index} className="text-green-500">
            <strong>Step {step.step}:</strong> {step.result} ({step.prev} + {step.current})
          </p>
        ))}
      </div>

      {/* Final Result */}
      {finalResult !== null && (
        <p className="text-xl font-bold mt-4 text-blue-600">
          Final Result: {finalResult}
        </p>
      )}
    </div>
  );
};

export default CurrySum;
