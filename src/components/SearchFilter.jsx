function SearchFilter({ search, setSearch, filterDate, setFilterDate }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 mb-4">
      <input
        className="border p-2 rounded flex-1"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        className="border p-2 rounded"
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
      />
    </div>
  );
}

export default SearchFilter;