import React from 'react';

export const PortFolioContext = React.createContext();

const Context = ({ children }) => {
  const [globalState, setGlobalState] = React.useState({
    selectedLanguage: 'EN',
    content: {
      section1: {
        EN: {
          since: 'Since Dec, 2019',
          name: 'Veerbal Singh',
          subTitle: 'Front-End UI/UX Developer',
          quote: {
            first: 'Ideas come from',
            second: 'UNKNOWN',
          },
        },
        FR: {
          since: 'Depuis déc, 2019',
          name: 'Veerbal Singh',
          subTitle: 'Développeur Front-End UI/UX',
          quote: {
            first: "Les idées viennent de",
            second: 'l\'\INCONNU',
          },
        },
        DE: {
          since: 'Seit Dez, 2019',
          name: 'Veerbal Singh',
          subTitle: 'Front-End UI/UX Developer',
          quote: {
            first: 'Ideen kommen von',
            second: 'UNBEKANNT',
          },
        },
        ES: {
          since: 'Desde diciembre, 2019',
          name: 'Veerbal Singh',
          subTitle: 'Desarrollador Front-End UI/UX',
          quote: {
            first: 'Las ideas vienen de',
            second: 'Desconocido',
          },
        },
      },
    },
  });

  const setGlobalLanguage = (language) => {
    setGlobalState({
      ...globalState,
      selectedLanguage: language,
    });
  };
  return (
    <PortFolioContext.Provider value={{ globalState, setGlobalLanguage }} /**value="Veerbal"*/>
      {children}
    </PortFolioContext.Provider>
  );
};

export default Context;
