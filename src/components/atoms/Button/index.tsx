export type ButtonProps = {
  label: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="button"
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
