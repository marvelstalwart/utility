const ToggleTheme = ({ dark, setDark }) => (
  <div className="fixed top-4 right-4 z-50">
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 rounded-full bg-gold text-black font-semibold shadow"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  </div>
);

export default ToggleTheme;
