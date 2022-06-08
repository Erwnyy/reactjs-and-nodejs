import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import ItemsProduct from '../pages/product/Product'

const Router = () => {

  //Untuk validasi apakah ada user atau tidak
  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <div>
            <Routes >
                <Route path="/">
                    <Route path="login" element={<Login />} />
                    <Route
                      index
                      element={
                        <ProtectedRoute>
                          <Home />
                        </ProtectedRoute>
                      }
                      />

                      <Route path="product">
                        <Route
                          index
                          element={
                            <ProtectedRoute>
                              <ItemsProduct />
                            </ProtectedRoute>
                          }
                        />
                        
                      </Route>
                </Route>
            </Routes >
    </div>
  )
}

export default Router