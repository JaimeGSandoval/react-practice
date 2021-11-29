/* eslint-disable import/no-anonymous-default-export */
import { useState } from 'react';

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const resetInput = () => {
    setValue('');
  };

  return [value, handleChange, resetInput];
};
