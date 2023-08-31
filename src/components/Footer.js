import { useMemo } from "react";
import "./Footer.css";
const Footer = ({
  icontwitter,
  iconlink,
  iconlinkedin,
  iconfacebook,
  footerPosition,
  footerTop,
  footerLeft,
}) => {
  const footerStyle = useMemo(() => {
    return {
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
    };
  }, [footerPosition, footerTop, footerLeft]);

  return (
    <div className="footer" style={footerStyle}>
      <div className="footer1" />
      <div className="footer-9-dark">
        <div className="background" />
        <div className="footer-ui">
          <div className="poltica-de-privacidad-parent">
            <div className="poltica-de-privacidad">Política de Privacidad</div>
            <div className="poltica-de-privacidad">Términos y Condiciones</div>
            <div className="poltica-de-privacidad">Código de Conducta</div>
          </div>
          <div className="footer2">
            <div className="icontwitter-parent">
              <img className="icontwitter" alt="" src={icontwitter} />
              <img className="iconlink" alt="" src={iconlink} />
              <img className="icontwitter" alt="" src={iconlinkedin} />
              <img className="icontwitter" alt="" src={iconfacebook} />
            </div>
          </div>
          <div className="divider" />
          <div className="empresa">
            <b className="empresa1">Empresa</b>
            <div className="sobre-nosotros">Sobre Nosotros</div>
            <div className="soluciones">Soluciones</div>
            <div className="insights">Insights</div>
          </div>
          <div className="categoras">
            <b className="categoras1">Categorías</b>
            <div className="poltica-de-privacidad">Contratar Talento</div>
            <div className="poltica-de-privacidad">Desarrollar Talento</div>
            <div className="poltica-de-privacidad">
              Herramientas de Gamificación
            </div>
          </div>
          <div className="competencias-digitales-parent">
            <div className="poltica-de-privacidad">{`Competencias Digitales `}</div>
            <div className="poltica-de-privacidad">
              Competencias Comerciales
            </div>
            <div className="poltica-de-privacidad">Liderazgo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
