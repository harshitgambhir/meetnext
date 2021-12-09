import { withUser } from '../lib';
import Header from '../components/Header';
import UpdateProfile from '../components/UpdateProfile';
import Router from 'next/router';
import * as api from '../api';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../components/Button';
import Head from 'next/head';

function Authenticated({ user, meetings }) {
  return (
    <div>
      {!user.username && (
        <UpdateProfile
          user={user}
          title='Create your profile'
          onDone={() => Router.replace(Router.asPath)}
        />
      )}
      <div className='px-4 sm:px-6 py-6 text-left max-w-3xl w-full mx-auto'>
        <div className='text-3xl font-bold'>Meetings</div>
        <div className='space-y-6 my-6'>
          {
            meetings.map(({ id, meetDateDisplay, personName, meetLink }) => {
              return (
                <div key={id}>
                  <div className='font-semibold text-md'>{meetDateDisplay}</div>
                  <div className='text-md text-gray-500 font-medium'>{personName}</div>
                  <Link href={meetLink} className='text-md'>{meetLink}</Link>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

function UnAuthenticated() {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-5xl mx-auto'>
        <div className='flex items-center px-4 sm:px-6 py-8 justify-between space-x-10 '>
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

export default function Home({ user, meetings }) {
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
      {user ? <Authenticated user={user} meetings={meetings} /> : <UnAuthenticated />}
    </div>
  );
}

export const getServerSideProps = withUser(async function (ctx) {
  const { req } = ctx;

  if (req.session?.user) {
    const data = await api.getMeetings(ctx);
    return {
      props: { user: req.session.user, meetings: data?.meetings },
    }
  }

  return {
    props: {},
  }
})