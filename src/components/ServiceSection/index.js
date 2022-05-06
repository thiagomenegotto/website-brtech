import React from 'react'
import { FiCast, FiUsers, FiMonitor, FiActivity } from 'react-icons/fi';
import { FaAd, FaPenSquare } from 'react-icons/fa';

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

const ServiceList = [
  {
    icon: <FiCast/>,
    title: 'Landing page',
    description: 'Nós criamos a sua landing page de seu negócio atrair mais vendas para o seu negócio.'
  },
  {
    icon: <FaAd/>,
    title: 'SEO e Gestão de Tráfego',
    description: 'Criação de artes, gestão e análise de campanhas, relatórios, planos de marketing e muito mais.'
  },
  {
    icon: <FiUsers/>,
    title: 'Social Media',
    description: 'Criação de artes, estratégia e análise de interação dos posts, e muito mais.'
  },
  {
    icon: <FiActivity/>,
    title: 'Social Motion',
    description: 'Dê vida aos seus banners e atraia mais visibilidade de seu negócio nas redes sociais.'
  },
  {
    icon: <FaPenSquare/>,
    title: 'Design Gráfico',
    description: 'Criamos artes para o seu site, redes sociais e muito mais.'
  },
  {
    icon: <FiMonitor/>,
    title: 'Gestão de Websites e Minisites',
    description: 'Mantenha seu site em dia com o serviço de criação de banner, atualização dos produtos e/ou serviços.'
  }
];

const ServiceSection = () => {
  return (
    <>
      <ServiceContainer id='service'>
        <ServiceH1>Nossos Serviços</ServiceH1>
        <ServiceDesc>Criamos a melhor solução para o seu negócio atrair, vender e fidelizar.</ServiceDesc>
        <ServiceWrapper>
          {ServiceList.map((value, i) => (
            <ServiceCard>
              <ServiceIcon>{value.icon}</ServiceIcon>
              <ServiceH2>{value.title}</ServiceH2>
              <ServiceP>{value.description}</ServiceP>
            </ServiceCard>
          ))}
        </ServiceWrapper>
      </ServiceContainer>
    </> 
  );
};

export default ServiceSection;