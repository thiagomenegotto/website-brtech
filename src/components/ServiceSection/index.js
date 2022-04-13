import React from 'react'
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-7.svg';
import Icon3 from '../../images/svg-5.svg';
import Icon4 from '../../images/svg-2.svg';
import Icon5 from '../../images/svg-1.svg';
import Icon6 from '../../images/svg-8.svg';
import { 
  ServiceContainer, 
  ServiceH1,
  ServiceDesc,
  ServiceWrapper,
  ServiceCard,
  ServiceIcon,
  ServiceH2,
  ServiceP
} from './Service.elements';

const ServiceSection = () => {
  return (
    <>
      <ServiceContainer id='service'>
        <ServiceH1>Nossos Serviços</ServiceH1>
        <ServiceDesc>Criamos a melhor solução para o seu negócio atrair, vender e fidelizar.</ServiceDesc>
        <ServiceWrapper>
          <ServiceCard>
            <ServiceIcon src={Icon1} />
            <ServiceH2>Landing page</ServiceH2>
            <ServiceP>Nós criamos a sua landing page de seu negócio atrair mais vendas para o seu negócio.</ServiceP>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={Icon2} />
            <ServiceH2>SEO e Gestão de Tráfego</ServiceH2>
            <ServiceP>Criação de artes, gestão e análise de campanhas, relatórios, planos de marketing e muito mais</ServiceP>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={Icon3} />
            <ServiceH2>Social Media</ServiceH2>
            <ServiceP>Criação de artes, estratégia e análise de interação dos posts, e muito mais.</ServiceP>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={Icon4} />
            <ServiceH2>Social Motion</ServiceH2>
            <ServiceP>Dê vida aos seus banners e atraia mais visibilidade de seu negócio nas redes sociais.</ServiceP>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={Icon5} />
            <ServiceH2>Design Gráfico</ServiceH2>
            <ServiceP>Criamos artes para o seu site, redes sociais e muito mais.</ServiceP>
          </ServiceCard>
          <ServiceCard>
            <ServiceIcon src={Icon6} />
            <ServiceH2>Gestão de Websites e Minisites</ServiceH2>
            <ServiceP>Mantenha seu site em dia com o serviço de criação de banner, atualização dos produtos e/ou serviços.</ServiceP>
          </ServiceCard>
        </ServiceWrapper>
      </ServiceContainer>
    </> 
  );
};

export default ServiceSection;