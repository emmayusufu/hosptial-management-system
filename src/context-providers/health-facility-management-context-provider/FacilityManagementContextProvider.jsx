/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable react/jsx-no-constructed-context-values */
import * as React from 'react';
import PropTypes from 'prop-types';
import ApiService from '../../services/ApiService';

import * as localStorageControl from '@app/utilities/localStorageControl';

const FacilityManagementContext = React.createContext();

function FacilityManagementContextProvider(props) {
  const { children } = props;
  const [activeTabIndex, setActiveTabIndex] = React.useState(0);

  const [facilityOwners, setFacilityOwners] = React.useState([]);
  const [facilityPolicyCategories, setFacilityPolicyCategories] = React.useState([]);
  const [facilityPolicyOptions, setFacilityPolicyOptions] = React.useState([]);
  const [facilityLevels, setFacilityLevels] = React.useState([]);
  const [facilities, setFacilities] = React.useState([]);
  const [facilityOwnerFormData, setFacilityOwnerFormData] = React.useState(null);

  const [facilityToBeEdited, setFacilityToBeEdited] = React.useState(null);
  const [recordId, setRecordId] = React.useState(null);

  /**
   * Calls API end point for facility registration
   * */
  const facilityRegistration = (body, callback) => {
    ApiService.post('/facility-management-ms/v1/facility/', body)
      .then((response) => {
        const { data, status } = response;
        const array = [...facilities];
        array.push(data);

        const updatedArray = array.map((item, index) => {
          return { ...item, number: index + 1 };
        });
        setFacilities([...updatedArray]);

        callback(status);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  /**
   * Calls API end point for facility level registration
   * */
  const facilityLevelRegistration = (body, callback) => {
    ApiService.post('/facility-management-ms/v1/facility/level', body)
      .then((response) => {
        const { data, status } = response;
        const array = [...facilityLevels];
        array.push(data);

        const updatedArray = array.map((item, index) => {
          return { ...item, number: index + 1 };
        });
        setFacilityLevels([...updatedArray]);

        callback(status);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  /**
   * Calls API end point for facility owner registration
   * */
  const facilityOwnerRegistration = (body, callback) => {
    ApiService.post('/facility-management-ms/v1/facility/owner', body)
      .then((response) => {
        const { data, status } = response;
        const array = [...facilityOwners];
        array.push(data);

        const updatedArray = array.map((item, index) => {
          return { ...item, number: index + 1 };
        });
        setFacilityOwners([...updatedArray]);

        callback(status);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  /**
   * Calls API to fetch all facility owners
   */
  const getAllFacilityOwners = () => {
    ApiService.get('facility-management-ms/v1/facility/owner')
      .then((response) => {
        const { data, status } = response;
        if (status === 200) {
          const array = data.map((item, index) => {
            return {
              ...item,
              number: index + 1,
            };
          });
          setFacilityOwners(array);
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const getAllFacilityPolicyCatergories = () => {
    ApiService.get('facility-management-ms/v1/facility/policy')
      .then((response) => {
        const { data, status } = response;
        if (status === 200) {
          const array = data.map((item, index) => {
            return {
              ...item,
              number: index + 1,
            };
          });
          setFacilityPolicyCategories(array);
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const getAllFacilityPolicyOptions = () => {
    ApiService.get('facility-management-ms/v1/facility/policy')
      .then((response) => {
        const { data, status } = response;
        if (status === 200) {
          const array = data.map((item, index) => {
            return {
              ...item,
              number: index + 1,
            };
          });
          setFacilityPolicyOptions(array);
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  /**
   * Calls API to fetch all facilities
   */
  const getAllAllFacilities = () => {
    ApiService.get('/facility-management-ms/v1/facility/')
      .then((response) => {
        const { status, data } = response;
        switch (status) {
          case 200:
            const array = data.map((item, index) => {
              return {
                ...item,
                number: index + 1,
              };
            });
            setFacilities(array);
            break;
          case 204:
            setFacilities([]);
            break;

          default:
            break;
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  /**
   * Calls API to fetch all facility levels
   */
  const getAllAllFacilityLevels = () => {
    ApiService.get('facility-management-ms/v1/facility/level')
      .then((response) => {
        const { data, status } = response;
        switch (status) {
          case 200:
            const array = data.map((item, index) => {
              return {
                ...item,
                number: index + 1,
              };
            });
            setFacilityLevels(array);
            break;
          case 204:
            break;

          default:
            break;
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  const updateFacility = (id, body, callback) => {
    ApiService.put(`facility-management-ms/v1/facility/${id}`)
      .then((response) => {
        const { status } = response;
        callback(status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateFacilityOwner = (id, body, callback) => {
    ApiService.put(`facility-management-ms/v1/facility/owner/${id}`, body)
      .then((response) => {
        const { data, status } = response;
        const array = [...facilityOwners];
        array.push(data);

        const updatedArray = array.map((item, index) => {
          return { ...item, number: index + 1 };
        });
        setFacilityOwners([...updatedArray]);

        callback(status);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateFacilityLevel = (id, body, callback) => {
    ApiService.put(`facility-management-ms/v1/facility/level/${id}`)
      .then((response) => {
        const { status } = response;
        callback(status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateFacilityPolicy = (id, body, callback) => {
    ApiService.put(`facility-management-ms/v1/facility/level/${id}`)
      .then((response) => {
        const { status } = response;
        callback(status);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFacility = (id) => {
    ApiService.delete(`facility-management-ms/v1/facility/${id}`)
      .then(() => { })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFacilityOwner = (id) => {
    ApiService.get(`facility-management-ms/v1/facility/owner/${id}`)
      .then(() => { })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFacilityLevel = (id) => {
    ApiService.get(`facility-management-ms/v1/facility/level/${id}`)
      .then(() => { })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFacilityPolicy = (id) => {
    ApiService.get(`facility-management-ms/v1/facility/level/${id}`)
      .then(() => { })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    const user = localStorageControl.getItem('user');
    if (user) {
      getAllAllFacilities();
      getAllFacilityOwners();
      getAllAllFacilityLevels();
      getAllFacilityPolicyCatergories();
      getAllFacilityPolicyOptions();
    }
  }, []);

  const handleActiveTabChanged = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <FacilityManagementContext.Provider
      value={{
        activeTabIndex,
        facilities,
        facilityOwners,
        facilityOwnerFormData,
        setRecordId,
        recordId,
        facilityPolicyCategories,
        facilityPolicyOptions,
        facilityLevels,
        facilityToBeEdited,
        handleActiveTabChanged,
        facilityRegistration,
        facilityLevelRegistration,
        facilityOwnerRegistration,
        setFacilityOwnerFormData,
        getAllFacilityPolicyCatergories,
        setFacilityPolicyOptions,
        getAllFacilityOwners,
        getAllAllFacilities,
        getAllAllFacilityLevels,
        updateFacility,
        updateFacilityLevel,
        updateFacilityOwner,
        deleteFacility,
        deleteFacilityLevel,
        deleteFacilityOwner,
        setFacilityToBeEdited,
      }}
    >
      {children}
    </FacilityManagementContext.Provider>
  );
}

FacilityManagementContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const useFacilityManagementContext = () =>
  React.useContext(FacilityManagementContext);

export default FacilityManagementContextProvider;
