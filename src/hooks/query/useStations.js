import {useQuery} from 'react-query';

import {getStationsAPI} from '../../api/stations';
import {queryKeys} from './queryKeys';

export const useStations = () => {
  return {
    useGetStations: () => {
      return useQuery([queryKeys.STATIONS], () => getStationsAPI(), {
        select: response => response.data.data,
      });
    },
  };
};
