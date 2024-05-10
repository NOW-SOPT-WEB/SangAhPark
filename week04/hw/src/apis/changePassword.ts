import { apiUrl } from '../apis/axios';

type Props = {
  previousPassword: string;
  newPassword: string;
  newPasswordVerification: string;
  memberId: string;
};

export const changePwd = async (props: Props, memberId: string) => {
  const data = {
    previousPassword: props.previousPassword,
    newPassword: props.newPassword,
    newPasswordVerification: props.newPasswordVerification,
  };
  try {
    const res = await apiUrl.patch('/member/password', data, {
      headers: {
        memberId: memberId,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    alert(error.response?.data?.message);
    console.log(error);
  }
};
