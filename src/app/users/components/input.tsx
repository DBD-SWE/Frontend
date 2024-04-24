import { Input } from '@nextui-org/react';

const InputComponent = (props: any) => {
  return (
    <Input
      {...props}
      size="sm"
      classNames={{
        inputWrapper: ['rounded', ''],
      }}
    />
  );
};

export default InputComponent;
