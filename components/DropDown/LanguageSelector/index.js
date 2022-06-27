/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

const languages = [
  {
    name: 'EN',
    flag: 'https://img.icons8.com/color/48/000000/great-britain.png',
    country: 'United Kingdom',
  },
  {
    name: 'FR',
    flag: 'https://img.icons8.com/color/48/000000/france.png',
    country: 'France',
  },
  {
    name: 'DE',
    flag: 'https://img.icons8.com/color/48/000000/germany.png',
    country: 'Germany',
  },
  {
    name: 'ES',
    flag: 'https://img.icons8.com/color/48/000000/spain.png',
    country: 'Spain',
  },
];

const LanguageSelector = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="rounded-full border-2 border-black w-12 h-12 m-2 fixed right-0.5 flex justify-center items-center select-none">
      <div onClick={() => setOpen(!open)} className="flex justify-center items-center flex-col items-center">
        <img className="w-5" src='https://img.icons8.com/color/48/000000/spain.png' alt='Germany'/>
        <span>EN</span>
      </div>
      <div
        className={`drop-down w-24 absolute top-10 border-0 overflow-hidden right-2 transition-all ${
          open ? 'h-36' : 'h-0'
        }`}
      >
        <ul>
          {languages.map((language, index) => (
            <ListItem key={index} {...language} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const ListItem = ({ name, flag, country }) => {
  return (
    <li className="flex justify-center items-center border-b-2">
      <img className="w-8" src={flag} alt={country} />
      <span className="ml-2">{name}</span>
    </li>
  );
};

export default LanguageSelector;
