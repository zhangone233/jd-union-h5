import { Box } from '@mui/material';
import classNames from 'classnames';
import styles from './index.module.scss';
import { useState, useEffect } from 'react';

export interface TabPanelProps {
  lazy?: boolean;
  value: string;
  index: string;
  classes?: {
    root?: string;
  };
  children?: React.ReactNode;
}

export default function CustomTabPanel(props: TabPanelProps) {
  const { children, lazy, value, index, classes, ...other } = props;
  const [lazyFlag, setLazyFlag] = useState<boolean>(value === index);

  useEffect(() => {
    if (!lazyFlag && value === index) {
      setLazyFlag(true);
    }
  }, [index, value, lazyFlag]);

  const load = lazy ? lazyFlag : true;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={classNames(styles.panelBox, classes?.root)}
      {...other}
    >
      {load && <Box sx={{ width: '100%', height: '100%' }}>{children}</Box>}
    </div>
  );
}
