import { apiUrl } from '../apis/axios';

type Props = {
  authenticationId: string;
  password: string;
};

export const loginMember = async (props: Props) => {
  const data = {
    authenticationId: props.authenticationId,
    password: props.password,
  };
  try {
    const res = await apiUrl.post('/member/login', data);
    console.log(res);
    return res;
  } catch (error) {
    alert(error.response?.data.message);
    console.log(error);
  }
};
