import * as React from 'react';
import styled from 'styled-components';
import IconButton from '@/components/ui/IconButton';

interface InputProps extends React.ComponentPropsWithoutRef<'input'> {
  id: string;
  name: string;
  label: string;
  value: string | undefined;
  hideIcon?: boolean;
}
function Input(props: InputProps) {
  const { id, name, label, value, hideIcon, ...prop } = props;
  const [isSecretVisible, setIsSecretVisible] = React.useState(false);

  const inputType = hideIcon && isSecretVisible ? 'text' : 'password';

  return (
    <Wrapper className={props.className} data-value={value}>
      <Label htmlFor={id}>{label}</Label>
      <InputField id={id} name={name} type={inputType} {...prop} />
      {hideIcon && (
        <HideAction
          type='button'
          iconId={isSecretVisible ? 'eye' : 'eye-off'}
          title={`${isSecretVisible ? 'Show' : 'Hide'} field value`}
          thickness='thin'
          onClick={() => setIsSecretVisible(!isSecretVisible)}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  overflow: hidden;
  border-radius: 0.25rem;
  border: 1px solid var(--color-gray-300);
  background: var(--color-white);
  padding: 12px 16px 0;
  max-width: 100%;
  height: 52px;

  font-size: 1rem;
  font-weight: 400;
  line-height: 1;

  &:focus-within {
    border-color: var(--color-gray-700);
  }
`;

const InputField = styled.input`
  border: none;
  background: none;
  outline: transparent solid 2px;

  max-width: 100%;

  &::placeholder {
    color: transparent;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 18px;
  font-size: inherit;
  line-height: 1.5;
  color: inherit;

  will-change: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  ${Wrapper}:focus-within &,
  ${Wrapper}:not([data-value='']) & {
    transform: translateY(-8px);
    font-size: 0.75rem;
    line-height: 1;
    color: var(--color-gray-700);
  }
`;

const HideAction = styled(IconButton)`
  flex-shrink: 0;
`;
export default Input;
