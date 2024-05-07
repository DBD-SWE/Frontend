import { Textarea } from '@nextui-org/react';

const InputComponent = (props: any) => {
  return (
    <Textarea
      {...props}
      classNames={{
        inputWrapper: ['rounded'],
      }}
    />
  );
};

export default InputComponent;
