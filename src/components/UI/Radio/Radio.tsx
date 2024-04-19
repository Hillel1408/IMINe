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
          <rect x="0.333008" width="24" height="24" rx="7.2" fill="#0B0C0E" />
          <g clip-path="url(#clip0_5054_61141)">
            <path
              d="M6.7334 12.8L9.9334 16L17.9334 8"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </span>
    </label>
  );
}
