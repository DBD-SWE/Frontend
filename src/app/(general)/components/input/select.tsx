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
  name?: string;
  isInvalid?: boolean;
  errorMessage?: string;
  onChange?: (e: any) => void;
}

const SelectComponent = ({
  items,
  label,
  placeholder,
  size,
  startContent,
  isDisabled,
  name,
  isInvalid,
  errorMessage,
  onChange,
}: SelectComponentProps) => {
  return (
    <Select
      startContent={startContent}
      items={items.map((item) => ({
        key: item.value,
        ...item,
      }))}
      label={label}
      placeholder={placeholder}
      size={size || 'sm'}
      disabled={isDisabled}
      name={name}
      isInvalid={isInvalid}
      errorMessage={errorMessage}
      onChange={onChange}
    >
      {(item) => <SelectItem key={item.value}>{item.label}</SelectItem>}
    </Select>
  );
};

export default SelectComponent;
