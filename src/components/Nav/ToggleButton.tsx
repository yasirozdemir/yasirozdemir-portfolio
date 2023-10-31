interface IToggleButtonProps {
  isNavVisible: boolean;
  toggleNav: () => void;
}

const ToggleButton = ({ isNavVisible, toggleNav }: IToggleButtonProps) => {
  return (
    <button
      type="button"
      id="nav-toggle"
      className={isNavVisible ? "toggle" : ""}
      onClick={toggleNav}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default ToggleButton;
