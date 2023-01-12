import {useMutation} from 'react-query';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';

import {loginUserAction} from '../../redux/slices/auth';
import {setItem} from '../../helpers/asyncStore';
import {loginAPI} from '../../api/auth';

export const useAuthentication = () => {
  const dispatch = useDispatch();

  const onUserLogin = async data => {
    try {
      const {token} = data;
      const userAuth = {
        authToken: token,
      };

      await setItem('userAuth', JSON.stringify(userAuth));
      dispatch(loginUserAction());
      Toast.show({
        type: 'success',
        position: 'top',
        text2: 'Logged in Successfully',
      });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    useLogin: () => {
      return useMutation(payload => loginAPI(payload), {
        onSuccess: response => onUserLogin(response.data),
      });
    },
  };
};
