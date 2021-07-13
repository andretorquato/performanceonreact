import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  function handleSearch() {}
  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}