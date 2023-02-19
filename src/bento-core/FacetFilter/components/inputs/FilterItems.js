/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { sortBySection } from '../../utils/Sort';
import ReduxCheckbox from './checkbox/ReduxCheckbox';
import ReduxSlider from './slider/ReduxSlider';
import { InputTypes } from './Types';

const FilterItems = ({
  facet,
  sortBy,
  CustomInput,
}) => {
  const { type, datafield, section } = facet;
  const sortFilters = sortBySection({ ...facet, sortBy });

  const filterItems = () => {
    switch (type) {
      case InputTypes.CHECKBOX:
        return sortFilters.map((item, index) => (
          <ReduxCheckbox
            checkboxItem={{ ...item, index, section }}
            datafield={datafield}
            CustomInput={CustomInput}
          />
        ));
      case InputTypes.SLIDER:
        return (<ReduxSlider facet={facet} />);
      default:
        return (<></>);
    }
  };

  return (
    <>
      {filterItems()}
    </>
  );
};

export default FilterItems;
