'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { AgeVerificationModal } from '@/components/age-verification-modal';

interface AgeVerificationContextType {
  isVerified: boolean;
  verify: () => void;
  showNSFW: boolean;
  toggleNSFW: () => void;
}

const AgeVerificationContext = createContext<AgeVerificationContextType | undefined>(undefined);

export function useAgeVerification() {
  const context = useContext(AgeVerificationContext);
  if (!context) {
    throw new Error('useAgeVerification must be used within AgeVerificationProvider');
  }
  return context;
}

export function AgeVerificationProvider({ children }: { children: React.ReactNode }) {
  const [isVerified, setIsVerified] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showNSFW, setShowNSFW] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('age-verified') === 'true';
    const nsfwPref = localStorage.getItem('show-nsfw') === 'true';
    
    setIsVerified(verified);
    setShowNSFW(nsfwPref && verified);
    
    if (!verified) {
      const timer = setTimeout(() => setShowModal(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const verify = () => {
    setIsVerified(true);
    setShowModal(false);
    localStorage.setItem('age-verified', 'true');
  };

  const toggleNSFW = () => {
    if (!isVerified) {
      setShowModal(true);
      return;
    }
    
    const newShowNSFW = !showNSFW;
    setShowNSFW(newShowNSFW);
    localStorage.setItem('show-nsfw', newShowNSFW.toString());
  };

  return (
    <AgeVerificationContext.Provider value={{ isVerified, verify, showNSFW, toggleNSFW }}>
      {children}
      <AgeVerificationModal isOpen={showModal} onVerify={verify} />
    </AgeVerificationContext.Provider>
  );
}