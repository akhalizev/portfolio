import type { JSX } from 'solid-js';

interface FigmaButtonProps {
  children: JSX.Element | string;
  type?: 'primary' | 'secondary' | 'tertiary';
  state?: 'default' | 'hover' | 'focus' | 'disabled';
  size?: 'regular' | 'large';
  onClick?: () => void;
  class?: string;
  disabled?: boolean;
}

const FigmaButton = (props: FigmaButtonProps) => {
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
    // Base styles
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
      font-['Inter',sans-serif]
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

    // Primary button styles
    if (type === 'primary') {
      if (disabled || state === 'disabled') {
        return `${baseStyles} bg-[#eaeaea] text-[#878787] cursor-not-allowed`;
      }
      
      if (state === 'focus') {
        return `${baseStyles} bg-[#d76f33] text-[#ffffff] ring-1 ring-[#141217] ring-offset-1`;
      }
      
      if (state === 'hover') {
        return `${baseStyles} bg-[#d76f33] text-[#ffffff]`;
      }
      
      // Default state
      return `${baseStyles} bg-[#c94f1a] text-[#ffffff] hover:bg-[#d76f33] focus:bg-[#d76f33] focus:ring-1 focus:ring-[#141217] focus:ring-offset-1 active:bg-[#d76f33] disabled:bg-[#eaeaea] disabled:text-[#878787] disabled:cursor-not-allowed`;
    }

    // You can add secondary and tertiary styles here later
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

export default FigmaButton;
