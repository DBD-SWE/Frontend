'use client';
import { Select, SelectItem } from '@nextui-org/react';

type Item = {
  value: string;
  label: string;
};

interface SelectComponentProps {
  items: Item[];
  label: string;
  placeholder: string;
}

const SelectComponent = (props: SelectComponentProps) => {
  const { items, label, placeholder } = props;

  return (
    <Select
      items={items}
      label={label}
      placeholder={placeholder}
      size="sm"
      classNames={{
        base: ['rounded'],
				mainWrapper: ['rounded'],
				
      }}
    >
      {(item) => <SelectItem key={item.value}>{item.label}</SelectItem>}
    </Select>
  );
};

export default SelectComponent;
