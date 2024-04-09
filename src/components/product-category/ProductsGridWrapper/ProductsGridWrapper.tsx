'use client';

import styled from 'styled-components';
import { QUERIES } from '@/constants/styles.constants';

export default styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  gap: 16px;
  flex: 1;

  ${QUERIES.tabletAndLess} {
    flex: revert;
  }
`;
