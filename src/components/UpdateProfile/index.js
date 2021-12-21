import { useContext, useEffect, useRef } from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import Button from '../Button';
import Input from '../Input';
import * as api from '../../api';
import { PencilFill } from 'react-bootstrap-icons';
import Image from 'next/image';
import { useMutation } from 'react-query';

const validationSchema = Yup.object({
  avatar: Yup.string(),
  name: Yup.string().min(1, '').max(50, '').required(''),
  username: Yup.string()
    .matches(
      /^[a-zA-Z0-9_]{1,15}$/,
      'Username must be between 1 to 15 characters and contain only letters, numbers and underscores and no spaces',
    )
    .required(''),
  about: Yup.string().min(1, '').max(150, '').required(''),
  price: Yup.number().min(0, 'Price must be between ₹0 to ₹1000 only').max(1000, 'Price must be between ₹0 to ₹1000 only').required(''),
})

const UpdateProfile = ({ title, onDone, user }) => {
  const { mutate, isLoading, isSuccess, isError, error } = useMutation('updateUser', api.updateUser);
  const formikRef = useRef(null);

  useEffect(() => {
    if (isSuccess) {
      if (onDone) {
        onDone();
      }
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      formikRef.current.setFieldError(error.error.key, error.error.message)
    }
  }, [isError])

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('avatar', values.fileAvatar);
    formData.append('name', values.name);
    formData.append('username', values.username);
    formData.append('about', values.about);
    formData.append('price', values.price);
    mutate(formData)
  }

  return (
    <div className='items-end justify-center text-center px-4 py-8'>
      <div className='text-left max-w-md w-full mx-auto'>
        <Formik
          initialValues={{ avatar: user.avatar || '', fileAvatar: '', name: user.name || '', username: user.username || '', about: user.about || '', price: user.price || 0 }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnMount
          innerRef={formikRef}
        >
          {({ values, handleChange, handleBlur, handleSubmit, setFieldValue, errors }) => (
            <form
              onSubmit={handleSubmit}
              className='flex flex-col items-center'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit(e);
                }
              }}
            >
              <div className='w-full'>
                <div className='flex items-start'>
                  <div className='w-full'>
                    <h3 className='text-3xl font-medium'>{title}</h3>
                    <div className='mt-8'>
                      <div>
                        <div className='relative h-28 w-28 mx-auto flex items-center justify-center'>
                          <Image
                            className={`rounded-full`}
                            width={96}
                            height={96}
                            src={values.avatar}
                            alt=''
                            objectFit='cover'
                          />
                          <PencilFill className='h-4 w-4 absolute bottom-0 right-0 text-gray-700' />
                          <input
                            name='avatar'
                            type='file'
                            accept='image/png, image/jpeg'
                            className='opacity-0 absolute inset-0 w-full h-full cursor-pointer'
                            onChange={(e) => {
                              const fileReader = new FileReader();
                              fileReader.onload = () => {
                                if (fileReader.readyState === 2) {
                                  setFieldValue('avatar', fileReader.result);
                                  setFieldValue('fileAvatar', e.target.files[0]);
                                }
                              };
                              fileReader.readAsDataURL(e.target.files[0]);
                            }}
                            onBlur={handleBlur}
                            disabled={isLoading}
                          />
                        </div>
                        <Input
                          type='text'
                          name='name'
                          label='Name'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          minLength={1}
                          maxLength={20}
                          disabled={isLoading}
                          className='mt-6'
                          error={errors.name}
                        />
                        <Input
                          type='text'
                          name='username'
                          label='Username'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.username}
                          minLength={1}
                          maxLength={15}
                          disabled={isLoading}
                          className='mt-6'
                          error={errors.username}
                          left='inmeet.co/'
                        />
                        <Input
                          type='text'
                          name='about'
                          label='About you'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.about}
                          minLength={1}
                          maxLength={150}
                          disabled={isLoading}
                          className='mt-6'
                          textarea
                          rows={4}
                          error={errors.about}
                        />
                        <Input
                          type='number'
                          name='price'
                          label='Price'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.price}
                          minLength={1}
                          maxLength={1000}
                          disabled={isLoading}
                          className='mt-6'
                          error={errors.price}
                        />
                        <div className='text-[13px] mt-1 text-gray-700'>Enter 0 to host free meetings.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                type='submit'
                text='Save'
                loading={isLoading}
                disabled={Object.keys(errors).length}
                className='w-40 mt-6'
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default UpdateProfile;