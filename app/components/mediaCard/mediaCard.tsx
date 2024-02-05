import React from 'react';

interface MediaCardProps {
  name: string;
  contactName?: string;
  email?: string;
  phone?: string[];
  website?: string;
  address?: string;
  mediaType?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ name, contactName, email, phone, website, address, mediaType }) => {
  return (
    <div className="border p-4 m-2">
      <p className="text-lg font-bold text-midnightGreen">{name} ({mediaType})</p>
      {contactName && <p>Contact: {contactName}</p>}
      {email && <p>Email: <a href={`mailto:${email}`}>{email}</a></p>}
      {phone && <p>Phone: {phone.join(' / ')}</p>}
      {website && <p>Website: <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>}
      {address && <p>Address: {address}</p>}
    </div>
  );
};

export default MediaCard;
