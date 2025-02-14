import { useState } from 'react';

/**
 * Custom hook to manage alert state.
 *
 * @returns {Object} An object containing:
 * - `alert` {Object}: The current alert state with properties:
 *   - `show` {boolean}: Whether the alert is shown.
 *   - `text` {string}: The alert message.
 *   - `type` {string}: The type of alert (e.g., 'danger').
 * - `showAlert` {Function}: Function to show the alert with specified text and type.
 *   - @param {Object} params - Parameters for the alert.
 *   - @param {string} params.text - The alert message.
 *   - @param {string} [params.type='danger'] - The type of alert.
 * - `hideAlert` {Function}: Function to hide the alert.
 */
const useAlert = () => {
	const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' });

	const showAlert = ({ text, type = 'danger' }) => setAlert({ show: true, text, type });
	const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

	return { alert, showAlert, hideAlert };
};

export default useAlert;
