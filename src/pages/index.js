import { withUser } from '../lib';
import Header from '../components/Header';
import UpdateProfile from '../components/UpdateProfile';
import Router from 'next/router';
import * as api from '../api';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';
import Head from 'next/head';
import { useQuery } from 'react-query';
import { useState } from 'react';
import UpdateTimes from '../components/UpdateTimes';
import UpdateMobile from '../components/UpdateMobile';

function Upcoming() {
  const { data, isLoading } = useQuery('getUpcomingMeetings', api.getUpcomingMeetings);

  if (isLoading) {
    return (
      <div className='my-6 max-w-xl flex items-center justify-center'>
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    )
  }

  if (data?.meetings.length === 0) {
    return (
      <div className='my-6 max-w-xl flex items-center justify-center'>
        <div>No upcoming meetings</div>
      </div>
    )
  }

  return (
    <div className='space-y-6 my-6 max-w-xl'>
      {
        data?.meetings.map(({ id, meetDateDisplay, meetTimeDisplay, amount, personName, description, meetLink }) => {
          return (
            <div key={id} className='border border-gray-300 rounded-lg shadow'>
              <div className='flex items-center justify-between px-6 py-4 border-b border-gray-300'>
                <div className='font-medium'>{meetDateDisplay}</div>
                <div className='font-medium'>{meetTimeDisplay}</div>
                <div className='font-medium'>{amount > 0 ? `₹${amount}` : 'Free'}</div>
              </div>
              <div className='px-6 py-4'>
                <div className='text-lg font-semibold'>{personName} <span className='text-gray-500 font-normal ml-4'>(30 min)</span></div>
                <p className='mt-2 font-medium break-words'>{description}</p>
                <Button
                  text='Join meeting'
                  className='w-auto mt-4'
                  link
                  href={meetLink}
                />
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

function Past() {
  const { data, isLoading } = useQuery('getPastMeetings', api.getPastMeetings);

  if (isLoading) {
    return (
      <div className='my-6 max-w-xl flex items-center justify-center'>
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    )
  }

  if (data?.meetings.length === 0) {
    return (
      <div className='my-6 max-w-xl flex items-center justify-center'>
        <div>No Past meetings</div>
      </div>
    )
  }

  return (
    <div className='space-y-6 my-6 max-w-xl'>
      {
        data?.meetings.map(({ id, meetDateDisplay, meetTimeDisplay, amount, personName, description, meetLink }) => {
          return (
            <div key={id} className='border border-gray-300 rounded-lg shadow'>
              <div className='flex items-center justify-between px-6 py-4 border-b border-gray-300'>
                <div className='font-medium'>{meetDateDisplay}</div>
                <div className='font-medium'>{meetTimeDisplay}</div>
                <div className='font-medium'>{amount > 0 ? `₹${amount}` : 'Free'}</div>
              </div>
              <div className='px-6 py-4'>
                <div className='text-lg font-semibold'>{personName} <span className='text-gray-500 font-normal ml-4'>(30 min)</span></div>
                <p className='mt-2 font-medium break-words'>{description}</p>
                <Button
                  text='Join meeting'
                  className='w-auto mt-4'
                  link
                  href={meetLink}
                />
              </div>
            </div>
          );
        })
      }
    </div >
  )
}

async function copyTextToClipboard(text) {
  if ('clipboard' in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand('copy', true, text);
  }
}

function Authenticated({ user, times, calendar }) {
  const [currentTab, setCurrentTab] = useState('Upcoming');
  const [showUpdateTimes, setShowUpdateTimes] = useState(false);
  const [showUpdateMobile, setShowUpdateMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  const styles = (name) => {
    if (name === currentTab) {
      return 'text-blue-600 border-b-2 border-blue-500'
    }
    return 'border-b-2 border-white'
  }
  return (
    <div>
      {!user.username ? (
        <UpdateProfile
          user={user}
          title='Create your profile'
          onDone={() => {
            Router.push(Router.asPath)
            setShowUpdateTimes(true)
          }}
        />
      ) :
        showUpdateTimes ?
          <UpdateTimes user={user} times={times} calendar={calendar} onSubmit={() => {
            Router.push(Router.asPath)
            setShowUpdateTimes(false);
            setShowUpdateMobile(true);
          }} />
          :
          showUpdateMobile ?
            <div className='items-end justify-center text-center px-4 py-8'>
              <div className='text-left max-w-md w-full mx-auto'>
                <h3 className='text-3xl font-medium'>Add Bank Details</h3>
                <h4 className='text-base text-gray-600 mt-2'>Add your mobile number with a valid upi in which you would like to recieve your meeting payouts.</h4>
                <UpdateMobile user={user} onDone={() => {
                  Router.push(Router.asPath)
                  setShowUpdateMobile(false);
                }} handleCancelClick={() => {
                  Router.push(Router.asPath);
                  setShowUpdateMobile(false);
                }} />
              </div>
            </div>
            :
            <div className='px-4 py-8 text-left max-w-5xl mx-auto'>
              <div className='flex max-w-md justify-between items-center border border-gray-200 px-4 rounded-xl'>
                <div className='flex items-center flex-wrap'>
                  <div className='mr-2'>Your Profile Link:</div>
                  <Link href={`https://inmeet.co/${user.username}`}>{`inmeet.co/${user.username}`}</Link>
                </div>
                <button onClick={async () => {
                  if (!copied) {
                    await copyTextToClipboard(`https://inmeet.co/${user.username}`)
                    setCopied(true);
                    setTimeout(() => {
                      setCopied(false)
                    }, [500])
                  }
                }} className='ml-4 hover:bg-gray-200 my-2 p-2 rounded-lg'>{copied ? 'Copied!' : 'Copy'}</button>
              </div>
              <div className='text-3xl font-medium mt-8'>Meetings</div>
              <div className='flex mt-4'>
                <div className={`${styles('Upcoming')} cursor-pointer py-2 font-semibold`} onClick={() => setCurrentTab('Upcoming')}>Upcoming</div>
                <div className={`${styles('Past')} ml-4 cursor-pointer py-2 font-semibold`} onClick={() => setCurrentTab('Past')}>Past</div>
              </div>
              {
                currentTab === 'Upcoming' ?
                  <Upcoming />
                  :
                  <Past />
              }
            </div>
      }
    </div>
  );
}

function UnAuthenticated() {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center px-4 py-8 justify-between space-x-10 '>
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className='flex items-center'>
                <Image className="w-auto" height={40} width={128} src="/images/inmeet.png" alt="" objectFit='contain' />
              </a>
            </Link>
          </div>
          <div className="items-center justify-end flex">
            <Button
              text='Login / Sign up'
              className='w-auto'
              link
              href='/login'
            />
          </div>
        </div>
        <div className='px-4'>
          <div className='flex flex-col mt-4'>
            <div className='text-2xl md:text-5xl text-center pt-10 font-bold leading-normal md:leading-normal'>Host paid 1-on-1 meetings<br />with people virtually</div>
            <div className='text-md md:text-xl text-center pt-2 text-gray-700'>Inmeet is a platform that can help you host paid<br />1-on-1 meetings with people virtually</div>
            <Button
              text='Login / Sign up'
              className='w-38 mx-auto mt-8'
              link
              href='/login'
            />
            <div className='mt-8 mx-auto'><Image height={300} width={320} objectFit='contain' src="/images/remote.png" alt="" /></div>
          </div>
          <div className='flex flex-col mt-10'>
            <div className='text-3xl md:text-5xl text-center pt-10 font-bold leading-normal'>How Inmeet works?</div>
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start mt-16'>
              <div className='text-center max-w-md md:w-1/3 p-4'>
                <div className='font-bold text-xl'>Create your custom link</div>
                <p className='break-words mt-2'>Create your custom link with your unique username and share it with people or add it to your social media profles.</p>
              </div>
              <div className='text-center  max-w-md md:w-1/3 p-4'>
                <div className='font-bold text-xl'>Set your price and availability</div>
                <p className='break-words  mt-2'>Take meetings as per your own price and schedule. Start by adding your availability date and time. You can edit your price or availability anytime you want.</p>
              </div>
              <div className='text-center  max-w-md md:w-1/3 p-4'>
                <div className='font-bold text-xl'>Get Booked for meetings</div>
                <p className='break-words  mt-2'>People can book a meeting with you through your custom link. Once booked an event will be added to your google calendar</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col my-16 md:my-24'>
            <div className='text-3xl md:text-5xl text-center pt-10 font-bold leading-normal md:leading-normal'>Join Inmeet</div>
            <Button
              text='Create Account'
              className='w-38 mx-auto mt-8 uppercase'
              link
              href='/login'
            />
          </div>
        </div>
        <div className='flex items-center justify-between px-4 sm:px-6 py-10 pt-16'>
          <div className='flex'>
            <Link href="/privacy"><a className="font-medium text-gray-900">Privacy</a></Link>
            <Link href="/terms"><a className="font-medium text-gray-900 ml-4">Terms</a></Link>
          </div>
          <div className='text-gray-600'>Inmeet</div>
        </div>
      </div>
    </div>
  )
}

export default function Home({ user, meetings, times, calendar }) {
  return (
    <div>
      <Head>
        <title>Inmeet | Host 1-on-1 paid meetings</title>
        <meta name='description' content='Inmeet is a platform that can help you host paid<br />1-on-1 meetings with people virtually.' />
        <meta content="Inmeet | Host 1-on-1 paid meetings" property="og:title" />
        <meta content="Inmeet is a platform that can help you host paid<br />1-on-1 meetings with people virtually." property="og:description" />
        <meta content="/images/inmeet.png" property="og:image" />
        <meta content="Inmeet | Host 1-on-1 paid meetings" property="twitter:title" />
        <meta content="Inmeet is a platform that can help you host paid<br />1-on-1 meetings with people virtually." property="twitter:description" />
        <meta content="/images/inmeet.png" property="twitter:image" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      {user && <Header user={user} />}
      {user ? <Authenticated user={user} meetings={meetings} times={times} calendar={calendar} /> : <UnAuthenticated />}
    </div>
  );
}

export const getServerSideProps = withUser(async function (ctx) {
  const { req } = ctx;
  if (req.session && req.session.user && req.session.user.username) {
    const data = await api.getTimes(ctx);
    return {
      props: { user: req.session.user, times: data?.times, calendar: data?.calendar },
    }
  }
  if (req.session?.user) {
    return {
      props: { user: req.session.user },
    }
  }

  return {
    props: {},
  }
})