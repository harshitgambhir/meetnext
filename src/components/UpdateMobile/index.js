import { useEffect, useRef } from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import Button from '../Button';
import Input from '../Input';
import * as api from '../../api';
import { useMutation } from 'react-query';

const validationSchema = Yup.object({
  mobile: Yup.string().min(10, '').max(10, '').required(''),
})

const UpdateMobile = ({ onDone, user, handleCancelClick }) => {
  const { mutate, isLoading, isSuccess, isError, error } = useMutation('updateMobile', api.updateMobile);
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
    mutate(values)
  }

  return (
    <Formik
      initialValues={{ mobile: user.mobile || '' }}
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
            <Input
              type='tel'
              name='mobile'
              label='Mobile number'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobile}
              minLength={10}
              maxLength={10}
              disabled={isLoading}
              className='mt-6'
              error={errors.mobile}
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              autoFocus
            />
          </div>
          <div className='flex mt-6 ml-auto items-center'>
            <div className='text-blue-600 cursor-pointer' onClick={handleCancelClick}>Cancel</div>
            <Button
              type='submit'
              text='Save'
              loading={isLoading}
              disabled={Object.keys(errors).length}
              className='w-24 ml-4'
            />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default UpdateMobile;