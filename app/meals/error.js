"use client";

import { useEffect } from "react";

export default function Error() {
  const numbers = [1, 2, 3, 4, 5, 6, 7];

  const newNumbers = numbers
    .map((number) => number + 1)
    .filter((number) => number > 4);

  console.log(
    [1, 2, 3, 4, 5, 6, 7]
      .map((number) => number + 1)
      .some((number) => number > 4),
  );

  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meal data, Please try again later</p>
    </main>
  );
}
