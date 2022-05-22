import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { IoIosArrowForward } from 'react-icons/io';
import { FiEdit, FiCode } from 'react-icons/fi';
import { BiBug, BiArrowBack } from 'react-icons/bi';

import { Footer, Setting } from '../';
import { links } from '../../data/links';

export const NestedLayout = ({ children, name, title }) => {
  const [show, setShow] = useState(true);
  const router = useRouter();

  // scroll animation
  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  // scroll animation
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="test flex bg-white dark:bg-darkSecondary shadow-lg">
        <div className="hidden lg:block">
          <aside className="bg-white dark:bg-darkPrimary fixed z-30 h-screen w-[240px] px-5 pt-[5rem] overflow-y-auto scrollbar-hide">
            <div className="">
              <div className="py-1">
                <span className="flex items-center space-x-1 cursor-pointer">
                  <h4 className="font-semibold font-[1rem] text-primary dark:text-white">
                    Guide
                  </h4>
                  <IoIosArrowForward className="text-sm" />
                </span>
                <ul className="p-2">
                  <li className="sidebar__link">Introduction</li>
                  <li className="sidebar__link">Getting started</li>
                </ul>
              </div>
              <div className="py-1">
                <span className="flex items-center space-x-1 cursor-pointer">
                  <h4 className="font-semibold font-[1rem] text-primary dark:text-white">
                    Theme
                  </h4>
                  <IoIosArrowForward className="text-sm" />
                </span>
                <ul className="p-2">
                  <li className="sidebar__link">Colors</li>
                </ul>
              </div>
              <div className="py-1">
                <span className="flex items-center space-x-1 cursor-pointer">
                  <h4 className="font-semibold font-[1rem] text-primary dark:text-white">
                    Components
                  </h4>
                  <IoIosArrowForward className="text-sm" />
                </span>
                <ul className="p-2">
                  {links.map((item) => (
                    <li
                      onClick={() => router.push(`${item.path}`)}
                      key={item.id}
                      className="sidebar__link">
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
        <Setting
          reverse="flex-row-reverse"
          position="fixed z-40 bottom-5 right-4"
        />

        <div className="right-content bg-white dark:bg-darkSecondary absolute w-full pl-0 lg:pl-[240px] duration-300">
          <div
            className={
              show
                ? 'breadcrumbs__div py-10'
                : 'breadcrumbs__div py-3 bg-white dark:bg-darkSecondary'
            }>
            <div className='relative'>
              <div className="max-w-6xl mx-auto px-4 lg:px-0 flex items-center justify-between">
                <h3
                  className={
                    show ? 'heading' : 'heading text-base font-medium'
                  }>
                  {name}
                </h3>
                <div className="flex items-center space-x-2 md:space-x-3">
                  <FiEdit
                    title="Edit Page"
                    className="text-lg hover:opacity-75 rounded-lg cursor-pointer"
                  />
                  <FiCode
                    title="View Github Code"
                    className="text-lg hover:opacity-75 rounded-lg cursor-pointer"
                  />
                  <BiBug
                    title="Report a Bug"
                    className="text-lg hover:opacity-75 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
                <div>
                  <BiArrowBack
                    onClick={() => router.push('/docs/guide/introduction')}
                    title="Go to Back"
                    className="absolute left-3 top-1/3 text-lg hover:opacity-75 rounded-lg cursor-pointer"
                  />
                </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 lg:px-0">
            <div>{children}</div>
          </div>

          <Footer bg="bg-white dark:bg-darkSecondary" />
        </div>
      </div>
    </div>
  );
};
