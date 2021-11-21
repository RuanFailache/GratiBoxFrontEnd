import React, { useState } from 'react';

import {
  SignatureBoxOptionsStyle,
  SignatureCheckboxStyle,
  SignatureFlexStyle,
  SignatureOptionStyle,
} from './SignatureStyle';

import arrow from '../../assets/images/arrow.svg';

import usePutPlanValuesInContext from '../../hooks/usePutPlanValuesInContext';

const SignatureOption = function ({
  isSelected,
  handleClick,
  options,
  type,
  title,
}) {
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(false);
  const [isThirdChecked, setIsThirdChecked] = useState(false);

  usePutPlanValuesInContext(
    type,
    options,
    isFirstChecked,
    isSecondChecked,
    isThirdChecked,
  );

  const handleChangeStateCheckbox = (state, changeState) => {
    if (type === 'delivery') {
      setIsFirstChecked(false);
      setIsSecondChecked(false);
      setIsThirdChecked(false);
    }
    changeState(!state);
  };

  return (
    <SignatureOptionStyle
      height={isSelected ? '111px' : '44px'}
    >
      <SignatureFlexStyle onClick={() => handleClick(type)}>
        <strong>{title}</strong>
        {!isSelected ? <img src={arrow} alt="" /> : null}
      </SignatureFlexStyle>

      {isSelected ? (
        <SignatureBoxOptionsStyle>
          <SignatureCheckboxStyle
            onClick={() => handleChangeStateCheckbox(isFirstChecked, setIsFirstChecked)}
          >
            <input type="radio" checked={isFirstChecked} onChange={() => { }} />
            {options[0]}
          </SignatureCheckboxStyle>

          <SignatureCheckboxStyle
            onClick={() => handleChangeStateCheckbox(isSecondChecked, setIsSecondChecked)}
          >
            <input type="radio" checked={isSecondChecked} onChange={() => { }} />
            {options[1]}
          </SignatureCheckboxStyle>

          <SignatureCheckboxStyle
            onClick={() => handleChangeStateCheckbox(isThirdChecked, setIsThirdChecked)}
          >
            <input type="radio" checked={isThirdChecked} onChange={() => { }} />
            {options[2]}
          </SignatureCheckboxStyle>
        </SignatureBoxOptionsStyle>
      ) : null}

    </SignatureOptionStyle>
  );
};

export default SignatureOption;
