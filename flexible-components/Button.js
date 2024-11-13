export default function Button({
  className,
  mode = "filled",
  Icon,
  children,
  ...props
}) {
  // Todo: Build this component!
  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>

  let css = `button ${mode}-button`;

  if (Icon) {
    css += " icon-button";
  }

  if (className) {
    css += " " + className;
  }

  return (
    <button className={css} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
