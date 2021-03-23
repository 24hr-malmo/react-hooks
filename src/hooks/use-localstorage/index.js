import { useState, useEffect } from 'react';

/**
 * @typedef Options
 * @property {boolean} [clearOnUnmount] - Whether or not to clear the localstorage value on unmount.
 */

/**
 * A hook that syncs the state with a property in the localstorage.
 * @param {string} defaultVal - The initial value
 * @param {string} key - Mandatory key to use to store the data in localstorage.
 * @param {Options} options - Options object
 * @return {[any, function, function]} - Return the current state, a set state function and a function to clear the storage.
 */
const useLocalStorage = (defaultVal, key, { clearOnUnmount = false } = {}) => {
    if (!key) {
        throw new Error('useLocalStorage: Key must be set.');
    }
    const [shouldUpdateStorage, setShouldUpdateStorage] = useState(true);
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(window.localStorage.getItem(key)) ?? defaultVal;
        } catch (error) {
            value = defaultVal;
        }
        return value;
    });

    /**
     * Function that will update state with given value.
     * @param {any} value - Value to be set as state
     * @param {boolean} updateLocalStorage - If the new state should be saved to localstorage.
     */
    function updateState(value, updateLocalStorage = true) {
        setShouldUpdateStorage(updateLocalStorage);
        setState(value);
    }

    /**
     * Clears the value from state and localstorage
     * @param {any} [newState] - If clear function should set new state.
     */
    function clearStorage(newState) {
        if (typeof newState !== 'undefined') {
            setShouldUpdateStorage(false);
            setState(newState);
        }
        window.localStorage.removeItem(key);
    }

    useEffect(
        () => () => {
            if (clearOnUnmount) {
                clearStorage();
            }
        },
        []
    );

    useEffect(() => {
        if (shouldUpdateStorage) {
            // Set localStorage item whenever state changes
            window.localStorage.setItem(key, JSON.stringify(state));
        }
    }, [state, shouldUpdateStorage]);

    return [state, updateState, clearStorage];
};

export default useLocalStorage;
