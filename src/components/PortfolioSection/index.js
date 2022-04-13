import React from 'react'
import Icon1 from '../../images/svg-7.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-8.svg';
import { 
  PortfolioContainer, 
  PortfolioH1,
  PortfolioDesc,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2
} from './Portfolio.elements';

const PortfolioSection = () => {
  return (
    <>
      <PortfolioContainer id='portfolio'>
        <PortfolioH1>Nosso Portfolio</PortfolioH1>
        <PortfolioDesc>Alguns de nossos projetos realizados.</PortfolioDesc>
        <PortfolioWrapper>
          <PortfolioCard>
            <PortfolioIcon src={Icon1} />
            <PortfolioH2>Website Ferri</PortfolioH2>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon2} />
            <PortfolioH2>Design Gráfico</PortfolioH2>
          </PortfolioCard>
          <PortfolioCard>
            <PortfolioIcon src={Icon3} />
            <PortfolioH2>Catalógo Digital Interativo</PortfolioH2>
          </PortfolioCard>
        </PortfolioWrapper>
      </PortfolioContainer>
    </> 
  );
};

export default PortfolioSection;