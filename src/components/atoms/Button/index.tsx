export type ButtonProps = {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const Button = ({
  backgroundColor,
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="button"
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
