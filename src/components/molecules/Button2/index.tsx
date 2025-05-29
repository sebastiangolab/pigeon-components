export type Button2Props = {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

export const Button2 = ({
  backgroundColor,
  label,
  onClick,
  ...props
}: Button2Props) => {
  return (
    <button
      type="button"
      className="button2"
      style={{ backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
