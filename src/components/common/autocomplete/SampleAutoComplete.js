import React from 'react';
import { users } from '../../../_data/dummydata';
import SearchAutoComplete from './index';

const excludeColumns = ['email', 'phone', 'website'];

const SampleAutoComplete = (props) => {


  return( 
    <> 
      <SearchAutoComplete userData={users} excludeColumns={excludeColumns} />
    </>
  );
 }
 
 export default SampleAutoComplete;
 