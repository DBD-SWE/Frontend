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
  size?: 'sm' | 'md' | 'lg' | undefined;
  startContent?: React.ReactNode;
  isDisabled?: boolean;
}

const SelectComponent = (props: SelectComponentProps) => {
  const { items, label, placeholder, size, startContent } = props;

  return (
    <Select
      startContent={startContent}
      items={items}
      label={label}
      placeholder={placeholder}
      size={size ? size : 'sm'}
      isDisabled={props.isDisabled}

      classNames={{
        trigger: ['rounded'],
      }}
    >
      {(item) => <SelectItem key={item.value}>{item.label}</SelectItem>}
    </Select>
  );
};

export default SelectComponent;
