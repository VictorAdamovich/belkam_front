import React, { useState } from 'react';

import { Pagination } from 'semantic-ui-react';
import { categoriesData } from 'src/pages/catalog/categories.constant';

import { Accordion } from '@components/Accordion';
import Button from '@components/Button';
import Select from '@components/Select';
import {
  IconFilter, IconSliderLeft, IconSliderRight, IconSortArrow,
} from '@constants/icons.constants';
import { SELECT_OPTIONS } from '@constants/sort.constants';
import CatalogItem from '@containers/СatalogPage/CatalogItem';
import { MOKCatalog } from '@containers/СatalogPage/MOKCatalog';
import useBreakpoint from '@hooks/use-breakpoint.hooks';

import styles from './styles.module.scss';

const CatalogPage = () => {
  const { isBreakpointSm: isMobile } = useBreakpoint();
  const [isOpen, setIsOpen] = useState(false);

  const showMobileFilter = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h2 className={styles.activeCategory}>
          Памятники
        </h2>
        <div className={styles.iconWrap}>{IconFilter}</div>
      </div>
      <div className={styles.catalogWrap}>
        <div className={styles.accordionWrap}>
          <Accordion data={categoriesData} isOpen />
        </div>
        <div className={styles.catalog}>
          <div className={styles.filters}>
            <div className={styles.activeFilters}>
              <Button
                size="sizeS"
                defaultStyle="greenWhite"
                withControl
              >Вертикальные
              </Button>
            </div>
            <div className={styles.select}>
              <Select
                options={SELECT_OPTIONS}
                value={SELECT_OPTIONS[0].text}
                styleType="new"
                placeholder={`Сортировать: ${SELECT_OPTIONS[0].text}`}
                onChange={(_, data) => {
                  console.log(data.value);
                }}
                icon={IconSortArrow}
                className={styles.select}
              />
            </div>

          </div>
          <div className={styles.items}>
            {MOKCatalog.map((el) => (
              <CatalogItem
                image={el.image}
                description={el.description}
                name={el.name}
                price={el.price}
              />
            ))}
          </div>
          <div className={styles.paginationWrap}>
            <Pagination
              activePage={5}
              boundaryRange={isMobile ? 0 : 1}
              onPageChange={(el) => console.log(el)}
              siblingRange={1}
              totalPages={10}
              secondary
              firstItem={null}
              lastItem={null}
              prevItem={<button className={styles.buttonPrev}>{IconSliderLeft}</button>}
              nextItem={<button className={styles.buttonNext}>{IconSliderRight}</button>}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
