'use client';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
interface CardComponentProps {
  name: string;
  email?: string;
  website?: string;
}

const ToWriteCard: React.FC<CardComponentProps> = ({ name, email, website }) => {
  return (
    <div className='p-2 m-2 bg-persianGreen flex flex-col justify-center items-center'>
      <p className='text-lg text-gray-100	'>{name}</p>
      {email && <p className='text-xs text-midnightGreen	'> <EmailIcon/> : <a href={`mailto:${email}`}>{email}</a></p>}
      {website && <p className='text-xs text-midnightGreen	'><LanguageIcon/> : <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>}
    </div>
  );
};

export default ToWriteCard;
