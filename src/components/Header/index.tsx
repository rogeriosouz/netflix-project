import { useEffect, useState } from 'react';
import LogoNetflix from '../../style/img/logonetflix.png';
import PerfilLogo from '../../style/img/perfilLogo.png';
import { Content, Heade } from './style';

export function Header() {
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(() => {
    function scrolColorHeader() {
      if(window.scrollY >= 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
      
    window.addEventListener('scroll', scrolColorHeader);
    return () => {
      window.removeEventListener('scroll', scrolColorHeader)
    }
  }, [])

  
  
  return (
    <Heade blackHeader={blackHeader}>
      <Content>
        <h1>
          <img src={LogoNetflix} alt="LogoNetflix" />
        </h1>

        <div>
          <img src={PerfilLogo} alt="Perfil" />
        </div>
      </Content>
    </Heade>
  );
}