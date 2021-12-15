import * as api from '../../api';
import Image from 'next/image';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { ChevronLeft } from 'react-bootstrap-icons';
import { Formik } from "formik";
import * as Yup from 'yup';
import Input from '../../components/Input';
import { useMutation } from 'react-query';
import Script from 'next/script';
import Link from 'next/link';
import Head from 'next/head';
import Error from 'next/error';

const validationSchema = Yup.object({
  personName: Yup.string().min(1, '').max(50, '').required(''),
  personEmail: Yup.string()
    .email('Please enter a valid email address')
    .required(''),
  description: Yup.string().min(1, '').max(150, '').required(''),
})

export default function PublicUser({ errorCode, user }) {
  const [currentScreen, setCurrentScreen] = useState('Profile');
  const [selectedTime, setSelectedTime] = useState({});
  const [details, setDetails] = useState({
    personName: '',
    personEmail: '',
    description: ''
  });
  const { mutate, isSuccess, data, isError, reset } = useMutation('addMeeting', api.addMeeting);
  const [isOrderCreating, setIsOrderCreating] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const onSubmit = (values) => {
    setIsOrderCreating(true);
    setDetails(values)
    mutate({
      username: user.username,
      data: {
        ...values,
        meetDate: selectedTime.fullDate
      }
    })
  }

  const handlePaytm = () => {
    var config = {
      "root": "",
      "flow": "DEFAULT",
      "data": {
        "orderId": data.meeting.id, /* update order id */
        "token": data.meeting.token, /* update token value */
        "tokenType": "TXN_TOKEN",
        "amount": `${data.meeting.amount}.00` /* update amount */
      },
      "handler": {
        "notifyMerchant": function (eventName, data) {
        }
      }
    };

    if (window.Paytm && window.Paytm.CheckoutJS) {
      if (isScriptLoaded) {
        window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
          // after successfully updating configuration, invoke JS Checkout
          setCurrentScreen('Pay');
          setIsOrderCreating(false);
        }).catch(function onError(error) {
          setIsOrderCreating(false);
        });
      } else {
        window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
          // initialze configuration using init method 
          window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
            // after successfully updating configuration, invoke JS Checkout
            setCurrentScreen('Pay');
            setIsOrderCreating(false);
            setIsScriptLoaded(true);
          }).catch(function onError(error) {
            setIsOrderCreating(false);
            setIsScriptLoaded(true);
          });
        });
      }
    }
  }

  const onScriptLoad = () => {
    if (isScriptLoaded) {
      return;
    }
    handlePaytm();
  }

  useEffect(() => {
    if (isError) {
      setIsOrderCreating(false);
    }
  }, [isError])

  useEffect(() => {
    if (isScriptLoaded && isSuccess) {
      handlePaytm();
    }
  }, [isSuccess, data])

  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <>
      <Head>
        <title>Book a time with me on Inmeet</title>
        <meta name='description' content='Inmeet is a platform that can help you host paid 1-on-1 meetings with people virtually.' />
        <meta property="og:title" content="Book a time with me on Inmeet" />
        <meta property="og:description" content="Inmeet is a platform that can help you host paid 1-on-1 meetings with people virtually." />
        <meta property="og:url" content={`https://inmeet.co/${user.username}`} />
        <meta name="twitter:card" content="summary" />
        <meta property="twitter:title" content="Book a time with me on Inmeet" />
        <meta property="twitter:description" content="Inmeet is a platform that can help you host paid 1-on-1 meetings with people virtually." />
        <meta property="og:type" content="website" />
      </Head>
      {isSuccess && <Script type="application/javascript" crossOrigin="anonymous" src="https://securegw-stage.paytm.in/merchantpgpui/checkoutjs/merchants/WkDiKJ53470835719469.js" onLoad={onScriptLoad} />}
      <div className='xs:max-w-[22rem] mx-auto px-4 py-6'>
        {
          currentScreen === 'Profile' &&
          <>
            <div className='fixed z-10 bg-white xs:max-w-[22rem] mx-auto inset-x-0 top-0 w-full flex items-center justify-center px-4 my-2 h-14' >
              <Link href="/">
                <a className='block'>
                  <Image className="w-auto" height={40} width={128} src="/images/inmeet.png" alt="" objectFit='contain' />
                </a>
              </Link>
            </div>
            <div className='h-[22rem] sm:h-96 mx-auto relative rounded-xl mt-12' ><Image priority className='rounded-xl' src={user.avatar} alt='' layout='fill' objectFit='cover' /></div>
            <div className='mt-4 font-bold text-xl'>{user.name}</div>
            <div className='mt-1 text-md whitespace-pre-wrap'>{user.about}</div>
            <div className='fixed bg-white xs:max-w-[22rem] mx-auto inset-x-0 bottom-0 w-full flex items-center justify-between px-4 my-2 h-14'>
              <div className='text-md font-medium'>₹{user.price}</div>
              <Button
                text='Book Now'
                className='w-40'
                onClick={() => setCurrentScreen('SelectTime')}
              />
            </div>
          </>
        }
        {currentScreen === 'SelectTime' &&
          <>
            <div className='w-full fixed bg-white xs:max-w-[22rem] mx-auto inset-x-0 top-0 px-4 h-14 my-2 flex items-center' >
              <ChevronLeft onClick={() => setCurrentScreen('Profile')} className='font-bold text-2xl cursor-pointer' />
              <div className='font-bold text-xl ml-6'>Select Time</div>
            </div>
            <div className='mt-12'>
              <div className='space-y-6 my-6'>
                {
                  Object.entries(user.dates).map(([k, value], idx) => {
                    return (
                      <div key={idx} className=''>
                        <div className='font-semibold text-lg text-md'>{value.dateDisplay}</div>
                        <div className='grid grid-cols-3  gap-4 mt-4'>
                          {value.times.map((time, idx2) => {
                            let selected = false;
                            if (selectedTime.weekday === k && selectedTime.time === time.time) {
                              selected = true;
                            }
                            return (
                              <button disabled={time.disabled} onClick={() => {
                                if (!selected) {
                                  return setSelectedTime({
                                    weekday: k,
                                    time: time.time,
                                    fullDate: `${value.date} ${time.time}`
                                  })
                                }
                                setSelectedTime({})
                              }} key={idx2} className={`text-center font-medium p-2 rounded ${selected ? 'bg-blue-600 text-white' : time.disabled ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-50 text-blue-600'}`}>{time.timeDisplay}</button>
                            )
                          })}
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
            <div className='fixed bg-white xs:max-w-[22rem] mx-auto inset-x-0 bottom-0 w-full flex items-center justify-between px-4 my-2 h-14'>
              <div className='text-md font-medium'>₹{user.price}</div>
              <Button
                text='Next'
                className='w-40'
                onClick={() => setCurrentScreen('EnterDetails')}
                disabled={!Object.entries(selectedTime).length}
              />
            </div>
          </>
        }
        {currentScreen === 'EnterDetails' &&
          <>
            <div className='w-full fixed bg-white xs:max-w-[22rem] mx-auto inset-x-0 top-0 px-4 h-14 my-2 flex items-center' >
              <ChevronLeft onClick={() => setCurrentScreen('SelectTime')} className='font-bold text-2xl cursor-pointer' />
              <div className='font-bold text-xl ml-6'>Enter Details</div>
            </div>
            <Formik
              initialValues={details}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              validateOnMount
              initialTouched={{
                field: true
              }}
            >
              {({ values, handleChange, handleBlur, handleSubmit, setFieldValue, errors }) => (
                <form
                  onSubmit={handleSubmit}
                  className='flex flex-col items-center'
                >
                  <div className='mt-12 w-full'>
                    <Input
                      type='text'
                      name='personName'
                      label='Name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.personName}
                      minLength={1}
                      maxLength={20}
                      disabled={isOrderCreating}
                      error={errors.personName}
                    />
                    <Input
                      type='email'
                      name='personEmail'
                      label='Email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.personEmail}
                      minLength={1}
                      maxLength={256}
                      disabled={isOrderCreating}
                      className='mt-6'
                      error={errors.personEmail}
                    />
                    <Input
                      type='text'
                      name='description'
                      label='Write purpose of the meeting'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      minLength={1}
                      maxLength={150}
                      disabled={isOrderCreating}
                      className='mt-6'
                      textarea
                      rows={5}
                      error={errors.description}
                    />
                  </div>
                  <div className='fixed bg-white xs:max-w-[22rem] mx-auto inset-x-0 bottom-0 w-full flex items-center justify-between px-4 my-2 h-14'>
                    <div className='text-md font-medium'>₹{user.price}</div>
                    <Button
                      type='submit'
                      text='Next'
                      className='w-40'
                      disabled={Object.keys(errors).length}
                      loading={isOrderCreating}
                    />
                  </div>
                </form>
              )}
            </Formik>
          </>
        }
        {currentScreen === 'Pay' &&
          <>
            <div className='w-full fixed bg-white xs:max-w-[22rem] mx-auto inset-x-0 top-0 px-4 h-14 my-2 flex items-center' >
              <ChevronLeft onClick={() => setCurrentScreen('EnterDetails')} className='font-bold text-2xl cursor-pointer' />
              <div className='font-bold text-xl ml-6'>Payment</div>
            </div>
            <div className='mt-12'>
              <div className='flex items-center justify-between'>
                <div className='font-medium'>Pay with Paytm</div>
                <Image height={40} width={50} src="/images/paytm.png" alt="" objectFit='contain' />
              </div>
            </div>
            <div className='fixed bg-white xs:max-w-[22rem] mx-auto inset-x-0 bottom-0 w-full flex items-center justify-between px-4 my-2 h-14'>
              <div className='text-md font-medium'>₹{user.price}</div>
              <Button
                text='Pay'
                className='w-40'
                onClick={() => {
                  window.Paytm.CheckoutJS.invoke();
                }}
              />
            </div>
          </>
        }
      </div >
    </>
  );
}

export const getServerSideProps = async function (ctx) {
  const { params } = ctx;
  try {
    const data = await api.getPublicUser(params.username);
    return {
      props: { user: data?.user },
    }
  } catch (err) {
    const errorCode = err?.response?.status || 500
    return {
      props: { errorCode }
    }
  }
}