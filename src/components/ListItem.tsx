export type ListItemProps = {
  isChecked?: boolean;
  label?: string;
}

export function ListItem({ isChecked, label }: ListItemProps) {
  return (
    <li>
      <input checked={isChecked} disabled readOnly type="checkbox" /> {label}
    </li>
  );
}

export default ListItem;
