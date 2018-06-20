import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import Groom from './groom';
import Bride from './bride';
import Logout from './logout';
import Invitation from './invitation';
import Venue from './venue';
import FoodMenu from './foodmenu';
import Schedule from './timeline';


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
        Venue : {

            path:'/sent',
            screen : Venue,

      },
      FoodMenu : {

            path:'/sent',
            screen : FoodMenu,

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
