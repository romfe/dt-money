import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';
import { useState } from 'react';

interface HeaderProps{
  onOpenNewTransactionModal: () =>void;
}
export const Header = (props: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}