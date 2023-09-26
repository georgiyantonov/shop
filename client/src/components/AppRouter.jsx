import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {authRoutes, publicRoutes, secretRoutes} from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

export const AppRouter = observer(() => {
  const {user} = useContext(Context)
  
  return (
    <Routes>
      { user.isAuth && authRoutes.map(({path, Component}) => 
        <Route key={path} path={path} Component={Component} exact/>
      )}
      { user.isAuth && user.isAdmin && secretRoutes.map(({path, Component}) =>
        <Route key={path} path={path} Component={Component} exact/>
      )}
      { publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} Component={Component} exact/>
      )}
      <Route
        path="*"
        element={<Navigate to={SHOP_ROUTE} replace />}
      />
    </Routes>
  )
})
