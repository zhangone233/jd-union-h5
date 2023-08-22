import { type FC, useState } from 'react';
import styles from './index.module.scss';

import {
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
} from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';

interface IIndexProps extends ToggleButtonGroupProps {}
const Index: FC<IIndexProps> = ({ value, onChange }) => {
  const [priceAscending, setPriceAscending] = useState(true);
  const [salesAscending, setSalesAscending] = useState(true);

  return (
    <div className={styles.container}>
      <ToggleButtonGroup value={value} onChange={onChange}>
        <ToggleButton value="bold" className={styles.sortBtn}>
          综合排序
        </ToggleButton>

        <ToggleButton
          value="bold"
          className={styles.sortBtn}
          onClick={() => setPriceAscending(!priceAscending)}
        >
          <div className={styles.arrowSortText}>
            <span>价格</span>
            <span>
              <KeyboardArrowUp className={styles.sortIcon} />
              <KeyboardArrowDown className={styles.sortIcon} />
            </span>
          </div>
          {/* {priceAscending ? <ArrowUpward /> : <ArrowDownward />} */}
        </ToggleButton>

        <ToggleButton
          value="bold"
          className={styles.sortBtn}
          onClick={() => setSalesAscending(!salesAscending)}
        >
          <div className={styles.arrowSortText}>
            <span>销量</span>
            <span>
              <KeyboardArrowUp className={styles.sortIcon} />
              <KeyboardArrowDown className={styles.sortIcon} />
            </span>
          </div>
          {/* {salesAscending ? <ArrowUpward /> : <ArrowDownward />} */}
        </ToggleButton>

        <ToggleButton value="bold" className={styles.sortBtn}>
          佣金比例
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default Index;
