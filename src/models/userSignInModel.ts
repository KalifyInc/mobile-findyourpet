import React from 'react';

export interface UserLoginModel {
  petPhoto: any;
  setPetPhoto: React.Dispatch<React.SetStateAction<any>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  condition: any;
  setCondition: React.Dispatch<React.SetStateAction<any>>;
  localization: string;
  setLocalization: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  telephoneNumber: string;
  setTelephoneNumber: React.Dispatch<React.SetStateAction<string>>;
  handleSignIn: () => any;
}
