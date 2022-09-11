// import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
// import { AppDispatch, RootState } from '../store/store';

// export const useCustomDispath = () => useDispatch<AppDispatch>();
// export const useCustomSelector: TypedUseSelectorHook<RootState>  = useSelector;


import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;


