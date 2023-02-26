interface Item {
  id: number;
}

export interface IDatagridProps<T> {
  items: T[];
}

export function Datagrid<T extends Item>({ items }: IDatagridProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  );
}
