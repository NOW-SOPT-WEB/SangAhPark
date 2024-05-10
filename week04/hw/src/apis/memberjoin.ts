import { isAxiosError } from 'axios';

import { apiUrl } from '../apis/axios';

type Props = {
  authenticationId: string;
  password: string;
  nickname: string;
  phone: string;
};

export const joinMember = async (props: Props) => {
  const data = {
    authenticationId: props.authenticationId,
    password: props.password,
    nickname: props.nickname,
    phone: props.phone,
  };
  try {
    const res = await apiUrl.post('/member/join', data);
    console.log(res);
    return res;
  } catch (error) {
    alert(error.response?.data.message);
    console.log(error);
  }
};
