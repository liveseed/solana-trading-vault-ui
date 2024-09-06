import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import styled from 'styled-components';

// Styling for the wallet connection button
const WalletButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const StyledWalletButton = styled(WalletMultiButton)`
  background-color: #1a73e8;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #1558b1;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const WalletConnector = () => {
    return (
        <WalletButtonContainer>
            <StyledWalletButton />
        </WalletButtonContainer>
    );
};

export default WalletConnector;
