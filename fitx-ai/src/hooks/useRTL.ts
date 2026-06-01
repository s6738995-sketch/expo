import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useRTL = () => {
  const { i18n } = useTranslation();

  const isRTL = useMemo(() => {
    return i18n.language === 'ar';
  }, [i18n.language]);

  const textAlign = useCallback((defaultAlign: 'left' | 'right' | 'center' = 'left') => {
    if (defaultAlign === 'center') return 'center';
    return isRTL ? 'right' : 'left';
  }, [isRTL]);

  const flexDirection = useCallback((defaultDirection: 'row' | 'column' = 'row') => {
    if (defaultDirection === 'column') return 'column';
    return isRTL ? 'row-reverse' : 'row';
  }, [isRTL]);

  return {
    isRTL,
    textAlign,
    flexDirection,
  };
};
