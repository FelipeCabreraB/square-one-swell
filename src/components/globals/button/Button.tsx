import Link from 'next/link';

type Props = {
  label: string;
  action?: () => void | Promise<boolean> | Promise<void>;
  variant?: 'outlined' | 'fill';
  color?: 'black' | 'green';
  classes?: string;
  type?: 'submit';
  disabled?: boolean;
  tabindex?: number;
  linkUrl?: string;
  _blank?: boolean;
  fullWidth?: boolean;
};

enum ButtonVariants {
  outlined = 'outlined',
  fill = 'fill'
}

const buttonVariants = {
  [ButtonVariants.outlined]: 'bg-white hover:text-white py-2 px-8',
  [ButtonVariants.fill]: 'text-white hover:bg-white py-2 px-8'
};

const baseStyles =
  'font-quicksand border focus:outline-none focus:ring-2 focus:ring-offset-1 inline-block text-center font-bold transition-all duration-200 ease-in-out';

const disabledStyles = 'opacity-70 pointer-events-none';

const Button = ({
  label,
  action,
  variant = 'fill',
  color = 'green',
  classes,
  type,
  disabled,
  tabindex,
  linkUrl,
  _blank,
  fullWidth
}: Props) => {
  enum ButtonColors {
    black = 'black',
    green = 'green'
  }

  const buttonColors = {
    [ButtonColors.black]:
      variant === 'outlined'
        ? 'border-black text-black hover:bg-black'
        : 'border-black bg-black hover:text-black',
    [ButtonColors.green]:
      variant === 'outlined'
        ? 'border-green text-green hover:bg-green'
        : 'border-green bg-green hover:text-green'
  };

  if (linkUrl) {
    return (
      <Link href={linkUrl}>
        <a
          aria-label={`Redirect to ${linkUrl}`}
          className={`${baseStyles} ${buttonColors[color]} ${buttonVariants[variant]} ${
            fullWidth ? 'w-full' : ''
          } ${disabled ? disabledStyles : ''} ${classes ? classes : ''}`}
          tabIndex={tabindex ? tabindex : 0}
          target={`${_blank ? '_blank' : ''}`}
          rel="noreferrer noopener"
        >
          {label}
        </a>
      </Link>
    );
  }

  return (
    <button
      aria-label={label}
      onClick={action}
      type={type ? type : 'button'}
      className={`${baseStyles} ${buttonColors[color]} ${buttonVariants[variant]} ${
        fullWidth ? 'w-full' : ''
      } ${disabled ? disabledStyles : ''} ${classes ? classes : ''}`}
      disabled={disabled}
      tabIndex={tabindex ? tabindex : 0}
    >
      {label}
    </button>
  );
};

export default Button;