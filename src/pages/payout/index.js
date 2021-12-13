import { useState } from 'react';
import { withPrivate } from '../../lib';
import Header from '../../components/Header';
import UpdateMobile from '../../components/UpdateMobile';
import Router from 'next/router';
import { CheckCircle, Clock, InfoCircle } from 'react-bootstrap-icons';
import { Popover } from '@headlessui/react'

export default function Payout({ user }) {
  const [editable, setEditable] = useState(false);
  return (
    <div>
      <Header user={user} />
      <div className='max-w-3xl w-full mx-auto px-4 sm:px-6'>
        <h3 className='text-3xl font-medium mt-6'>Payout</h3>
        <div className='flex flex-col sm:flex-row justify-between mt-6'>
          <div className='border rounded-md border-gray-300 p-5 w-full'>
            <div className='font-semibold text-lg'>Bank details</div>
            {!editable ? (
              <>
                <div className='p-3 bg-gray-100 mt-4'>
                  Mobile number:{' '}
                  <span className='font-medium'>{user.mobile}</span>
                </div>
                <button
                  className='text-blue-600 mt-8'
                  onClick={() => setEditable(true)}
                >
                  Change number
                </button>
              </>
            ) : (
              <UpdateMobile user={user} onDone={() => {
                Router.reload(window.location.pathname);
              }} handleCancelClick={() => {
                setEditable(false);
              }} />
            )}
          </div>
          <div className='border rounded-md border-gray-300 p-5 w-full ml-0 mt-4 sm:ml-4 sm:mt-0'>
            <div className='font-semibold text-lg'>Your Balance</div>
            <div className='flex justify-between mt-4'>
              <div className='text-left flex-1'>
                <div className='flex items-center'>
                  <Clock className='text-yellow-400 opacity-60' />
                  <div className='text-sm font-medium ml-2 opacity-60'>PENDING</div>
                  <Popover className="relative ml-2">
                    <Popover.Button><InfoCircle className='opacity-60' /></Popover.Button>

                    <Popover.Panel className="absolute z-10 left-[-110px]">
                      <div className='text-white p-4 bg-trueGray-800 break-words min-w-[20rem] rounded'>
                        {`After your meeting is complete, your payment will appear here as "Pending" for 7 days
                        This period allows us to have time to resolve any disputes if there was an issue
                        on the user's end. After 7 days your payment will appear here as "Ready" and will be transfered
                        to your bank account registered with your given mobile number on every saturday.`}
                      </div>
                    </Popover.Panel>
                  </Popover>
                </div>
                <div className='text-3xl font-semibold mt-1 opacity-60'>
                  ₹{user.balance.pending}
                </div>
              </div>
              <div className='text-left flex-1'>
                <div className='flex items-center'>
                  <CheckCircle className='text-green-400' />
                  <div className='text-sm font-medium ml-2'>READY</div>
                </div>
                <div className='text-3xl font-semibold mt-1'>
                  ₹{user.balance.ready}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = withPrivate(async function ({ req, res }) {
  return {
    props: { user: req.session.user },
  }
})