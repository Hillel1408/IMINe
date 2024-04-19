import classNames from "classnames";
import styles from "components/UI/Checkbox/Checkbox.module.scss";

export default function Checkbox({
  className,
  onChange,
}: {
  className?: string;
  onChange?: any;
}) {
  return (
    <label className={classNames(styles.root, className)}>
      <input type="checkbox" onChange={onChange} />
      <span>
        <svg width="25" height="24">
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
