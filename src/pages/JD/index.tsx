import { type FC, useState, type SyntheticEvent } from 'react';
import styles from './index.module.scss';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab, ToggleButton, ToggleButtonGroup } from '@mui/material';

import ConditionalSort from '@pages/JD/components/conditionalSort';

const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('2');

  const handleTabChange = (e: SyntheticEvent, value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.productClassify}>
        <TabContext value={selectedTab}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleTabChange}
              aria-label="product classify tabs"
            >
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>

          <div className={styles.conditionalSortBox}>
            <ConditionalSort />
          </div>

          <div className={styles.tabPanelBox}>
            <TabPanel className={styles.tabPanel} value="1">
              Item One
            </TabPanel>
            <TabPanel className={styles.tabPanel} value="2">
              Item Two
            </TabPanel>
            <TabPanel className={styles.tabPanel} value="3">
              Item Three
            </TabPanel>
          </div>
        </TabContext>
      </div>
    </div>
  );
};

export default App;
