const Search = () => {
  return (
    <div className="container">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:flex sm:gap-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4 sm:w-[80%] sm:mb-0"
          id="username"
          type="text"
          placeholder="Username"
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline w-full sm:w-[20%]"
          type="button"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Search;
