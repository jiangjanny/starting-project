'use client';// 因為next JS 基本上確保您可以捕獲該組建的任何錯誤，包括客戶端的錯誤，所以需要加上 use client

export default function Error() {
  return (
    <main className="error">
        <h1>An error occurred!</h1>
        <p>Failed to fetch meal data. please try again later.</p>
    </main>
  );
}