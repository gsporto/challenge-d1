import { useState } from 'react';
import { SearchIcon } from 'react-line-awesome';
import {
  BadgeRectangle,
  BadgeRectangleImg,
  FormContainer,
  Container,
} from './styles';
import AcmeLogo from '../../../../assets/images/acme-logo.png';
import { ReactComponent as Plus } from '../../../../assets/icons/plus.svg';
import { Button } from '../../../../components/Form/Button';
import { InputText } from '../../../../components/Form/InputText';
import { BadgeCircular } from '../../../../components/BadgeCircular';

function DashboardHeader() {
  const [searchField, setSearchField] = useState<string>('');
  return (
    <Container>
      <BadgeCircular size={24}>a</BadgeCircular>
      <BadgeRectangle>
        <BadgeRectangleImg src={AcmeLogo} alt="ACME" />
      </BadgeRectangle>

      <FormContainer>
        <InputText
          value={searchField}
          onChange={(event) => setSearchField(event.target.value)}
          Icon={<SearchIcon />}
        />
        <Button>
          <Plus />
          Nova Jornada
        </Button>
      </FormContainer>
    </Container>
  );
}

export { DashboardHeader };
