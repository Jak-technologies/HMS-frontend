import { combineReducers } from 'redux';
import { bodyGradientReducer, borderRadiusReducer, boxLayoutReducer, iconColorReducer, monochromeReducer, strokeReducer, themeModeReducer, themeReducer } from './settingsReducers';
import authReducer from './authSlice';

const rootReducer = combineReducers({
    themeMode: themeModeReducer,
    theme: themeReducer,
    stroke: strokeReducer,
    boxLayout: boxLayoutReducer,
    monochrome: monochromeReducer,
    borderRadius: borderRadiusReducer,
    iconColor: iconColorReducer,
    gradientColor: bodyGradientReducer,
    auth: authReducer
});

export default rootReducer;