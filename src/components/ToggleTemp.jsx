export default function ToggleTemp(props) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => props.setToggle(!props.toggle)}
        className="px-5 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm cursor-pointer"
      >
        Switch to {props.toggle ? "°C" : "°F"}
      </button>
      <button
        onClick={() => props.setDarkMode(!props.darkMode)}
        className="px-5 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm cursor-pointer"
        aria-label="Toggle dark mode"
      >
        {props.darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </div>
  );
}
