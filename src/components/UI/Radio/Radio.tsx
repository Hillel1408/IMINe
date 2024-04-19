import styles from "components/UI/Radio/Radio.module.scss";

export default function Radio({
  value,
  name,
  onChange,
  radioRef,
}: {
  value?: string;
  name?: string;
  onChange?: (e: any) => void;
  radioRef?: any;
}) {
  return (
    <label className={styles.root}>
      <input
        type="radio"
        value={value}
        name={name}
        onChange={onChange}
        ref={radioRef}
      />
      <span>
        <svg width="25" height="24">
          <g clipPath="url(#clip0_5054_61141)">
            <path
              d="M6.7334 12.8L9.9334 16L17.9334 8"
              stroke="white"
              strokeWidth="1.8"
            />
          </g>
        </svg>
      </span>
    </label>
  );
}
