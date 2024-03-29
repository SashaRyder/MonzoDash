import React from 'react';
import { BackContainer, Body, Header, MainContainer, Title, Footer } from './Modal.styled';
import { Icon } from '../Icon';
import { Button } from '../Button';

interface Props {
  title: string;
  onClose: () => void;
  show: boolean;
  saveText?: string;
  onSubmit: () => void;
}

type ModalProps = Props & React.HTMLAttributes<HTMLDivElement>;

export const Modal = ({ title, onClose, show, children, saveText, onSubmit, ...rest }: ModalProps) => {
  return (
    <BackContainer $show={show}>
      <MainContainer>
        <Header>
          <Title>{title}</Title>
          <Icon icon="close" onClick={onClose} />
        </Header>
        <Body>{children}</Body>
        <Footer>
          <Button onClick={onSubmit}>{saveText || 'Submit'}</Button>
        </Footer>
      </MainContainer>
    </BackContainer>
  );
};
