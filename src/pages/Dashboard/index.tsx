import { useState } from 'react';
import { Sidenav } from 'components/Sidenav';
import { InputText } from 'components/Form/InputText';
import {
  ButtonContainerModal,
  Container,
  Content,
  ContentModal,
  ModalNewJorney,
  Spacer,
} from './styles';

import { DashboardHeader } from './components/DashboardHeader';
import { DashboardFilter } from './components/DashboardFilter';
import { DashboardTable } from './components/DashboardTable';

export const Dashboard = () => {
  const [selectFilter, setSelectFilter] = useState<number>(0);
  const [searchField, setSearchField] = useState<string>('');
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Sidenav />
      <Container>
        <DashboardHeader
          searchField={searchField}
          setSearchField={(text) => setSearchField(text)}
          setIsOpenModal={() => {
            setIsOpen(true);
          }}
        />
        <strong>Jornadas</strong>
        <Content>
          <DashboardFilter
            selectFilter={selectFilter}
            setSelectFilter={setSelectFilter}
          />
          <DashboardTable
            selectFilter={selectFilter}
            searchField={searchField}
          />
        </Content>
      </Container>
      <ModalNewJorney
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        shouldCloseOnOverlayClick
      >
        <div>
          <strong>Nova Jornada</strong>
          <Spacer />
          <ContentModal>
            <span>
              Dê um
              <strong> nome </strong>
              para essa Jornada
            </span>
            <InputText />
            <span>Você poderá alterar essa informação depois.</span>
          </ContentModal>

          <ButtonContainerModal>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Continuar
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancelar
            </button>
          </ButtonContainerModal>
        </div>
      </ModalNewJorney>
    </>
  );
};
