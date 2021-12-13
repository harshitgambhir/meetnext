import * as api from '../../api';
import Image from 'next/image';
import Link from 'next/link';

export default function MeetingPage({ meeting: { id, personName, personEmail, meetDateDisplay, meetLink, success, amount, user } }) {
  return (
    <div className='max-w-xl mx-auto px-4 py-6'>
      <div className='fixed z-10 bg-white max-w-[22rem] mx-auto inset-x-0 top-0 w-full flex items-center justify-center px-4 my-2 h-14' >
        <Link href="/">
          <a className='block'>
            <Image className="w-auto" height={40} width={128} src="/images/inmeet.png" alt="" objectFit='contain' />
          </a>
        </Link>
      </div>
      <div className='mt-12'>
        <div className='flex items-center'>
          <div className=''>Meeting</div>
          {
            success === 1 ?
              <div className='ml-4 py-2 px-3 rounded-full bg-green-500 text-white font-semibold text-xs border-blue'>Confirmed</div>
              :
              <div className='ml-4 py-2 px-4 rounded-full bg-red-500 text-white font-semibold text-xs border-blue'>Cancelled</div>

          }
        </div>
        <div className='text-lg font-semibold mt-4'>Thank you {personName}!</div>
        <div className='border rounded-md border-gray-300 p-3 mt-8'>
          {
            success === 1 ?
              <div className='font-semibold'>Your meeting is confirmed</div>
              :
              <div className='font-semibold'>Your meeting is cancelled</div>

          }
          {
            success === 1 ?
              null
              :
              <div className='text-sm'>If the amount has been deducted from your bank account, We will refund it soon.</div>

          }
        </div>
        <div className='border rounded-md border-gray-300 p-3 mt-8'>
          <div className='font-semibold text-md'>Meeting information</div>
          <div className='font-medium text-sm mt-4'>Meeting ID</div>
          <div className='text-sm mt-1'>{id}</div>
          <div className='font-medium text-sm mt-4'>Person</div>
          <div className='mt-1 flex items-center'>
            <Image height={40} width={30} className='rounded-md' src={user.avatar} alt='' objectFit='cover' />
            <div className='text-sm ml-2'>{user.name}</div>
          </div>
          <div className='font-medium text-sm mt-4'>Date and time</div>
          <div className='text-sm mt-1'>{meetDateDisplay}</div>
          {
            success === 1 ?
              <>
                <div className='font-medium text-sm mt-4'>Meet Link</div>
                <Link href={meetLink} className='text-sm mt-1'>{meetLink}</Link>
              </>
              :
              null
          }
          <div className='font-medium text-sm mt-4'>Amount</div>
          <div className='text-sm mt-1'>₹{amount}</div>
          <div className='font-medium text-sm mt-4'>Your details</div>
          <div className='text-sm mt-1'>{personName}</div>
          <div className='text-sm mt-1'>{personEmail}</div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async function (ctx) {
  const { params } = ctx;
  try {
    const data = await api.getMeeting(params.id);

    return {
      props: { meeting: data?.meeting },
    }
  } catch (err) {
    return {
      notFound: true
    }
  }
}