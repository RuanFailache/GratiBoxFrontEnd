/* eslint-disable prefer-destructuring */
import { useContext, useEffect } from 'react';
import PlanContext from '../contexts/PlanContext';

const usePutPlanValuesInContext = (type, options, firstCheckbox, secondCheckbox, thirdCheckbox) => {
  const { plan, setPlan } = useContext(PlanContext);

  useEffect(() => {
    if (type === 'receive') {
      const itensDelivery = [];

      if (firstCheckbox) {
        itensDelivery.push(options[0]);
      }

      if (secondCheckbox) {
        itensDelivery.push(options[1]);
      }

      if (thirdCheckbox) {
        itensDelivery.push(options[2]);
      }

      setPlan({
        ...plan,
        itensDelivery,
      });
    } else if (type === 'delivery') {
      if (firstCheckbox || secondCheckbox || thirdCheckbox) {
        let receive;

        if (firstCheckbox) {
          receive = options[0];
        } else if (secondCheckbox) {
          receive = options[1];
        } else if (thirdCheckbox) {
          receive = options[2];
        }

        setPlan({
          ...plan,
          receive,
        });
      } else {
        setPlan({
          ...plan,
          receive: null,
        });
      }
    }
  }, [firstCheckbox, secondCheckbox, thirdCheckbox]);
};

export default usePutPlanValuesInContext;
