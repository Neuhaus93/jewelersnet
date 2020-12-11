import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { MyImage } from './MyImage';
import { FaUser } from 'react-icons/fa';
import tw, { styled } from 'twin.macro';

interface UserImageProps {
  size: number;
  isUser?: boolean;
  src?: string | null;
  square?: boolean;
}

export const UserImage: React.FC<UserImageProps> = ({
  size,
  square,
  src,
  isUser,
}) => {
  const { mongoUser } = useAuth();
  const photoSrc = isUser ? mongoUser?.photo : src;

  // let photoSrc;
  // if (src) {
  //   photoSrc = src;
  // } else if (mongoUser && mongoUser.photo) {
  //   photoSrc = mongoUser.photo;
  // } else {
  //   photoSrc = undefined
  // }

  return (
    <StyledAvatar size={size} square={square}>
      {photoSrc ? <MyImage srcList={photoSrc} alt='user' cover /> : <FaUser />}
    </StyledAvatar>
  );
};

const StyledAvatar = styled.div<UserImageProps>`
  height: ${({ size }) => size / 4 + 'rem'};
  width: ${({ size }) => size / 4 + 'rem'};
  ${({ square }) => (square ? tw`rounded` : tw`rounded-full`)}
  ${tw`overflow-hidden bg-gray-200 flex justify-center items-center`}
`;
