'use client';

import styled from 'styled-components';

const Spacer = styled.span<{ $size: number }>`
  display: block;
  width: ${(props) => props.$size}px;
  min-width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  min-height: ${(props) => props.$size}px;
`;

export default Spacer;
