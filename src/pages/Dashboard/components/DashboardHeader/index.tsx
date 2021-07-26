import { PlusIcon, SearchIcon } from 'react-line-awesome';
import { Button } from 'components/Form/Button';
import { InputText } from 'components/Form/InputText';
import { BadgeCircular } from 'components/BadgeCircular';
import AcmeLogo from 'assets/images/acme-logo.png';
import {
  BadgeRectangle,
  BadgeRectangleImg,
  FormContainer,
  Container,
} from './styles';

interface DashboardHeaderProps {
  searchField: string;
  setSearchField: (text: string) => void;
}

function DashboardHeader({
  searchField,
  setSearchField,
}: DashboardHeaderProps) {
  return (
    <Container>
      <BadgeCircular size={24}>a</BadgeCircular>
      <BadgeRectangle>
        <BadgeRectangleImg src={AcmeLogo} alt="ACME" />
      </BadgeRectangle>

      <FormContainer>
        <InputText
          value={searchField}
          onChangeText={(text) => setSearchField(text)}
          Icon={<SearchIcon />}
        />
        <Button>
          <PlusIcon />
          Nova Jornada
        </Button>
      </FormContainer>
    </Container>
  );
}

export { DashboardHeader };
