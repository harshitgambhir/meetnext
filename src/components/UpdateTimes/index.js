import Header from '../../components/Header';
import * as api from '../../api';
import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { useMutation } from 'react-query';
import _ from 'lodash';

function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function (result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
      }
    });
  }
  return changes(object, base);
}

const UpdateTimes = ({ user, times: _times, calendar, onSubmit }) => {
  const [times, setTimes] = useState(_times);
  const { mutate, isLoading, isSuccess } = useMutation('updateUser', api.updateTimes);

  useEffect(() => {
    if (isSuccess && onSubmit) {
      onSubmit();
    }
  }, [isSuccess])

  return (
    <div className='px-4 py-8 text-left max-w-5xl w-full mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='text-3xl font-medium'>Set Schedule</div>
        <Button
          text='Save'
          loading={isLoading}
          className='w-28'
          disabled={_.isEmpty(difference(times, _times))}
          onClick={() => mutate({ times })}
        />
      </div>
      <div className='space-y-6 my-6'>
        {
          Object.entries(calendar).map(([k, value], idx) => {
            return (
              <div key={idx} className=''>
                <div className='font-semibold text-lg text-md'>{value.long}</div>
                <div className='grid grid-cols-3 xs:grid-cols-5 md:grid-cols-6 gap-4 mt-4'>
                  {value.times.map((time, idx2) => {
                    let selected = false;
                    if (times[k] && times[k].find((_time) => _time.time === time.time)) {
                      selected = true;
                    }
                    return (
                      <button onClick={() => {
                        if (!selected) {
                          if (!times[k]) {
                            return setTimes({
                              ...times,
                              [k]: [{
                                time: time.time
                              }]
                            })
                          }
                          return setTimes({
                            ...times,
                            [k]: [...times[k], {
                              time: time.time
                            }]
                          })
                        }
                        const newTimes = times[k].filter((__time) => __time.time !== time.time);
                        setTimes({
                          ...times,
                          [k]: newTimes.length ? newTimes : undefined,
                        })
                      }} key={idx2} className={`text-center font-medium p-2 rounded ${selected ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}>{time.timeDisplay}</button>
                    )
                  })}
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default UpdateTimes;