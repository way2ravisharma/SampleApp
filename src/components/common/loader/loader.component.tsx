import React, {memo} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector} from 'react-redux';
import {styles} from './loader.style';
import {loaderSelector} from '../../../store/selectors/common.selector';
import {PleaseWaitText} from '../../../constants/texts.constants';
import {LoaderType} from '../../../types/common.types';

const Loader = (): React.ReactElement => {
  const spinner: LoaderType = useSelector(loaderSelector);
  return (
    <Spinner
      visible={spinner?.show}
      textContent={spinner?.text || PleaseWaitText}
      textStyle={styles.spinnerTextStyle}
      size="large"
      overlayColor="rgba(0, 0, 0, 0.7)"
    />
  );
};

export default memo(Loader);
