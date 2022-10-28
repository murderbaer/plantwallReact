import React from 'react';

import { useSelector } from 'react-redux';

export default function Settings() {
    const apiUrl = useSelector((state) => state.settings.apiUrl);
    return <h1>{apiUrl}</h1>;
}
