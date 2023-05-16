import type { ReactNode } from "react";

export type ListProps = {
  children?: ReactNode;
  count: number;
};

export function List({ children, count = 0 }: ListProps) {
  return (
    <div>
      <h1>List</h1>
      <p>{count} item(s)</p>
      {children && <ul>{children}</ul>}
    </div>
  );
}

export default List;
