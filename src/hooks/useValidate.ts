import { usePagination } from '@context/PageContext/PageContext';
import { ChangeEvent, useState } from 'react';
import { z } from 'zod';

const artValidationSchema = z
  .string()
  .min(1, 'Empty string')
  .max(40, 'Too many characters')
  .regex(/^[a-zA-Z0-9 ' " \-,. \s]*$/, 'Invalid characters');

export function useValidate() {
  const { setQuery } = usePagination();
  const [formError, setFormError] = useState<string>('');
  const [value, setValue] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const res = artValidationSchema.safeParse(e.target.value);
    if (res.success) {
      setQuery(e.target.value);
      setFormError('');
    } else {
      console.log(res.error.format());
      setFormError(res.error.format()._errors[0]);
      setQuery('');
    }
  };

  return { value, formError, onChange };
}
