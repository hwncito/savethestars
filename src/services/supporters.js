import { APPS_SRIPT_URL } from '@/constants';

export const fetchSupporters = async () => {
  try {
    const response = await fetch(APPS_SRIPT_URL + '?type=getSupporters');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(`There was an error: ${e.message}`);
  }
};

export const addSupporter = async (email) => {
  try {
    const response = await fetch(
      APPS_SRIPT_URL + `?type=addSupporter&email=${email}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error(`There was an error: ${e.message}`);
  }
};
