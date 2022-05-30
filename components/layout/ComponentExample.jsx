import React from 'react';
import { BsHash } from 'react-icons/bs';

const ComponentExample = ({ children, name, paragraph, space }) => {
  return (
    <div>
      <div className="flex items-center mt-5 md:mt-10 group">
        <BsHash className="opacity-0 group-hover:opacity-100 group-hover:mx-2 duration-200" />
        <h3 className="py-1 md:py-3 text-lg md:text-2xl font-semibold">{name}</h3>
      </div>
      <p className="text-xs md:text-sm pl-4 pb-2 md:pb-4">{paragraph}</p>
      <div className="rounded-xl bg-opacity-80 bg-white dark:bg-darkPrimary py-10 flex justify-center z-0">
        <div className={`${space}`}>{children}</div>
      </div>
    </div>
  );
};

export default ComponentExample;
