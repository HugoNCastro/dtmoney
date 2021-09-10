import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePerisitedState from './utils/usePerisitedState';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen,
    setIsNewTransactionModalOpen] = useState(false);

  const [theme, setTheme] = usePerisitedState<DefaultTheme>('theme',light);

  const toogleTheme = () => { 
    setTheme(theme.title === "light" ? dark : light);
  };

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <ThemeProvider theme={theme} >
        <Header 
          onOpenNewTransactionModal={handleOpenNewTransactionModal} 
          toogleTheme={toogleTheme}
          />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

