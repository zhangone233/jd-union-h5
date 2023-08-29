import { type FC, useState, type SyntheticEvent } from 'react';
import styles from './index.module.scss';

import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab, ToggleButton, ToggleButtonGroup } from '@mui/material';

import ConditionalSort from '@pages/JD/components/conditionalSort';
import ProductList from './components/productList';

const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('2');

  const handleTabChange = (e: SyntheticEvent, value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.productClassify}>
        <TabContext value={selectedTab}>
          <div className={styles.tabBox}>
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
          </div>

          <div className={styles.conditionalSortBox}>
            <ConditionalSort />
          </div>

          <div className={styles.tabPanelBox}>
            <TabPanel className={styles.tabPanel} value="1">
              <ProductList eliteId={selectedTab} />
            </TabPanel>
            <TabPanel className={styles.tabPanel} value="2">
              <ProductList eliteId={selectedTab} />
            </TabPanel>
            <TabPanel className={styles.tabPanel} value="3">
              <ProductList eliteId={selectedTab} />
            </TabPanel>
          </div>
        </TabContext>
      </div>
    </div>
  );
};

export default App;
