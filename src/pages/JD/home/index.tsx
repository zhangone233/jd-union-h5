import { Box, Tab } from '@mui/material';
import { TabContext, TabList } from '@mui/lab';
import { type FC, useState, type SyntheticEvent } from 'react';

import styles from './index.module.scss';
import ProductList from './components/productList';
import CustomTabPanel from './components/CustomTabPanel';
import ConditionalSort from '@pages/JD/home/components/conditionalSort';

import { useRequest } from 'ahooks';
import { getCommodityClassification } from '@service/JD';

const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('2');
  const handleTabChange = (_e: SyntheticEvent, value: string) => {
    setSelectedTab(value);
  };

  const { data: CCData } = useRequest(getCommodityClassification);

  return (
    <div className={styles.container}>
      <div className={styles.productClassify}>
        <TabContext value={selectedTab}>
          <div className={styles.tabBox}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                variant="scrollable"
                scrollButtons={false}
                onChange={handleTabChange}
                aria-label="product classify tabs"
              >
                {CCData?.map(({ id, name }) => (
                  <Tab
                    key={id}
                    label={name}
                    value={String(id)}
                  />
                ))}
              </TabList>
            </Box>
          </div>

          {/* <div className={styles.conditionalSortBox}>
            <ConditionalSort />
          </div> */}

          <div className={styles.tabPanelBox}>
            {CCData?.map(({ id }) => (
              <CustomTabPanel
                lazy
                key={id}
                value={String(id)}
                index={selectedTab}
                classes={{
                  root: styles.tabPanel
                }}
                children={<ProductList eliteId={id} />}
              />
            ))}
          </div>
        </TabContext>
      </div>
    </div>
  );
};

export default App;
