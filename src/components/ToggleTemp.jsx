export default function ToggleTemp(props) {
  return (
    <>
      <button onClick={() => props.setToggle(!props.toggle)}>Toggle</button>
    </>
  );
}
