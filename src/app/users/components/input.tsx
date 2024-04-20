import { Input } from '@nextui-org/react';

const InputComponent = (props: any) => {
  return (
    <Input
      {...props}
      size="sm"
      classNames={{
        inputWrapper: ['rounded', 'w-[260px]'],
      }}
    />
  );
};
export default InputComponent;
