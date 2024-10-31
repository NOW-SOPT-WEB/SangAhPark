import { apiUrl } from '../apis/axios';

export const getInfo = async (memberId: string) => {
  try {
    const res = await apiUrl.get('/member/info', {
      headers: {
        memberId: memberId,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    alert(error.response?.data.message);
    console.log(error);
  }
};
