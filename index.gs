/*
 * Copyright (C) 2018 William Granados<william.granados@wgma00.me>
 * 
 * This file is part of TornSpread.
 * 
 * TornSpread is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * TornSpread is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with TornSpread.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Retrieve the quantity of the specified item in the specified user's inentory.
 * 
 * @desc requirement api_key should be from the specific user specified with 
 *    userid otherwise the torn server will return an error code.
 *
 * @param {int} itemId id of the item you want to retrieve.
 * @param {str} apiKey apikey for associated torn user.
 * @param {str} userId userid you want to check.
 * @return a string 'YES' or 'NO' depending on if the specified user has the amount of flower
 */
function ITEMINVENTORY(itemId, apiKey, userId) {
  var response = UrlFetchApp.fetch('https://api.torn.com/user/'+userId+'?selections=inventory&key='+apiKey);
  var items = JSON.parse(response.getContentText()).inventory;
  var returnVal = 0;
  for(var i = 0; i < items.length; i++) {
    var item = items[i];
    if(item.ID == itemId) {
      returnVal = item.quantity;
      break;
    }
  }
  return returnVal;
}


