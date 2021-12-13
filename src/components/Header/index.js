import React, { useContext } from 'react';
import { API_URL } from '../../constants';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ user }) => {
  return (
    <div className='border-b-2 border-gray-100'>
      <div className="flex items-center px-4 py-3 justify-start space-x-10 max-w-5xl mx-auto">
        <div className="flex justify-between w-0 flex-1">
          <Link href="/">
            <a>
              <Image className="w-auto" height={40} width={128} src="/images/inmeet.png" alt="" objectFit='contain' />
            </a>
          </Link>
        </div>
        <div className="items-center justify-end flex flex-1 lg:w-0">
          <Menu as="div" className="ml-3 relative">
            <div>
              <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm outline-none">
                <Image
                  className={`rounded-full`}
                  width={32}
                  height={32}
                  src={user.avatar}
                  alt=''
                  objectFit='cover'
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right z-2 absolute right-0 mt-2 w-60 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <div className='flex items-center px-4 py-2 text-sm text-gray-700'>
                      <Image
                        className={`rounded-full`}
                        width={24}
                        height={24}
                        src={user.avatar}
                        alt=''
                        objectFit='cover'
                      />
                      <p className="ml-3 text-xs truncate">{user.email}</p>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={'/edit-profile'}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-200'
                    >
                      Edit Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={'/edit-schedule'}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-200'
                    >
                      Edit Schedule
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={'/payout'}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-200'
                    >
                      Payout
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href={`${API_URL}/logout`}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-200'
                    >
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};
export default Header;
