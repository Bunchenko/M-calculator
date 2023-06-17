import { createAction } from "@reduxjs/toolkit";

export const calculate = createAction('app/calculate')
export const clearAll = createAction('app/clearAll')
export const undo = createAction('app/undo')