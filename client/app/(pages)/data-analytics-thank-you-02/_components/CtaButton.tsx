const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397" stroke="#F67219" strokeWidth="1.5" />
    <path d="M0.000324288 8.62534L17.0875 8.92915" stroke="#F67219" strokeWidth="1.5" />
  </svg>
);

export function CtaButton({
  children,
  onClick,
  size = 'md',
  className = '',
  labelClassName = 'text-sm',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'md' | 'lg';
  className?: string;
  labelClassName?: string;
}) {
  const height = size === 'lg' ? 'h-12' : 'h-11';
  const chip = size === 'lg' ? 'h-[34px] w-[34px]' : 'h-[33px] w-[33px]';

  return (
    <button
      onClick={onClick}
      className={`group relative flex ${height} w-fit cursor-pointer items-center gap-3 rounded-[14px] pl-5 pr-2 font-bold text-white bg-gradient-to-r from-[#F67219] to-[#FFC79A] transition-transform duration-200 hover:scale-[1.02] shadow-lg shadow-[#F67219]/20 ${className}`}
    >
      <span className={`shrink-0 whitespace-nowrap ${labelClassName}`}>{children}</span>
      <span className={`flex ${chip} shrink-0 items-center justify-center rounded-[7px] bg-white`}>
        <ArrowIcon />
      </span>
    </button>
  );
}
