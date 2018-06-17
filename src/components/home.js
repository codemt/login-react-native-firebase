import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Groom from './groom';
import Bride from './bride';
import Logout from './logout';
import Invitation from './invitation';

const DrawerExample = DrawerNavigator(
    {
        Home : {

              path: '/',
              screen : Invitation,
        },
        Groom : {

            path:'/sent',
            screen : Groom,

      },
        Bride : {

              path:'/sent',
              screen : Bride,

        },
        Logout : {

          path:'/sent',
          screen : Logout,

        },
    },
    {
          initialRouteName : 'Home',
          drawerPosition : 'left'

    }

);
export default DrawerExample;
