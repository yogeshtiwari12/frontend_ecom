import React from 'react';

function Account({ data }) {
  console.log("data", data); // Log data to console for debugging

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold">Welcome, {data}!</h2>
    </div>
  );
}

export default Account;
