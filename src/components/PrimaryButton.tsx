import type { JSX } from 'solid-js';

interface PrimaryButtonProps {
  children: JSX.Element | string;
  type?: 'primary' | 'secondary' | 'tertiary';
  state?: 'default' | 'hover' | 'focus' | 'disabled';
  size?: 'regular' | 'large';
  onClick?: () => void;
  class?: string;
  disabled?: boolean;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const {
    children,
    type = 'primary',
    state = 'default',
    size = 'regular',
    onClick,
    class: className = '',
    disabled = false,
    ...restProps
  } = props;

  const getButtonStyles = () => {
    const baseStyles = `
      box-border
      flex
      flex-row
      gap-1
      items-center
      justify-center
      px-4
      py-[7px]
      rounded-sm
      font-['Inter',_sans-serif]
      font-normal
      text-[14px]
      text-center
      transition-all
      duration-150
      ease-in-out
      min-w-[80px]
      h-[30px]
      cursor-pointer
      focus:outline-none
    `;

    if (type === 'primary') {
      if (disabled || state === 'disabled') {
        return `${baseStyles} bg-[#1c1a1f] text-[#777779] cursor-not-allowed`;
      }
      if (state === 'focus') {
        return `${baseStyles} bg-[#af5a28] text-[#ffffff] ring-1 ring-[#eeeeee] ring-offset-1`;
      }
      if (state === 'hover') {
        return `${baseStyles} bg-[#af5a28] text-[#ffffff]`;
      }
      return `${baseStyles} bg-[#c94f1a] text-[#ffffff] hover:bg-[#af5a28] focus:bg-[#af5a28] focus:ring-1 focus:ring-[#eeeeee] focus:ring-offset-1 active:bg-[#af5a28] disabled:bg-[#1c1a1f] disabled:text-[#777779] disabled:cursor-not-allowed`;
    }

    return baseStyles;
  };

  return (
    <button
      class={`${getButtonStyles()} ${className}`}
      onClick={onClick}
      disabled={disabled || state === 'disabled'}
      {...restProps}
    >
      <span class="block leading-normal whitespace-nowrap">
        {children}
      </span>
    </button>
  );
};

export default PrimaryButton;
