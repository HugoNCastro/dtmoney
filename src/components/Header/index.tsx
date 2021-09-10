import logoImg from '../../assets/logo.svg';
import Switch from 'react-switch';
import { Container, Content } from './styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { tint } from 'polished';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
  toogleTheme: () => void;
}
export function Header({ onOpenNewTransactionModal, toogleTheme }: HeaderProps) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div>
        <p>Tema</p>
        <Switch
          onChange={toogleTheme}
          checked={title === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          handleDiameter={20}
          offColor={tint(0.5, colors.secundary)}
          onColor={tint(0.5, colors.secundary)}
        />
      </div>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}