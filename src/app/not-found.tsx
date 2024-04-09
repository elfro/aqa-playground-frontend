import React from 'react';

import Error from '@/components/Error';
import {
  METADATA_PAGE_DESCRIPTION,
  METADATA_PAGE_TITLE,
} from '@/constants/pages-data.contants';

export const metadata = {
  title: `404 - Not found | ${METADATA_PAGE_TITLE}`,
  description: METADATA_PAGE_DESCRIPTION,
};

function NotFound() {
  return (
    <Error
      imgSrc='/not-found.svg'
      imgAlt='Not found'
      title='Ooops...'
      description='Page not found'
      buttonTitle='Back to Home'
    />
  );
}
export default NotFound;
