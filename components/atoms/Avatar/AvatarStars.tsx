import stars from "./stars.json";

const AvatarStars = ({ className }: { className?: string }) => (
  <svg
    width="115"
    height="115"
    viewBox="0 0 115 115"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {stars.map(({ cx, cy, r }) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#fff" />
    ))}
  </svg>
);

export const AvatarShootingStar = ({ className }: { className?: string }) => (
  <svg
    width="29"
    height="36"
    viewBox="0 0 29 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M27.7758 34.8191C28.6439 34.1362 28.3466 32.31 27.1118 30.7401C25.8769 29.1703 1.44007 -0.446364 0.571919 0.236557C-0.296237 0.919479 22.733 31.6434 23.9679 33.2132C25.2028 34.783 26.9076 35.502 27.7758 34.8191Z"
      fill="white"
    />
  </svg>
);

export default AvatarStars;
